<template>
    <div>
        <commonHeader url='-1' title="首页"></commonHeader>
        <swiper :options="swiperOption">
            <swiper-slide><img src="../../assets/img/banner1.png" class="swi-img"></swiper-slide>
            <swiper-slide><img src="../../assets/img/banner3.png" class="swi-img"></swiper-slide>
            <swiper-slide><img src="../../assets/img/banner4.png" class="swi-img"></swiper-slide>
            <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
        </swiper>
        <div class="nav">
            <ul>
                <li>
                    <img src="../../assets/img/chuangfugonglue.png" alt="" @click="gotoRaider">
                    <span>创富攻略 </span>
                </li>
                <li>
                    <img src="../../assets/img/woshituanzhang.png" alt="" @click="gotoHeader">
                    <span>我是团长 </span>
                </li>
                <li>
                    <img src="../../assets/img/woshituanyuan.png" alt="" @click="gotoMember">
                    <span>我是团员 </span>
                </li>
                <li @click="gotomyWealth">
                    <img src="../../assets/img/wodecaifu.png" alt="">
                    <span>我的财富  </span>
                </li>
            </ul>
        </div>
        <div class="huoke">
            <p>
                <i class="icon-huoke"></i>
                <span>获客产品</span>
                <span class="more" @click="gotoProducts">更多</span>
            </p>
            <div class="product">
                <div class="huoke-item-left">
                    <img src="../../assets/img/huoke1.png" alt="">
                </div>
                <div class="item-right">
                    <img src="../../assets/img/huoke2.png" alt="">
                    <img src="../../assets/img/huoke3.png" alt="">
                </div>
            </div>
        </div>
        <div class="huoke">
            <p>
                <i class="icon-hotProduct"></i>
                <span>全部产品</span>
                <span class="more" @click="gotoProducts">全部</span>
            </p>
        </div>
        <div class="chooseType">
            <span class="close-text">关闭</span>
            <div @click="chooseType" ref="slider1" id="slider1" class="close1">
                <div ref="slider2" id="slider2" class="close2"></div>
            </div>
        </div>
        <div class="listWrap">
            <ul>
                <li class="productList" v-for="(item, idx) in data.hotList" :key="idx">
                    <div class="title">{{item.productName}}</div>
                    <div class="content">
                        <div class="desc">{{item.productIntro}}</div>
                        <div class="params">
                            <div class="price">{{'¥' + item.productMinPrice + '元'}}1132元</div>
                            <div v-if="showPercenter" class="percent">
                                {{item.commissionRate + '%+' + item.extraCommissionRate + '%额外奖励'}}
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
        <ele_footer></ele_footer>
    </div>

</template>
<script>
    import footer from "@/components/footer.vue";
    import commonHeader from "@/components/Header.vue";
    import axios from "@/api/axios";
    import api from "@/api/index.api";
    import router from "@/router/index";
    import "swiper/dist/css/swiper.css";
    import {swiper, swiperSlide} from "vue-awesome-swiper";

    export default {
        prop: {
            //        option:Object
        },
        components: {
            swiper,
            swiperSlide,
            ele_footer: footer,
            commonHeader
        },
        data() {
            return {
                data: {},
                showPercenter: true,
                bannerList: [],
                swiperOption: {
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    }
                }
            };
        },
        //    data: ,
        created() {
            //budgetListuserId

            //        var self = this
            this.getData();
            //
        },
        mounted() {
            axios({
                method: "POST",
                url: api.homeIndex,
                data: {
                    userId: 1,
                    productType: ""
                }
            })
                .then(res => {
                    console.log(this.list, "请求到的首页数据", res.data);
                    this.data = Object.assign([], res.data);
                    console.log(this.data, "请求到的首页数据", res.data);
                })
                .catch(rtn => {
                    console.log(rtn);
                });
        },
        methods: {
            chooseType() {
                this.showPercenter = !this.showPercenter;
                this.$refs["slider1"].className =
                    this.$refs["slider1"].className == "close1" ? "open1" : "close1";
                this.$refs["slider2"].className =
                    this.$refs["slider2"].className == "close2" ? "open2" : "close2";
                console.log(
                    this.$refs["slider1"].className,
                    "类名 this.showPercenter",
                    this.showPercenter
                );
            },
            gotoProducts() {
                this.$router.push({path: "/Products"});
            },
            gotoRaider() {
                this.$router.push({path: "/Raider"});
            },
            gotoHeader() {
                this.$router.push({path: "/TeamLeader"});
            },
            //        跳转到产品页面
            goAllProduct() {
                this.$router.push({path: "/Products"});
            },
            gotoMember() {
                this.$router.push({path: "/TeamMember"});
            },
            gotomyWealth() {
                this.$router.push({path: "/myWealth"});
            },
            getData() {
                axios({
                    method: "POST",
                    url: api.wealth,
                    data: {
                        userId: 1
                    }
                })
                    .then(res => {
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
<style lang="less" scoped>
    .chooseType {
        position: relative;
        width: 100%;
        height: 0.68rem;
        color: #4a4a4a;
        text-align: right;
        background-color: #f3f0f0;
        .close-text {
            position: absolute;
            right: 0.7rem;
            top: 50%;
            transform: translate(0, -50%);
            color: #7b7a7a;
        }
        #slider1 {
            width: 0.52rem;
            height: 0.32rem;
            border-radius: 40%;
            transition: all 0.5s;
            position: absolute;
            right: 0.1rem;
            top: 50%;
            transform: translate(0, -50%);
        }
        #slider2 {
            width: 0.26rem;
            height: 0.26rem;
            transition: all 0.5s;
            border-radius: 50%;
            position: absolute;
            background: white;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
        }
        .open1 {
            background: rgba(0, 184, 0, 0.8);
        }
        .open2 {
            top: 2px;
            right: 1px;
        }
        .close1 {
            background: rgba(144, 144, 144, 0.4);
            // border:3px solid rgba(0,0,0,0.15);
            border-left: transparent;
        }
        .close2 {
            left: 0px;
            top: 0px;
            border: 2px solid rgba(0, 0, 0, 0.1);
        }
    }

    .nav {
        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.2rem 0;
            border-bottom: 0.2rem solid #f3f0f0;
            li {
                flex: 1;
                text-align: center;
                font-size: 0;
                span {
                    display: block;
                    margin-top: 0.1rem;
                    font-size: .28rem;
                    color: #3d3d3d;
                }
            }
        }
    }

    .huoke {
        p {
            display: flex;
            align-items: center;
            font-size: 0.26rem;
            color: #3d3d3d;
            height: 0.8rem;
            padding: 0 0.3rem;
            i.icon-hotProduct {
                background: url("../../assets/img/hot.png") no-repeat center;
                background-size: cover;
                width: 0.4rem;
                height: 0.4rem;
                display: block;
            }
            i.icon-huoke {
                background: url("../../assets/img/huoke-icon.png") no-repeat center;
                background-size: cover;
                width: 0.4rem;
                height: 0.4rem;
                display: block;
            }
            span {
                margin-left: 0.4rem;
            }
            span:nth-child(3) {
                flex: 1;
                text-align: right;
            }
        }
        .product {
            display: flex;
            padding: 0.1rem 0.16rem 0.1rem 0.3rem;
            background-color: #f3f0f0;
            .huoke-item-left {
                width: 3.44rem;
                height: 3.92rem;
                margin-right: 0.1rem;
            }
            .item-right {
                flex: 1;
                img:nth-child(1) {
                    width: 3.42rem;
                    height: 2.16rem;
                }
                img:nth-child(2) {
                    width: 3.42rem;
                    height: 1.6rem;
                }
            }
        }
    }

    .listWrap {
        margin-bottom: 1rem;
        .productList {
            height: 1.86rem;
            padding: 0.1rem;
            border-bottom: 0.01rem solid #f3f0f0;
            .title {
                font-weight: 600;
                color: #3d3d3d;
                padding-bottom: 0.24rem;
                font-size: 0.3rem;
            }
            .content {
                display: flex;
                .desc {
                    flex: 1;
                    line-height: 0.4rem;
                    font-size: 0.26rem;
                    color: #7c7c7c;
                }
                .params {
                    width: 2.72rem;
                    font-size: 0.3rem;
                    color: #fc8d00;
                }
            }
        }
    }
</style>
