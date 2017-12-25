<template>
    <div>
        <commonHeader url="-1" title="手机号"/>
        <div class="show-mobile">
            <div class="item">
                <p><i class="icon-phone"></i><span>手机号</span><span>{{mobile}}</span></p>
                <button @click="goChangePage()">修改手机号</button>
            </div>
        </div>
    </div>
</template>
<script>
    import footer from "@/components/footer.vue";
    import axios from "@/api/axios";
    import api from "@/api/index.api";
    import commonHeader from "@/components/Header.vue";

    export default {
        components: {
            commonHeader
        },
        data() {
            return {
                mobile: ""
            };
        },
        created() {
            this.getUserMobile();
        },
        methods: {
            getUserMobile() {
                axios({
                    method: "POST",
                    url: api.userDetail,
                    data: {
                        userId: 1
                    }
                })
                    .then(res => {
                        this.mobile = res.data.mobile;
                        //                        var mobile = res.data.mobile;
                        //                        console.log(res.data.userStatus);
                        //                        console.log("res.data", res.data);
                        //                this.bannerList = res.data.bannerList;
                        //                console.log(this.bannerList)
                        //                this.$set(this.items,data)
                    })
                    .catch(rtn => {
                        console.log(rtn);
                    });
            },
            goChangePage() {
                this.$router.push("changeMobile");
            }
        }
    };
</script>
<style lang="less" scoped>
    .show-mobile {
        .item {
            p {
                background-color: #fff;
                display: flex;
                align-items: center;
                font-size: 0.32rem;
                padding: 0.2rem 0.16rem;
                margin-top: 0.2rem;
                i.icon-phone {
                    background: url("../assets/img/手机@2x.png") no-repeat center;
                    background-size: cover;
                    width: 0.4rem;
                    height: 0.56rem;
                    display: block;
                }
                span:nth-child(2) {
                    color: #333;
                    font-size: 0.36rem;
                    margin-left: 0.16rem;
                }
                span:nth-child(3) {
                    flex: 1;
                    text-align: right;
                    color: #747474;
                }
            }
            button {
                outline: none;
                border: none;
                width: 5.6rem;
                height: 0.72rem;
                line-height: 0.72rem;
                color: #fff;
                font-size: 0.32rem;
                text-align: center;
                background-color: #fc8d00;
                margin: 0.2rem auto 0;
                display: block;
                border-radius: 0.1rem;
            }
        }
    }
</style>
