<template>
    <div>
        <commonHeader url="-1" title="前去实名认证"/>
        <div class="item-identify">
            <p>请您先完成实名认证后，再进行提现哦！</p>
            <button @click="go">前去实名认证</button>
        </div>
    </div>
</template>
<script>

    import commonHeader from "@/components/Header.vue";

    export default {
        components: {
            commonHeader
        },
        methods: {
            go() {
                this.$router.push("userProfile");
            }
        }
    };
</script>
<style lang="less">
    .item-identify {
        p {
            font-size: 0.35rem;
            line-height: 0.5rem;
            margin-top: 1.2rem;
            padding: 0 1.2rem;
            text-align: center;
            color: #333;
        }
        button {
            width: 5.6rem;
            height: 0.72rem;
            line-height: 0.72rem;
            text-align: center;
            background-color: #fc8d00;
            font-size: 0.32rem;
            color: #fff;
            outline: none;
            border: none;
            margin: 1.4rem auto 0;
            display: block;
            border-radius: 0.1rem;
        }
    }
</style>
