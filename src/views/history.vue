<template>
    <div class="container">
        <div class="tab-item" >
            <ul>
                <li v-for="(item,index) in itemTabs"  :class="active == ''+index+''? 'active': ''" @click="go(''+index+'')" :key="index">{{item}}</li>
            </ul>
        </div>
        <div class="tab-item-box" v-for="(item,index) in itemBoxs" :key="index">
            <ul>
                <li>
                    <div class="item-left">
                        <img src="../assets/img/收入@2x.png" alt="">
                    </div>
                    <div class="item-right">
                        <p class="item-bankcard"><span>提现到卡（建设银行****435）</span><span class="over">已完成</span></p>
                        <p class="item-desc"><span class="total">+12.23元</span><span class="time">2017-10-23 13:00</span></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
    data(){
            return {
                active:0,
                itemTabs:['全部','已完成','待生效'],
                itemBoxs:['2','3','4'],
                num:0
            }

    },
    created(){
//            alert(this.active)
     },
     methods:{
         go(index){
            this.active = index;
            console.log(index)
         }

    }
    }
</script>
<style lang="less" scoped="scoped">
    .container{
        background-color: #fff;
    }
    .tab-item{
        ul{
            display: flex;
            align-items: center;
            padding: .2rem 0;
            border-bottom: 1px solid #f9f9f9;
            li{
                flex:1;
                text-align: center;
                /*background-color: red;*/
                font-size: .28rem;
                line-height: .4rem;
                color: rgba(153,153,153,0.60);
                letter-spacing: 0.21px;
            }
            .active{
                color: #FC8D00;
            }
        }
    }
    .tab-item-box{
        ul{
            li{
                background-color: #fff;
                border-bottom:1px solid #f9f9f9;
                display: flex;
                align-items: center;
                padding: .24rem;
                .item-left{
                    width:.92rem;
                    height:.92rem;
                    font-size: 0;
                }
                .item-right{
                    flex:1;
                    margin-left: .15rem;
                    p{
                        span{
                            font-size: .28rem;
                            line-height: .4rem;
                            color: #000;
                        }
                        span.over{
                            font-size: .26rem;
                            float: right;
                            color: #fc8d00;
                        }
                    }
                    p.item-desc{
                        span{
                            font-size: .24rem;
                        }
                        span.total{
                            color: #ff0000;
                        }
                        span.time{
                            color: #aaa;
                            float: right;
                        }
                    }
                }
            }
        }
    }
</style>
