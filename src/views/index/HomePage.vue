<template>
    <div>
        <swiper :options="swiperOption">
            <swiper-slide> <img src="../../assets/img/banner1.png" class="swi-img"></swiper-slide>
            <swiper-slide><img src="../../assets/img/banner3.png" class="swi-img"></swiper-slide>
            <swiper-slide> <img src="../../assets/img/banner4.png" class="swi-img"></swiper-slide>
            <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
        </swiper>
        <div class="nav">
            <ul>
                <li>
                    <img src="../../assets/img/chuangfugonglue.png" alt="" @click="gotoRaider">
                    <span>创富攻略 </span>
                </li>
                <li>
                    <img src="../../assets/img/woshituanzhang.png" alt="" @click="gotoHeader">
                    <span>我是团长 </span>
                </li>
                <li>
                    <img src="../../assets/img/woshituanyuan.png" alt="" @click="gotoMember">
                    <span>我是团员 </span>
                </li>
                <li @click="gotomyWealth">
                    <img src="../../assets/img/wodecaifu.png" alt="">
                    <span>我的财富  </span>
                </li>
            </ul>
        </div>
        <div class="huoke">
            <p>
                <i class="icon-huoke"></i>
                <span>获客产品</span>
                <span class="more">更多</span>
            </p>
            <div class="product">
                <div class="huoke-item-left">
                    <img src="../../assets/img/huoke1.png" alt="">
                </div>
                <div class="item-right">
                    <img src="../../assets/img/huoke2.png" alt="">
                    <img src="../../assets/img/huoke3.png" alt="">
                </div>
            </div>
        </div>
         <div class="huoke">
            <p>
                <i class="icon-hotProduct"></i>
                <span>全部产品</span>
                <span class="more">全部</span>
            </p>
        </div>
        <ele_footer></ele_footer>
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
    console.log(api.homeIndex);
    //        var self = this
    this.getData();
    //
  },
  methods: {
    gotoRaider() {
      this.$router.push({ path: "/Raider" });
    },
    gotoHeader() {
      this.$router.push({ path: "/TeamLeader" });
    },
    //        跳转到产品页面
    goAllProduct() {
      this.$router.push({ path: "/Products" });
    },
    gotoMember() {
      this.$router.push({ path: "/TeamMember" });
    },
    gotomyWealth() {
      this.$router.push({ path: "/myWealth" });
    },
    getData() {
      axios({
        method: "POST",
        url: api.wealth,
        data: {
          userId: 1
        }
      })
        .then(res => {
          console.log(res.code);
          console.log(res.data);
          //                this.bannerList = res.data.bannerList;
          //                console.log(this.bannerList)
          //                this.$set(this.items,data)
        })
        .catch(rtn => {
          console.log(rtn);
        });
    }
  }
};
</script>
<style lang="less">
.nav {
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 0;
    border-bottom: 0.2rem solid #f3f0f0;
    li {
      flex: 1;
      text-align: center;
      font-size: 0;
      span {
        display: block;
        margin-top: 0.1rem;
        font-size: 14px;
        color: #3d3d3d;
      }
    }
  }
}
.huoke {
  p {
    display: flex;
    align-items: center;
    font-size: 0.26rem;
	color: #3d3d3d;
	height: 0.8rem;
    padding: 0 0.3rem;
    i.icon-huoke {
      background: url("../../assets/img/huoke-icon.png") no-repeat center;
      background-size: cover;
      width: 0.4rem;
      height: 0.4rem;
      display: block;
    }
    span {
      margin-left: 0.4rem;
    }
    span:nth-child(3) {
      flex: 1;
      text-align: right;
    }
  }
  .product {
    display: flex;
    padding: 0.1rem 0.16rem 0.1rem 0.3rem;
    background-color: #f3f0f0;
    .huoke-item-left {
      width: 3.44rem;
      height: 3.92rem;
      margin-right: 0.1rem;
    }
    .item-right {
      flex: 1;
      img:nth-child(1) {
        width: 3.42rem;
        height: 2.16rem;
      }
      img:nth-child(2) {
        width: 3.42rem;
        height: 1.6rem;
      }
    }
  }
}
</style>
