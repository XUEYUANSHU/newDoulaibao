<template>
    <div>
        <div class="identify" v-if="!identify">
            <div class="text">
              <p>请您完成实名认证后, 再添加</p>
              <p>银行卡哦</p>
            </div>
            <div class="goIdentify" @click="go()">前去实名认证</div>
        </div>
        <div class="bankInfo"  v-if="identify">
            <div class="spacing"></div>
            <div>  
                <div class="infoList">
                    <span class="left">持卡人</span><span class="right">都来宝</span>
                </div>
                <div class="infoList">
                    <span class="left">身份证号码</span><span>350002*******2235wo</span>
                </div>
                <div class="infoList">
                    <span class="left">银行卡号</span><input class="right" placeholder="请输入银行卡号"> 
                </div>
                <div class="spacingText">填写银行预留手机号</div>
                <div class="infoList">
                    <span class="left">手机号</span><input class="right" placeholder="请输入手机号"> 
                </div>
                <div class="infoList code">
                    <input class="left text-left" placeholder="请输入验证码"> <div class="right yellow">请输入验证码</div>
                </div>
            </div>
            <div class="submit" @click="submit()">提交</div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      identify: true
    };
  },
  methods: {
    //绑定成功跳转
    submit() {
      console.log("提交");
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.identify {
  .text {
    text-align: center;
    color: #333333;
    font-size: 0.36rem;
    padding: 1.16rem 0.96rem;
  }
  .goIdentify {
    width: 5.6rem;
    height: 0.72rem;
    margin: 0 auto;
    line-height: 0.72rem;
    text-align: center;
    color: #ffffff;
    border-radius: 0.08rem;
    background: #fc8d00;
  }
}
.bankInfo {
  .spacing {
    height: 0.2rem;
    background: #efefef;
  }
  .infoList {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    height: 0.82rem;
    padding: 0.12rem 0.48rem;
    font-size: 0.24rem;
    color: #323232;
    border-bottom: 1px solid #efefef;
    .left {
    }
    .right {
    }
    input {
      border: none;
      background: none;
      outline: none;
      text-align: right;
    }
    .text-left {
      text-align: left;
    }
  }
  .code {
    padding: 0 0.48rem;
    .yellow {
      width: 2.18rem;
      line-height: 0.82rem;
      color: #ffffff;
      font-size: 0.28rem;
      border-radius: 0.04rem;
      text-align: center;
      background-color: #fc8d00;
    }
  }
  .spacingText {
    padding: 0 0.48rem;
    height: 0.64rem;
    line-height: 0.64rem;
    font-size: 0.24rem;
    color: #6b6b6b;
    background: #efefef;
  }
  .submit {
    width: 6.06rem;
    height: 0.84rem;
    margin: 0.48rem auto 0 auto;
    line-height: 0.84rem;
    text-align: center;
    color: #ffffff;
    font-size: 0.32rem;
    border-radius: 0.08rem;
    background-color: #fc8d00;
  }
}
</style>
