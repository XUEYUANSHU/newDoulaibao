<template>
    <div>
        <Header url="-1" title="订单列表" />
        <div class="header">
            <div class="insuranceType">
                <span :class="activeType== '0'? 'activeType': ''"  @click="selected(0)">车险</span>
                <span :class="activeType== '2'? 'activeType': ''"  @click="selected(2)">个险</span>
                <span :class="activeType== '1'? 'activeType': ''"  @click="selected(1)">理财</span></div>
            <div class="insuranceStatus">
                <span :class="activeStatus== '0'? 'activeStatus': ''"  @click="selectedStatus(0)">待支付</span>
                <span :class="activeStatus== '1'? 'activeStatus': ''"  @click="selectedStatus(1)">已支付</span>
                <span :class="activeStatus== '2'? 'activeStatus': ''"  @click="selectedStatus(2)">即将到期</span>
                <span :class="activeStatus== '3'? 'activeStatus': ''"  @click="selectedStatus(3)">待支已失效</span>
            </div>
        </div>
        <div class="spacing"></div>
        <div class="orderWraper">
            <ul>
                <li class="orderList" v-for="(item, idx) in list" :key="idx">
                    <div class="orderHeader">
                        <img src="../assets/img/logo@2x.png" alt="">
                        <span class="insuranceTitle">{{item.productName}}</span>
                        <span class="status">{{statusAry[item.orderStatus]}}</span>
                    </div>
                    <div class="orderInfo">
                        <div v-if="activeType == 1"><span class="text">总价 : </span><span>{{item.payPrice + '元'}}</span></div>
                        <div v-if="activeType == 1"><span class="text">份数 : </span><span>{{item.copies+ '份'}}</span></div>
                        <div v-if="activeType == 1"><span class="text">购买人 : </span><span>{{item.applicant}}</span></div>
                        <div v-if="activeType != 1" ><span class="text">被投保人 : </span><span>{{item.recognizee}}</span></div>
                        <div v-if="activeType != 1" ><span class="text">投保人 : </span><span>{{item.recognizee}}</span></div>
                        <div><span class="text">时间 : </span><span>{{item.updateTime | timeSplit}}</span></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from "axios";
// import axios from '@/api/my-axios.js'
import api from "@/api/index.api";
import router from "@/router/index";
import moment from "moment";
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  },
  data() {
    return {
      activeStatus: "0",
      activeType: "1",
      list: [],
      statusAry: ["待支付", "已支付", "即将到期", "待支已失效"]
    };
  },
  mounted() {
    axios({
      method: "POST",
      url: api.orderList,
      data: {
        userId: 1,
        status: 1,
        type: 0
      }
    })
      .then(res => {
        this.list = Object.assign([], res.data);
        console.log(this.list, "请求到的订单列表数据", res.data);
      })
      .catch(rtn => {
        console.log(rtn);
      });
  },
  filters: {
    timeSplit(v) {
      return moment(v).format("YYYY-MM-DD HH:mm");
    }
  },
  methods: {
    selectedStatus(type) {
      this.activeStatus = type;
      axios({
        method: "POST",
        url: api.orderList,
        data: {
          userId: 1,
          status: this.activeStatus,
          type: this.activeType
        }
      })
        .then(res => {
          console.log("请求到的订单列表数据", res.data);
          this.list = Object.assign([], res.data);
        })
        .catch(rtn => {
          console.log(rtn);
        });
    },
    selected(type) {
      this.activeType = type;
      console.log("选择了哪个险种", type);
      axios({
        method: "POST",
        url: api.orderList,
        data: {
          userId: 1,
          status: this.activeStatus,
          type: this.activeType
        }
      })
        .then(res => {
          console.log("请求到的订单列表数据", res.data);
          this.list = Object.assign([], res.data);
        })
        .catch(rtn => {
          console.log(rtn);
        });
    }
  }
};
</script>
 
<style lang="less">
.header {
  box-sizing: border-box;
  height: 1.76rem;
  padding: 0.2rem 0 0.28rem 0;

  .insuranceType {
    display: flex;
    width: 3.6rem;
    height: 0.64rem;
    margin: 0 auto;
    font-size: 0.24rem;
    color: #fff;
    span {
      flex: 1;
      text-align: center;
      line-height: 0.64rem;
      background: #e68509;
    }
    span:nth-child(1) {
      border-radius: 0.34rem 0 0 0.34rem;
    }
    span:nth-child(3) {
      border-radius: 0 0.34rem 0.34rem 0;
    }
    .activeType {
      background: #fc8d00;
    }
  }
  .insuranceStatus {
    display: flex;
    height: 0.42rem;
    margin-top: 0.22rem;
    font-size: 0.28rem;
    span {
      flex: 1;
      text-align: center;
      line-height: 0.42rem;
      color: #999999;
      border-left: 1px solid #f0eeee;
    }
    .activeStatus {
      color: #fc8d00;
    }
  }
}
.spacing {
  height: 0.12rem;
  background: #f2f2f2;
}
.orderWraper {
  .orderList {
    padding: 0 0.24rem;
    font-size: 0.28rem;
    color: #fc8d00;
    font-size: 0.28rem;
    .orderHeader {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.16rem 0;
      border-bottom: 1px solid #f0eeee;
      img {
        width: 1.6rem;
        height: 0.8rem;
      }
      .insuranceTitle {
        flex: 6;
        box-sizing: border-box;
        width: 2.35rem;
        padding: 0 0.15rem;
      }
      .status {
        flex: 1.5;
        font-size: 0.24rem;
      }
    }
    .orderInfo {
      box-sizing: border-box;
      height: 1.74rem;
      padding: 0.2rem 0;
      line-height: 0.32rem;
      div {
        padding: 0.02rem 0;
        // line-height: 0.48rem;
        .text {
          color: #333333;
        }
      }
    }
  }
}
</style>
 
