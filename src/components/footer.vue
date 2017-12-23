<template>
        <div class="footer">
            <ul>
                <li @click="goUrl(1)"   :class="{activeName: activeName  == 1}">
                    <i class="iconfont">&#xe621;</i>
                    <span>首页</span>
                </li>
                <li @click="goUrl(2)" :class="{activeName: activeName  == 2}">
                      <i class="iconfont">&#xe600;</i>
                    <span>产品</span>
                </li>
                <li @click="goUrl(3)" :class="{activeName: activeName  == 3}">
                       <i class="iconfont">&#xe63a;</i>
                    <span>我的</span>
                </li>
            </ul>
        </div>
</template>
<script>
export default {
  props: {
    activeName: {
      type: Number,
      default() {
        return 1;
      }
    }
  },
  methods: {
    goUrl(index) {
      switch (index) {
        case 1:
        case "1":
          this.$router.push("/");
          break;
        case 2:
        case "2":
          this.$router.push("Products");
          break;
        case 3:
        case "3":
          this.$router.push("UserCenter");
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang="less">
.activeName {
}
.footer {
  position: fixed;
  bottom: 0;
  z-index: 9999;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #e2e2e2;
  padding: 0.1rem 0;
  ul {
    display: flex;
    align-items: center;
    i {
      /*font-size: 40px;*/
    }
    li {
      flex: 1;
      text-align: center;
      color: #3d3d3d;
      span {
        display: block;
        font-size: .28rem;
      }
    }
     .activeName{
          color: #e73e45;
      }
  }
}
</style>
