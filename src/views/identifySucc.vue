<template>
    <div>
          <Header url="-1" title="实名认证成功" />
        <div class="item">
            <div class="item-contain">
                <img src="../assets/img/成功提示@2x.png" alt="">
                <h6>恭喜您！您已通过实名认证了！</h6>
                <button @click="pushRoute('userProfile')">完成</button>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "@/components/Header.vue";
    export  default {
          components: {
    Header
  },
        methods: {
            pushRoute(param) {
                this.$router.push("" + param + "");
            }
        }
    }
</script>
<style lang="less" scoped>
    .item{
        .item-contain{
            font-size: 0;
            text-align: center;
            img{
                width:1.28rem;
                height:1.28rem;
                margin: 2rem auto .4rem;
            }
            h6{
                font-size: .48rem;
                text-align: center;
                color: #fc8d00;
                padding: 0 1.5rem;
                line-height: .66rem;
            }
            button{
                font-size: .32rem;
                text-align: center;
                background-color: #fc8d00;
                display: block;
                outline:none;
                border:none;
                width:6rem;
                height:.8rem;
                margin: 1.6rem auto 0;
                line-height: .8rem;
                color: #fff;
                border-radius: .1rem;
                margin-top: 1rem;
            }
            p{
                font-size: .26rem;
                color: #9b9b9b;
                line-height: .4rem;
                text-align: justify;
                margin-top: .2rem;
                padding: 0 .75rem;
            }
        }
    }
</style>
