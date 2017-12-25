<template>
    <div class="wrap">
        <commonHeader url="-1" title="我的财富"/>
        <div class="header">
            <p>累计收入（元）<i class="icon-eye" @click="pushRoute('history')"></i></p>
            <p>{{wealth.totalEarning}}</p>
            <p><span class="cash" @click="pushRoute('tixian')">提现</span></p>
        </div>
        <div class="item">
            <div class="item-presented">
                <p>{{wealth.waitWithdrawal}}</p>
                <p @click="pushRoute('tixian')">可提现</p>
            </div>
            <div class="item-effective">
                <p>{{wealth.totalWaitRecorded}}</p>
                <p>待生效</p>
            </div>
        </div>
        <div class="item-list">
            <ul>
                <li>
                    <i class="icon-star-empty"></i>
                    <span>当月累计收入</span>
                    <span>{{wealth.curMonthTotalEarning}}</span>
                </li>
                <li>
                    <i class="icon-star-empty"></i>
                    <span>当月可提现(税前)</span>
                    <span>{{wealth.curMonthTotalEarning}}</span>
                </li>
                <li>
                    <i class="icon-star-empty"></i>
                    <span>当月缴税</span>
                    <span>{{wealth.curMonthTax}}</span>
                </li>
                <li>
                    <i class="icon-star-empty"></i>
                    <span>当月待生效</span>
                    <span>{{wealth.curMonthTotalWaitRecorded}}</span>
                </li>
            </ul>
        </div>
        <div class="item-detail-bar">
            <p class="item-history-detail" @click="pushRoute('history')">历史收支明细</p>
        </div>
    </div>
</template>
<script>
    import commonHeader from "@/components/Header.vue";
    import axios from "@/api/axios";
    import api from "@/api/index.api";

    export default {
        components: {
            commonHeader
        },
        data() {
            return {
                wealth: []
            };
        },
        created() {
            this.getMyWealth();
        },
        methods: {
            pushRoute(param) {
                this.$router.push("" + param + "");
            },
            getMyWealth() {
                axios({
                    method: "POST",
                    url: api.treasure,
                    data: {
                        userId: 1
                    }
                })
                    .then(res => {
                        this.wealth = res.data;
                        console.log(res.code);
                        console.log("res.data", res.data);
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
<style lang="less" scoped="scoped">
    .wrap {
        /*background: #fff;*/
    }

    .header {
        height: 3.1rem;
        width: 100%;
        background: #fc8d00;
        p {
            text-align: center;
            color: #fff;
            i.icon-eye {
                background: url("../assets/img/icon-eye.png");
                background-size: cover;
                width: 0.6rem;
                height: 0.4rem;
                display: inline-block;
            }
            span {
                width: 1.56rem;
                height: 0.64rem;
                line-height: 0.64rem;
                text-align: center;
                display: inline-block;
                border-radius: 0.4rem;
                border: 1px solid #fff;
            }
        }
        p:nth-child(1) {
            padding-top: 0.4rem;
            font-size: 0.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        p:nth-child(2) {
            font-size: 0.8rem;
            line-height: 1.2rem;
        }
    }

    .item {
        display: flex;
        padding: 0.2rem 0;
        border-bottom: 0.2rem solid #f2f2f2;
        background-color: #fff;
        div {
            flex: 1;
            text-align: center;
            p {
                font-size: 0.3rem;
                line-height: 0.44rem;
                color: #f97908;
                margin: 0 !important;
            }
        }
        .item-presented {
            border-right: 1px solid #f97908;
        }
        .item-effective {
        }
    }

    .item-list {
        background-color: #fff;
        ul {
            li {
                display: flex;
                align-items: center;
                padding: 0.2rem;
                border-bottom: 1px solid #f2f2f2;
                span {
                    font-size: 0.3rem;
                    color: #000;
                }
                span:nth-child(2) {
                    flex: 1;
                    margin-left: 0.25rem;
                }
                i.icon-star-empty {
                    background: url("../assets/img/icon-star-empty.png") no-repeat center;
                    background-size: cover;
                    width: 0.34rem;
                    height: 0.3rem;
                    display: inline-block;
                }
            }
        }
    }

    .item-detail-bar {
        .item-history-detail {
            font-size: 0.28rem;
            color: #f97908;
            text-align: center;
            margin-top: 0.45rem;
        }
    }
</style>
