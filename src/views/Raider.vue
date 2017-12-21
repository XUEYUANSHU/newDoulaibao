<template>
    <div>
         <img src="../assets/img/chaungfu.png" alt="" width="100%">
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
      data: {},
   
    };
  },
 
  mounted() {
    axios({
      method: "POST",
      url: api.wealth ,
      data: {
        userId: 1,
      }
    })
      .then(res => {
        console.log(this.list, "请求到的创富数据", res.data);
        this.data = Object.assign([], res.data);
        console.log(this.data, "请求到的创富数据", res.data);
      })
      .catch(rtn => {
        console.log(rtn);
      });
  },
  methods: {
 
    
  }
};
</script>
<style lang="less" scoped>
 
</style>
