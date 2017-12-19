<template>
    <div class="home">
        <swiper :options="swiperOption">
            <swiper-slide> <img src="../../assets/img/banner1.png" class="swi-img"></swiper-slide>
            <swiper-slide><img src="../../assets/img/banner3.png" class="swi-img"></swiper-slide>
            <swiper-slide> <img src="../../assets/img/banner4.png" class="swi-img"></swiper-slide>
            <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
        </swiper>
        <div class="nav">
            <ul>
                <li>
                    <img src="../../assets/img/chuangfugonglue.png" alt="">
                    <span>创富攻略 </span>
                </li>
                <li>
                    <img src="../../assets/img/woshituanzhang.png" alt="">
                    <span>我是团长 </span>
                </li>
                <li>
                    <img src="../../assets/img/woshituanyuan.png" alt="">
                    <span>我是团员 </span>
                </li>
                <li>
                    <img src="../../assets/img/wodecaifu.png" alt="">
                    <span>我的财富  </span>
                </li>
            </ul>
        </div>
        <div class="huoke">
            <p>
                <i class="icon-huoke"></i>
                <span>获克产品</span>
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
        <div class="hot"></div>
        <ele_footer  :activeName="1"></ele_footer>
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
    // console.log(api.homeIndex);
    //        var self = this
    this.getData();
    //
  },
  methods: {
    //        跳转到产品页面
    goAllProduct() {
      this.$router.push({ path: "/Allproduct" });
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
<style lang="less" scoped>
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
    font-size: 14px;
    color: #3d3d3d;
    padding: 0.2rem 0.3rem;
    i.icon-huoke {
      background: url("../../assets/img/huoke-icon.png") no-repeat center;
      background-size: cover;
      width: 20px;
      height: 20px;
      display: block;
    }
    span {
      margin-left: 20px;
    }
    span:nth-child(3) {
      flex: 1;
      text-align: right;
    }
  }
}
</style>
