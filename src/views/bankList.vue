<template>
    <div>
        <Header url="-1" title="银行卡" />
        <div class="binkListWrapper" v-if="!showDelete">
            <div class="bankList" v-for="(item,idx) in bankList" :key=idx @click="showTips(true, idx)">
              <div><i class="iconfont icon-bink">&#xe617;</i><span class="bandName">{{item.bankName}}</span><span>{{item.bankNum}}</span></div>
            </div>
            <div class="addBank" @click="go">
                <i class="iconfont">&#xe63e;</i>
            </div>
        </div>
        <div class="cancelBank" v-if="showDelete">
          <div class="bankList" >
            <div><span>您将解绑</span><span class="bandName">{{bankList[idx].bankName}}</span><span>{{bankList[idx].bankNum}}</span></div>
          </div>
          <div class="title">请输入动态验证码完成解绑</div>
          <input class="checkCode" autofocus="autofocus" type="text" v-model="code" placeholder="请输入验证码">
          <div class="submit" @click="submit">提交</div>
        </div>
          <div class="tips" v-if="showTip">
            <div class="tipsContent">
                <div class="title">您确定解绑该银行卡吗?</div>
                <div class="cancel" @click="showTips(false)">取消</div>
                <div class="delete" @click="cancel()">确定</div>
            </div>
         </div>
    </div>
</template>

<script>
import axios from "axios";
// import axios from '@/api/my-axios.js'
import api from "@/api/index.api";
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  },
  data() {
    return {
      bankList: {},
      showTip: false,
      showDelete: false,
      idx: "",
      code: ""
    };
  },
  methods: {
    submit() {
      if (!this.code) {
        alert("请输入验证码");
      }
      axios({
        method: "POST",
        url: api.unbindbankcard,
        data: {
          userId: 1,
          bankId: this.banklist[this.idx*1].bankId,
          code: this.code
        }
      })
        .then(res => {
          console.log("接触银行卡的返回", res);
          if(res.code == 0){
            alert('接触绑定成功')
          } else{
            alert(res.message)
          }
        })
        .catch(rtn => {
          console.log(rtn);
        });
    },
    cancel() {
      this.showTip = false;
      this.showDelete = true;

      axios({
        method: "POST",
        url: api.sms,
        data: {
          mobile: this.bankList[this.idx * 1].bankMobile
        }
      })
        .then(res => {
          console.log("发送验证码返回的接口", res);
        })
        .catch(rtn => {
          console.log(rtn);
        });
    },
    showTips(isShow, idx) {
      this.showTip = isShow;
      this.idx = idx;
    },
    go() {
      this.$router.push("bindBank");
    }
  },
  mounted() {
    axios({
      method: "POST",
      url: api.banklist,
      data: {
        userId: 1
      }
    })
      .then(res => {
        console.log("银行卡列表数组", res.data);
        this.bankList = res.data;
        if (res.data.length == 0) {
          this.$router.push("bindBank");
        }
      })
      .catch(rtn => {
        console.log(rtn);
      });
  }
};
</script>
<style lang="less" scoped>
.cancelBank {
  padding: 0 0.24rem;
  .bandName {
    height: 1rem;
    line-height: 1rem;
    font-size: 0.28rem;
    color: #7d7d7d;
  }
  .title {
    height: 1rem;
    line-height: 1rem;
    font-size: 0.28rem;
    color: #7d7d7d;
    background: #f9f9f9;
  }
  .checkCode {
    width: 100%;
    background: none;
    outline: none;
    border: none;
    border-bottom: 1px solid #eeeeee;
  }
  .submit {
    width: 6.06rem;
    height: 0.84rem;
    line-height: 0.84rem;
    margin: 0.2rem auto;
    text-align: center;
    border-radius: 4px;
    color: #ffffff;
    background: #fc8d00;
  }
}
.tips {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  .tipsContent {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 4px;
    -webkit-transform: translate(-50%, -70%);
    transform: translate(-50%, -70%);
    div {
      width: 5.4rem;
      height: 1rem;
      line-height: 1rem;
    }
    .title {
      font-size: 0.42rem;
      color: #ffffff;
      background: #fc8d00;
    }
    .cancel {
      font-size: 0.42rem;
      color: #545454;
      background-color: #ffffff;
    }
    .delete {
      font-size: 0.42rem;
      color: #cecece;
      background-color: #ffffff;
    }
  }
}
.bankList {
  height: 0.84rem;
  line-height: 0.84rem;
  padding-left: 0.24rem;
  font-size: 0.28rem;
  color: #323232;
  .bandName {
    padding: 0 0.24rem;
  }
  .icon-bink {
    color: #f79a46;
    vertical-align: bottom;
  }
}
.addBank {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 0.4rem auto;
  background: #f1f1f1;
  text-align: center;
  i {
    font-size: 0.6rem;
    line-height: 1rem;
    color: #c4c4c4;
  }
}
</style>
