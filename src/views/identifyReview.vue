<template>
    <div>
        <div class="item">
            <div class="review">
                <p>实名认证审核中～</p>
                <p>请耐心等待哦</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="less" scoped>
    .item{
        position: fixed;
        width:100%;
        height:100%;
        background-color: #fff;
        .review{
            width:4rem;
            height:.8rem;
            position: absolute;
            top:50%;
            left:50%;
            margin-left: -2rem;
            margin-top: -1.6rem;
            color: #fc8d00;
            p{
                font-size: .48rem;
                line-height: .66rem;
                text-align: center;
            }
        }
    }
</style>
