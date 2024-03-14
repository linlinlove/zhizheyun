<template>
  <view class="current pt-re">
    <image class="top-img pt-ab" src="/static/icon/my/ball.png" mode=""></image>
    <view class="arcbottom"></view>
    <view class="userInfo f-row ai-c box-border">
      <block v-if="userInfo">
        <image :src="userInfo.avatar" class="avatar" mode=""></image>
        <view class="iName-phone f-column jc-sb box-border">
          <view class="iName">
            {{ userInfo.nickname }}
          </view>
          <view class="phone">
            {{ userInfo.mobile }}
          </view>
          <view class="phone">
            院校与专业
            <!-- {{userInfo.mobile}} -->
          </view>
        </view>
        <image class="icon-setup" src="/static/icon/my/icon8.png" mode="" @tap="jumpPage"></image>
      </block>
      <block v-else>
        <view class="f-row ai-c">
          <view class="empty avatar f-row ai-c jc-c">
            <u-icon size="34" name="account-fill" color="#c9c9c9"></u-icon>
          </view>
          <button class="iName-phone f-row ai-c jc-c login" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">登录</button>
        </view>
      </block>
    </view>
    <u-toast ref="uToast"></u-toast>
    <u-popup :show="show" mode="bottom" @close="close" @open="open">
      <view class="p-3">
        <view style="padding: 30px 0;">
          <u-text text="获取个人信息,立即登录"></u-text>
		  <view style="width: 100%;">
		    
		    <view>
		        <!-- 选择框 -->
		        <view class="select-box" @tap="openOccupationPicker">
		          <text v-if="!selectedOccupation">请选择职业</text>
		          <text v-else>{{ selectedOccupation }}</text>
		        </view>
		    
		        <!-- 职业选择的 picker -->
		        <picker 
		          v-if="showPicker"
		          mode="selector"
		          :range="occupationOptions"
		          @change="selectOccupation"
		        >
		          <view class="picker-trigger">点击选择职业</view>
		        </picker>
		  </view>
		    
		  </view>
        </view>
        <view class="f-row jc-sb">
          <view style="width: 40%;">
            <u-button text="拒绝" type="info" @click="refuse"></u-button>
          </view>
          <view style="width: 40%;">
            <u-button text="同意" type="primary" @click="getUserinfo"></u-button>
          </view>
        </view>
       
      </view>
    </u-popup>
  </view>
</template>

<script>
// import { getWxUserinfo, getWxPhone, upRegister } from "@/request/api.js";
let WebIM = require("@/utils/WebIM")["default"];
let disp = require("../../utils/broadcast");


import {
		getWxUserinfo,
		getWxPhone,
		upRegister
	} from '@/request/api.js'
	import {
		log
	} from 'util';
export default {
  props: {
    userInfo: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      data: null,
      userCode: null,
      show: false,
      showPicker: false,
            selectedOccupation: "",
            occupationOptions: [
              "应届生",
              "实习生",
              "职场人群",
              "40.50灵活就业人群",
              "残疾人",
              "退伍军人",
              "失业人员",
              "创业者",
            ],
    };
  },
  mounted() {
    // 获取保存的职业信息
    const savedOccupation = uni.getStorageSync("selectedOccupation");
  
    // 输出职业信息到控制台
    console.log("Saved Occupation:", savedOccupation);
  },
  methods: {
    chooseOccupation() {
      this.show = true;
    },
	openOccupationPicker() {
	      this.showPicker = true;
	    },

    selectOccupation(event) {
      const index = event.detail.value;
            this.selectedOccupation = this.occupationOptions[index];
            this.showPicker = false;
			uni.setStorageSync("selectedOccupation", this.selectedOccupation);
			
      switch (event) {
          case "应届生":
            uni.navigateTo({
                    url: "pages/index/index",
                  });
            break;
          case "实习生":
            uni.navigateTo({
                    url: "pages/index/index",
                  });
            break;
          case "职场人群":
            uni.navigateTo({
                    url: "resume_pages/cecord/cecord",
                  });
            break;
          case "40.50灵活就业人群":
            uni.navigateTo({
                    url: "resume_pages/cecord/cecord2",
                  });
            break;
          case "残疾人":
            uni.navigateTo({
                    url: "resume_pages/cecord/cecord3",
                  });
            break;
          case "退伍军人":
            uni.navigateTo({
                    url: "resume_pages/cecord/cecord4",
                  });
            break;
          case "失业人员":
            uni.navigateTo({
                    url: "resume_pages/cecord/cecord5",
                  });
            break;
          case "创业者":
            uni.navigateTo({
                    url: "resume_pages/cecord/cecord6",
                  });
            break;
          default:
            break;
        }
    },
    refuse() {
      uni.removeStorageSync("token");
      this.show = false;
    },
    open() {
      // console.log('open');
    },
    close() {
      this.show = false;
      // console.log('close');
    },
    /* 个人信息 */
    jumpPage() {
      uni.navigateTo({
        url: "/pages/my/userInfo",
      });
    },
    /* 登录获取token*/
    getPhoneNumber(e) {
      //open-type="getPhoneNumber"后，e可获取code,这个code用于获取当前授权的手机号
      getWxPhone({
        code: e.detail.code,
      }).then((r) => {
        uni.setStorageSync("token", r.data.token);
        this.show = true;
        /* this.getWxUserinfo() */
      });
    },
    /* 用户信息 */
    getUserinfo() {
      this.show = false;
      wx.getUserProfile({
        lang: "zh_CN",
        withCredentials: true,
        desc: "用于完善资料",
        success: (res) => {
          const userInfo = res.userInfo;
          						      const avatarUrl = userInfo.avatarUrl; // 用户头像链接
          						      const nickName = userInfo.nickName;
          wx.login({
            provider: "weixin",
            success: (loginRes) => {
              console.log("登录信息：");
              console.log(res.userInfo);
              getWxUserinfo({
                code: loginRes.code,
                avatar: res.userInfo.avatarUrl,
                nickname: res.userInfo.nickName,
                gender: res.userInfo.gender,
              }).then((r) => {
                uni.setStorageSync("userInfo", r.data);
                this.data = uni.getStorageSync("userInfo");
                if (r.data.im_status == 0) {
                  this.register(r.data.mobile);
                } else {
                  // this.loginFn(r.data.mobile);
                  this.selectedOccupation = r.data.occupation;
                }
              });
            },
          });
        },
        fail: (err) => {
          uni.removeStorageSync("token");
          uni.$emit("hasLogin", false);
          console.log(err, "用户信息失败");
          uni.showToast({
            icon: "none",
            title: "登录失败，请重试！",
          });
        },
      });
    },
    //环信注册
    register(username) {
      let userInfo = uni.getStorageSync("userInfo");
      var options = {
        apiUrl: WebIM.config.apiURL,
        username: username,
        password: "123456",
        nickname: userInfo.nickname,
        appKey: WebIM.config.appkey,
        success: (res) => {
          upRegister().then((res) => {
            if (res.code == 1) {
              uni.showToast({
                title: "更新身份成功",
                duration: 1500,
              });
              console.log("更新身份成功");
              this.loginFn(username);
            } else {
              console.log("更新信息失败");
            }
          }); //更新数据
        },
        error: (err) => {
          uni.removeStorageSync("token");
          console.log("环信注册失败", err);
        },
      };
      WebIM.conn.registerUser(options);
    },
    //环信登录
    loginFn(username) {
      console.log(username, "环信username");
      uni.WebIM.conn.open({
        user: username,
        pwd: "123456",
        appkey: uni.WebIM.config.appKey,
      });
      uni.setStorage({
        key: "myUsername",
        data: username,
      });

      uni.$emit("hasLogin", true);
    },
  },
};
</script>

<style lang="scss" scoped>
button::after {
  border: none;
}

button {
  background-color: transparent;
  color: #fff;
}

.empty {
  background-color: #f1f1f1;
}

.login {
  font-size: 42upx;
}

.iName-phone {
  padding: 15upx 20upx;
  height: 140upx;
}

.userInfo {
  position: absolute;
  top: 60upx;
  color: #fff;
  width: 100%;
  padding: 0 30upx;
}

.icon-setup {
  width: 30upx;
  height: 30upx;
  position: absolute;
  right: 30upx;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
}

.avatar {
  width: 140upx;
  height: 140upx;
  border-radius: 50%;
}

.top-img {
  right: 0;
  top: 0;
  width: 360upx;
  height: 360upx;
  z-index: 9;
}

.current {
  overflow: hidden;
}

.arcbottom {
  width: 200%;
  position: relative;
  height: 300upx;
  background-color: $common-color;
  border-bottom-left-radius: 140%;
  border-bottom-right-radius: 140%;
  left: 50%;
  transform: translateX(-50%);
}
</style>

