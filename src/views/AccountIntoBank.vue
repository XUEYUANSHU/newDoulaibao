<template>
    <div>
        <div class="dialog" @click="pushRoute('tixianWechatSucc')">
            <div class="prompt" @click="pushRoute('tixianWechatSucc')">
                <div class="item">
                    <h3>提现申请已提交</h3>
                    <p>3个工作日内到账，可到微信钱包查看</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            pushRoute(param) {
                this.$router.push("" + param + "");
            }
        }
    }
</script>
<style lang="less" scoped>
    .dialog{
        position: fixed;
        width:100%;
        height:100%;
        bottom:0;
        background-color: rgba(0,0,0,.4);
        z-index:99;
        .prompt{
            width:5.4rem;
            height:3.36rem;
            position: absolute;
            top:50%;
            left:50%;
            margin-left: -2.7rem;
            margin-top: -2.4rem;
            background-color: #fff;
            z-index: 100;
            box-shadow: -1px 2px 10px 3px rgba(0,0,0,0.50);
            h3{
                height:1rem;
                line-height: 1rem;
                background-color: #fc8d00;
                color: #fff;
                font-size: .4rem;
                text-align: left;
                text-indent: .3rem;
            }
            p{
                padding: .35rem .3rem;
                color: #000;
                font-size: .4rem;
                line-height: .6rem;
            }
        }
    }
</style>
