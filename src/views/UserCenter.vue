<template>
    <div class="userCenter">
        <div class="container">
            <div class="header">
                <div class="item-left">
                    <div class="item-user-msg">
                        <img src="../assets/img/headimg.jpg" class="avador" @click="pushRoute('userProfile')" alt="">
                        <span class="user-name">都来宝</span>
                        <span class="user-number">12345678</span>
                    </div>
                </div>
                <div class="item-right">
                    <div class="item-detail">
                        <p><i class="icon-total"></i><span>累计收入</span></p>
                        <p class="total-money">7000</p>
                        <div class="item-cash">
                            <p><span>可提现</span>{{}}</p>
                            <p><span>待生效</span>{{}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-target">
                <ul>
                    <li @click="pushRoute('myWealth')">
                        <i class="user-icon-left icon-wealth"></i>
                        <span>我的财富</span>
                        <i class="user-icon-right"></i>
                    </li>
                    <li>
                        <i class="user-icon-left icon-order"></i>
                        <span>我的订单</span>
                        <i class="user-icon-right"></i>
                    </li>
                    <li>
                        <i class="user-icon-left icon-leader"></i>
                        <span>我是团长</span>
                        <i class="user-icon-right"></i>
                    </li>
                    <li>
                        <i class="user-icon-left icon-member"></i>
                        <span>我是团员</span>
                        <i class="user-icon-right"></i>
                    </li>
                    <li>
                        <i class="user-icon-left icon-msg"></i>
                        <span>消息中心</span>
                        <i class="user-icon-right"></i>
                    </li>
                </ul>
            </div>
          <ele_footer  :activeName="3"></ele_footer>
        </div>

    </div>

</template>
<script>
import footer from "@/components/footer.vue";
import axios from "@/api/axios";
import api from "@/api/index.api";
import router from "@/router/index";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  prop: {
    //        option:Object
  },
  components: {
    swiper,
    swiperSlide,
    ele_footer: footer
  },
  data() {
    return {
      bannerList: [],
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  //    data: ,
  created() {
    //budgetListuserId
  },
  methods: {
    pushRoute(param) {
      this.$router.push("" + param + "");
    }
  }
};
</script>
<style lang="less" scoped>
body {
  background-color: #f2f2f2 !important;
  height: 100% !important;
  width: 100%;
}
.header {
  width: 7.5rem;
  height: 3.84rem;
  background-color: #009944;
  display: flex;
  text-align: center;
  .item-left {
    flex: 1;
    padding: 0.24rem 0 0.18rem 0;
    .item-user-msg {
      border-right: 1px solid #fff;
      height: 100%;
      text-align: center;
      img {
        width: 1.26rem;
        height: 1.26rem;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        margin: 0.5rem auto 0.22rem;
      }
      span {
        display: block;
        color: #fff;
        font-size: 0.3rem;
        line-height: 0.44rem;
      }
    }
  }
  .item-right {
    flex: 1;
    padding: 0.24rem 0 0.18rem 0;
    .item-detail {
      padding: 0.5rem 0.32rem;
      color: #fff;
      p {
        font-size: 0.32rem;
        display: flex;
        align-items: center;
        .icon-total {
          background: url("../assets/img/user-icon-total.png") no-repeat center;
          background-size: cover;
          width: 0.48rem;
          height: 0.48rem;
          display: inline-block;
        }
        span {
          margin-left: 0.1rem;
        }
      }
      p.total-money {
        font-size: 0.6rem;
        line-height: 0.9rem;
        /* padding-left: 66rem; */
        padding-left: 0.33rem;
      }
      .item-cash {
        padding: 0.4rem 0;
        span {
          line-height: 0.4rem;
          font-size: 0.28rem;
          margin-right: 0.3rem;
        }
      }
    }
  }
}
.item-target {
  /*margin-top: .2rem;*/
  ul {
    background-color: #fff;
    li {
      padding: 0.2rem 0.2rem 0.2rem 0.4rem;
      font-size: 0.3rem;
      color: #262626;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f2f2f2;
      span {
        margin-left: 0.2rem;
        flex: 1;
      }
      i.user-icon-left {
        width: 0.36rem;
        height: 0.34rem;
      }
      i.user-icon-right {
        background: url("../assets/img/user-icon-more.png") no-repeat center;
        width: 0.18rem;
        height: 0.36rem;
        background-size: cover;
      }
      i.icon-wealth {
        background: url("../assets/img/user-icon-total.png") no-repeat center;
        background-size: cover;
      }

      i.icon-order {
        background: url("../assets/img/user-icon-order (2).png") no-repeat
          center;
        background-size: cover;
      }
      i.icon-leader {
        background: url("../assets/img/user-icon-member.png") no-repeat center;
        background-size: cover;
      }
      i.icon-member {
        background: url("../assets/img/user-icon-member.png") no-repeat center;
        background-size: cover;
      }
      i.icon-msg {
        background: url("../assets/img/user-icon-msg.png") no-repeat center;
        background-size: cover;
      }
    }
    li:nth-child(1) {
      border-bottom: 0.2rem solid #f2f2f2;
      border-top: 0.2rem solid #f2f2f2;
    }
  }
}
 
</style>
