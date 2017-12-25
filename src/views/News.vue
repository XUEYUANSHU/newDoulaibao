<template>
    <div>
        <commonHeader url="-1" title="消息中心"/>
        <div class="title">
            <span :class="activeNotice== '0'? 'activeNotice': ''" @click="selected(0)">系统通知</span>
            <span :class="activeNotice== '1'? 'activeNotice': ''" @click="selected(1)">活动通知</span>
        </div>
        <div>
            <ul class="noticeList">
                <li v-for="(item, idx) in list" :key="idx" @click="showDeleted(idx)">
                    <div class="orderContent">
                        <div class="noticeInfo"><span class="orderStatus">{{item.noticeTitle}}</span><span
                            class="orderTime">{{item.updateTime | timeSplit}}</span></div>
                        <div class="noticeDesc">{{item.noticeInfo}}</div>
                    </div>
                    <div class="delete" v-show="false" @click="delected(idx)">删除</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    // import axios from '@/api/my-axios.js'
    import api from "@/api/index.api";
    import moment from "moment";
    import commonHeader from "@/components/Header.vue";

    export default {
        components: {
            commonHeader
        },
        data() {
            return {
                activeNotice: "0",
                showDelete: null,
                list: []
            };
        },
        mounted() {
            axios({
                method: "POST",
                url: api.list,
                data: {
                    userId: 1,
                    type: 0
                }
            })
                .then(res => {
                    this.list = Object.assign([], res.data);
                    console.log(this.list[0], "新闻通知列表", res.data);
                })
                .catch(rtn => {
                    console.log(rtn);
                });
        },
        filters: {
            timeSplit(v) {
                return moment(v).format("YYYY-MM-DD HH:mm");
            }
        },
        methods: {
            showDeleted(idx) {
                this.showDelete = idx;
                console.log("显示第几个", idx);
            },
            delected(idx) {
                console.log("删除了第几个", idx);
            },
            selected(type) {
                this.activeNotice = type;
                this.showDelete = null;
                axios({
                    method: "POST",
                    url: api.list,
                    data: {
                        userId: 1,
                        type: type
                    }
                })
                    .then(res => {
                        this.list = Object.assign([], res.data);
                        console.log(this.list[0], "新闻通知列表", res.data);
                    })
                    .catch(rtn => {
                        console.log(rtn);
                    });
            }
        },

        created() {
            //budgetListuserId
        }
    };
</script>

<style lang="less" scoped>
    .activeNotice {
        color: #fc8d00;
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 0.8rem;

        color: #999999;
        span {
            flex: 1;
            text-align: center;
        }
    }

    .noticeList {
        box-sizing: border-box;
        height: 2.4rem;
        li {
            display: flex;
            height: 100%;
            .orderContent {
                flex: 1;
                padding: 0.24rem 0.28rem;
                .noticeInfo {
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 0.16rem;
                    color: #666666;
                    .orderStatus {
                        color: #333333;
                    }
                    .orderTime {
                        color: #999999;
                    }
                }
                .noticeDesc {
                    font-size: 0.24rem;
                    color: #666666;
                }
            }
            .delete {
                width: 1.42rem;
                height: 2.4rem;
                line-height: 2.4rem;
                text-align: center;
                color: #fff;
                background-color: #ff0000;
            }
        }
    }
</style>

