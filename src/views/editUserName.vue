<template>
    <div>
        <div class="item">
            <input type="text" placeholder="请输入您的姓名" class="username">
            <span class="save" @click="">保存</span>
        </div>
    </div>
</template>
<script>
    export default {
        methods:{

        }
    }
</script>
<style lang="less" scoped="">
    .item{
        margin-top: .2rem;
        input{
            border:none;
            outline:none;
            height: .8rem;
            line-height: .8rem;
            font-size:.3rem;
            text-indent: .2rem;
            width:100%;
        }
        span{
            width:5.4rem;
            height:.72rem;
            line-height: .72rem;
            font-size: .3rem;
            text-align: center;
            color: #fff;
            background-color: #fc8d00;
            border-radius: .08rem;
            margin: .2rem auto;
            display: block;
        }
    }
</style>
