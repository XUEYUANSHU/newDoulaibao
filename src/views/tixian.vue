<template>
    <div>
        <Header url='-1' title="提现"></Header>
        <div class="tixian">

               <div class="formWraper">
                    <p>提现金额</p>
                    <div class="cashContent">
                        <span class="rmb">¥</span>
                        <input v-model="cash" class="cash" autofocus="autofocus"  type="text" value="" placeholder="">
                    </div>
                    <div class="balance"><span>零钱余额</span><span>¥{{balance}}</span><span class="yellowC" @click="allCash">, 全部提现</span></div>
                    <div class="bankLists"  @click="select(0, 'wx')">
                        <div class="left"><img src="../assets/img/微信支付@2x.png"  class="icon-weixin"> <span>微信</span></div>
                        <div class="right"><i class="iconfont" :class="activeName == 'wx' ? 'activeName' : ''">&#xe601;</i></div>
                    </div>
                  
                    <div class="addbank" v-if="banklist.length== 0" @click="bindBank"><i class="iconfont">&#xe63e;</i><span>绑定银行卡</span></div>
                    <div class="bankLists" v-for="(item, idx) in banklist" :key="idx "  @click="select(1,idx)">
                        <div class="left"><img src="../assets/img/银行卡@2x.png"  class="icon-bank"> <span>{{item.bankName}}</span></div>
                        <div class="right" ><i class="iconfont" :class="activeName == idx ? 'activeName' : ''" @click="select(0, 'wx')">&#xe601;</i></div>
                    </div>
                    <div class="submit" @click="submit">立即提现</div>
                    <div class="notation">
                        <p><span>提现规则:</span><span>提现规则</span></p>
                        <p><span>提现费率:</span><span>提现费率</span></p>
                        <p><span>到账时间:</span><span>到账时间</span></p>
                        <p><span>(提现到微信钱包24小时内到账 / 提现到银行卡3个工作日到账)</span></p>
                        <p><span>客服电话:080-11111111</span><span>时间: 上午8:00 至  下午19:00</span></p>
                    </div>
               </div>
        </div>
    
        <div class="redirect" v-if="false">
            <div @click="pushRoute('intoAccount')">1.提现</div>
            <div @click="pushRoute('Certification')">2.提现去认证入口</div>
            <div @click="pushRoute('showMobile')">3.测试跳转到显示手机号码页面</div>
            <div @click="pushRoute('identifyReview')">4.测试跳转到认证审核中</div>
            <div @click="pushRoute('identifySucc')">5.测试跳转到认证审核完成</div>
            <div @click="pushRoute('tixianGoIdentify')">6.测试跳转到提现转实名认证</div>
        </div>
    </div>
</template>
<script>
import axios from "@/api/axios";
import api from "@/api/index.api";
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  },
  data() {
    return {
      cash: "",
      balance: "",
      activeName: "wx",
      banklist: "",
      type: "0",
      bankId: 0,
      isIdentity: ""
    };
  },
  methods: {
    bindBank() {
      this.$router.push("bindBank");
    },
    submit() {
      if (!this.cash) {
        alert("请输入提现金额");
      }
      if (this.cash > this.balance) {
        alert("提现金额 大于 账户余额");
      }
      // 如果没哟实名认证
      if(!this.isIdentity){
          this.$router.push('tixianGoIdentify')
      }
      console.log(this.cash, this.type, this.bankId);
      axios({
        method: "POST",
        url: api.extract,
        data: {
          userId: 1,
          cash: this.cash,
          type: this.type,
          bankId: this.bankId
        }
      })
        .then(res => {
          if (res.code == 200) {
            this.$router.push("tixianWechatSucc");
          }
        })
        .catch(rtn => {
          console.log(rtn);
        });
    },
    select(type, activeName) {
      this.type = type;
      this.activeName = activeName;
      if (activeName == "wx") {
        this.bankId = 0;
      } else {
        this.bankId = this.banklist[activeName].id;
      }
      console.log(type, activeName);
    },
    allCash() {
      this.cash = this.balance;
    },
    pushRoute(param) {
      this.$router.push("" + param + "");
    }
  },
  mounted() {
    // 是否实名认证
    axios({
      method: "POST",
      url: api.checkIdentity,
      data: {
        userId: 1
      }
    })
      .then(res => {
        if (this.res.code == 200) {
          this.isIdentity = true;
        } else {
          this.isIdentity = false;
        }
      })
      .catch(rtn => {
        console.log(rtn);
      });

    //   用户余额
    axios({
      method: "POST",
      url: api.userBalance,
      data: {
        userId: 1
      }
    })
      .then(res => {
        this.balance = res.data;
        console.log(this.data, "用户余额", res.data);
      })
      .catch(rtn => {
        console.log(rtn);
      });

    // 银行卡列表
    axios({
      method: "POST",
      url: api.banklist,
      data: {
        userId: 1
      }
    })
      .then(res => {
        this.banklist = res.data;
        console.log(this.data, "银行卡列表", res.data);
      })
      .catch(rtn => {
        console.log(rtn);
      });
  }
};
</script>
<style lang="less" scoped>
.iconfont {
  font-size: 0.4rem;
  color: #d8d8d8;
}
.activeName {
  color: #fc8d00;
}
.tixian {
  padding: 0.24rem;
  background-color: #f6f6f6;
  .formWraper {
    padding: 0.4rem;
    background-color: #ffffff;
    .cashContent {
      display: flex;
      padding: 0.4rem 0;
      border-bottom: 1px solid #e1e1e1;
      .rmb {
        font-size: 0.4rem;
        color: #333333;
      }
      .cash {
        flex: 1;
        padding-left: 0.1rem;
        font-size: 0.5rem;
        font-weight: 600;
        color: #000;
        background: none;
        outline: none;
        border: none;
        -webkit-appearance: none;
        border-radius: 0;
      }
    }
    .balance {
      padding: 0.4rem 0;
      font-size: 0.24rem;
      color: rgba(153, 153, 153, 0.6);
      line-height: 0.34rem;
      .yellowC {
        color: #fc8d00;
      }
    }
    .bankLists {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.14rem 0;
      font-size: 0.32rem;
      color: rgba(18, 18, 18, 0.9);
      letter-spacing: 0.01rem;
      .icon-weixin {
        display: inline-block;
        width: 0.4rem;
        height: 0.36rem;
        vertical-align: top;
      }
      .icon-bank {
        vertical-align: middle;
        width: 0.52rem;
      }
    }
    .addbank {
      padding: 0.2rem 0;
    }
    .submit {
      width: 6.03rem;
      height: 0.84rem;
      margin: 0.4rem auto 0.6rem auto;
      line-height: 0.84rem;
      text-align: center;
      color: #ffffff;
      background-color: #fc8d00;
    }
    .notation {
      p {
        font-size: 0.2rem;
        line-height: 0.4rem;
        color: #121212;
        background-color: #ffffff;
      }
    }
  }
}

.redirect {
  div {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    color: #fff;
    font-size: 0.4rem;
    text-align: center;
    background-color: #fc8d00;
    margin-top: 0.4rem;
  }
}
</style>
