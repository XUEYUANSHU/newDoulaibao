<template>
    <div class="products">
      <div class="listType">
        <ul>
            <li class="activeName"> <img src="../assets/img/全部产品页-06.png" alt=""> </li>
            <li><img src="../assets/img/全部产品页-07.png" alt=""></li>
            <li><img src="../assets/img/全部产品页-08.png" alt=""></li>
            <li><img src="../assets/img/全部产品页-09.png" alt=""></li>
        </ul>
      </div>
      <div  class="chooseType">
      <span class="close-text">关闭</span>
        <div @click="chooseType" ref="slider1" id="slider1" class="open1">
                <div ref="slider2" id="slider2" class="open2"></div>
        </div>
      </div>
      <div class="productList">
        <ul>
            <li>
                <div class="list-content">
                    <div class="text-content">
                        <div class="title">房贷宝</div>
                        <div class="desc">房贷宝房贷宝房贷宝房贷宝房贷宝房贷宝房贷宝房贷宝房贷宝房贷宝</div>
                    </div>
                    <div class="number-content">
                        <div class="price">¥3400起<br></div>
                        <div class="percent">13.8%奖励</div>
                    </div>
                </div>
            </li>
        </ul>
      </div>
     <ele_footer></ele_footer>
    </div>

</template>
<script>
import axios from "axios";
import footer from "@/components/footer.vue";
// import axios from '@/api/my-axios.js'
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
  mounted() {
    axios({
      method: "POST",
      url: api.allProductIndex,
      data: {
        userId: 1,
        productType: 1
      }
    })
      .then(res => {
        console.log("请求到的产品数据", res.code);
      })
      .catch(rtn => {
        console.log(rtn);
      });
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
  methods: {
    chooseType() {
      this.$refs["slider1"].className =
        this.$refs["slider1"].className == "close1" ? "open1" : "close1";
      this.$refs["slider2"].className =
        this.$refs["slider2"].className == "close2" ? "open2" : "close2";
      console.log("选择全部或者不选");
    }
  },
  //    data: ,
  created() {
    //budgetListuserId
  }
};
</script>
 
<style lang="less" >
.activeName::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  z-index: 9;
  transform: translate(-50%, 0);
  border-left: 0.14rem solid transparent;
  border-right: 0.14rem solid transparent;
  border-top: 0.28rem solid #f25f23;
}
.listType {
  height: 1.34rem;
  background-color: #f25f23;
  font-size: 13px;
  border: 1px solid red;
  ul {
    display: flex;
    width: 100%;
    height: 100%;
    li {
      position: relative;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 0.54rem;
        height: 0.88rem;
      }
    }
  }
}
.chooseType {
  position: relative;
  width: 100%;
  height: 0.68rem;
  color: #4a4a4a;
  text-align: right;
  background-color: #f3f0f0;
  .close-text {
    position: absolute;
    right: 0.7rem;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  #slider1 {
    width: 0.52rem;
    height: 0.32rem;
    border-radius: 40%;
    transition: all 0.5s;
    position: absolute;
    right: 0.1rem;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  #slider2 {
    width: 0.26rem;
    height: 0.26rem;
    transition: all 0.5s;
    border-radius: 50%;
    position: absolute;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  }
  .open1 {
    background: rgba(0, 184, 0, 0.8);
  }
  .open2 {
    top: 2px;
    right: 1px;
  }
  .close1 {
    background: rgba(144, 144, 144, 0.4);
    // border:3px solid rgba(0,0,0,0.15);
    border-left: transparent;
  }
  .close2 {
    left: 0px;
    top: 0px;
    border: 2px solid rgba(0, 0, 0, 0.1);
  }
}
.productList {
  li {
    box-sizing: border-box;
    height: 1.82rem;
    padding: 0.35rem;
    border: 1px solid yellow;
    .list-content {
      display: flex;
      width: 100%;
      height: 100%;
      .text-content {
        flex: 1;
        height: 100%;
        border: 1px solid blue;
        .title {
          padding-bottom: 0.25rem;
          font-size: 0.32rem;
          font-weight: 600;
        }
        .desc {
          font-size: 0.24rem;
          line-height: 0.35rem;
        }
      }
      .number-content {
        width: 2rem;
        padding-top: 0.25rem;
        font-size: 0.32rem;
        font-weight: 600;
        text-align: right;
        color: #f25f23;
        border: 1px solid red;
      }
    }
  }
}
.products {
  .footer {
    ul {
      li {
        color: #3d3d3d;
        &:nth-child(2) {
          color: #e73e45;
        }
      }
    }
  }
}
</style>
 
