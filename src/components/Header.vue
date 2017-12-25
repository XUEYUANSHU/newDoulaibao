<template>
        <div >
            <div class="hearder">
              <i @click="goUrl"  class="iconfont return">&#xe63c;</i>
              <div class="title">{{title}}</div>
              <span></span>
            </div>
        </div>
</template>
<script>
export default {
  props: {
    url: {
      default() {
        return -1;
      }
    },
    title: {
      type: String,
      default() {
        return '首页';
      }
    }
  },
  methods: {
    goUrl(index) {
      if(this.url == -1){
         this.$router.go(this.url);
      } else{
          this.$router.push(this.url);
      }
        
      }
    },
}
</script>
<style lang="less">
.hearder {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.86rem;
  color: #ffffff;
  background-image: -webkit-linear-gradient(left,#F7931E 0%,#F15A24); 
  // background-color: #F47221;
  padding: 0 0.24rem;
  text-align: center;
  .return {
    padding: 0.1rem;
    font-size: 0.4rem;
  }
  .title {
    flex: 1;
    margin-left: -1rem;
    font-size: 0.28rem;
    text-align: center;
  }
}
</style>
