<template>
    <div class="wrap">
        <div class="header">
            <p>累计收入（元）<i class="icon-eye" @click="pushRoute('history')"></i></p>
            <p>0.00</p>
            <p><span class="cash" @click="pushRoute('tixian')">提现</span></p>
        </div>
        <div class="item">
            <div class="item-presented">
                <p>0.00</p>
                <p @click="pushRoute('tixian')">可提现</p>
            </div>
            <div class="item-effective">
                <p>0.00</p>
                <p>待生效</p>
            </div>
        </div>
        <div class="item-list">
        <ul>
            <li>
                <i class="icon-star-empty"></i>
                <span>当月累计收入</span>
                <span>0.00</span>
            </li>
            <li>
                <i class="icon-star-empty"></i>
                <span>当月可提现(税前)</span>
                <span>0.00</span>
            </li>
            <li>
                <i class="icon-star-empty"></i>
                <span>当月缴税</span>
                <span>0.00</span>
            </li>
            <li>
                <i class="icon-star-empty"></i>
                <span>当月待生效</span>
                <span>0.00</span>
            </li>
        </ul>
    </div>
        <div class="item-detail-bar">
            <p class="item-history-detail" @click="pushRoute('history')">历史收支明细</p>
        </div>
    </div>
</template>
<script>
    export  default {
        methods: {
            pushRoute(param) {
                this.$router.push("" + param + "");
            }
        }
    }
</script>
<style lang="less" scoped="scoped">
    .wrap{
        /*background: #fff;*/
    }
    .header{
        height:3.1rem;
        width:100%;
        background: #009944;
        p{
            text-align: center;
            color: #fff;
            i.icon-eye{
                background: url("../assets/img/icon-eye.png");
                background-size: cover;
                width:.6rem;
                height:.4rem;
                display: inline-block;
            }
            span{
                width:1.56rem;
                height:.64rem;
                line-height: .64rem;
                text-align: center;
                display: inline-block;
                border-radius: .4rem;
                border:1px solid #fff;
            }
        }
        p:nth-child(1){
            padding-top: .4rem;
            font-size: .4rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        p:nth-child(2){
            font-size: .8rem;
            line-height: 1.2rem;
        }
    }
    .item{
        display: flex;
        padding: .2rem 0;
        border-bottom: .2rem solid #f2f2f2;
        background-color: #fff;
        div{
            flex:1;
            text-align: center;
            p{
                font-size: .3rem;
                line-height: .44rem;
                color: #f97908;
                margin: 0!important;
            }
        }
        .item-presented{
            border-right:1px solid #f97908;
        }
        .item-effective{

        }
    }
    .item-list{
        background-color: #fff;
        ul{
            li{
                display: flex;
                align-items: center;
                padding: .2rem;
                border-bottom: 1px solid #f2f2f2;
                span{
                    font-size: .3rem;
                    color: #000;
                }
                span:nth-child(2){
                    flex:1;
                    margin-left: .25rem;
                }
                i.icon-star-empty{
                    background: url("../assets/img/icon-star-empty.png") no-repeat center;
                    background-size: cover;
                    width:.34rem;
                    height:.3rem;
                    display: inline-block;
                }
            }
        }
    }
    .item-detail-bar{
        .item-history-detail{
            font-size: .28rem;
            color: #f97908;
            text-align: center;
            margin-top: .45rem;
        }
    }
</style>
