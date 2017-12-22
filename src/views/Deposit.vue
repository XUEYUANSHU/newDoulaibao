<template>
    <div>
        <span @click=" pushRoute('cashWechatSuccess')">提现</span>
        <p>体现页面赞坐跳转使用</p>
    </div>
</template>
<script>
import axios from '@/api/axios'
import api from '@/api/index.api'
    export default {
        data(){
            return {

            }
        },
        methods:{
            pushRoute(param) {
                console.log(param)
                this.$router.push("" + param + "");
            }
        }
    }
</script>
<style lang="less" scoped>

</style>
