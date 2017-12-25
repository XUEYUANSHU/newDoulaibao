<template>
    <div>
        <commonHeader url="-1" title="创富攻略"/>
        <div ref="articleContent" id="articleContent" v-html="this.data.articleContent"></div>
    </div>

</template>
<script>
    import footer from "@/components/footer.vue";
    import commonHeader from "@/components/Header.vue";
    import axios from "@/api/axios";
    import api from "@/api/index.api";
    import router from "@/router/index";

    export default {
        prop: {
            //        option:Object
        },
        components: {
            ele_footer: footer,
            commonHeader
        },
        data() {
            return {
                data: {}
            };
        },

        mounted() {
            axios({
                method: "POST",
                url: api.wealth,
                data: {
                    userId: 1
                }
            })
                .then(res => {
                    this.data = Object.assign([], res.data);
                    console.log(
                        this.$refs["articleContent"],
                        "请求到的创富数据",
                        res.data,
                        this.data.articleContent
                    );
                })
                .catch(rtn => {
                    console.log(rtn);
                });
        },
        methods: {}
    };
</script>
<style lang="less" scoped>

</style>
