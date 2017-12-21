<template>
    <div>
        <div class="common_top">
            <div class="common_fanhui" @click="returnIndex"><img src="../../assets/img/return.png" /></div>
            创富攻略
        </div>
        <div class="main">
            <div class="main-title">
                <div>财富</div>
                <div>攻略</div>
            </div>
            <div class="main-img"><img src="../../assets/img/chongfu/bitmap.png" /></div>
            <ul class="main-content">
                <li class="content-title">致 富 宝 典</li>
                <li class="content-icon">增员奖励</li>
                <li class="content">每推荐1人注册成为理财师并且完成认证</li>
                <li class="content">邀请人1元。</li>
                <li class="content-icon">推广与邀请奖励</li>
            </ul>

            <!-- <div class="mainvipbody">
                <div class="mainbodycard"><img src="../../assets/img/chongfu/share_bg.png" /></div>
                <div class="mainbodycard"><img src="../../assets/img/chongfu/share_bg.png" /></div>
                <div class="mainbodycard"><img src="../../assets/img/chongfu/share_bg.png" /></div>
                <div class="mainbodycard" style="height: 1.7rem;"><img style="height: 1.7rem;" src="../../assets/img/chongfu/share_bg.png" /></div>
                <div class="Cardevery">
                    <div class="CardOne simpleCss"><img src="../../assets/img/chongfu/add_reward.png" /></div>
                    <div class="CardTwo simpleCss"><img src="../../assets/img/chongfu/add_content.png" /></div>
                    <div class="CardThree simpleCss"><img src="../../assets/img/chongfu/add_rule.png" /></div>
                </div>
            </div> -->

        </div>
    </div>

</template>
<script>

// import api from '@/api/index.api'
export default {

    data: function () {
        return {

        }
    },
    created() {//budgetList


    },
    methods: {
        returnIndex() {
            this.$router.go(-1)
        }

    }
}
</script>

<style lang="less">
// .common_top {
// 	width: 100%;
// 	height: .88rem;
// 	background-color:orange;
// 	text-align: center;
// 	line-height: .88rem;
// 	color: white;
// 	font-size: 18px;
// 	position: fixed;
// 	top: 0px;
// 	z-index: 10000333;
// }

// .common_fanhui {
// 	width: .22rem;
// 	height: .41rem;
// 	float: left;
// 	line-height: .88rem;
// 	position: absolute;
// 	margin-left:.26rem;
// }

// .common_fanhui img {
// 	width: 11px;
// 	height: 19px;
// }

// .common_font {

// 	line-height: .88rem;
// 	text-align: center;
// 	font-size: 18px;
// }

// .main{
// 	background:orange;
// 	padding: 0 0.26rem;
// 	margin-top:.88rem;
// 	overflow: hidden;
// 	color: #fff;

// }
// .main .main-title{
// 	float:left;
// 	font-size:.48rem;
// 	color:#fff;

// }
// .main .main-title div{
// 	font-size:.6rem;

// }
// .content-title{
// 	font-size: .4rem;
// 	margin-bottom: 5px;
// }
// .content-icon{
// 	position: relative;
// }
// .content-icon::before{
// 	content:"";
// 	display:inline-block;
// 	// width: 0.2rem;
// 	// height:0.2rem;
// 	// background: url("../../assets/img/down.png") no-repeat center;
// 	//  background-size: cover;
// 	width: 0px;
// 	// height: 10px;
// 	border: 0.1rem solid;
// 	margin-right:0.05rem;
// 	border-color:  #fff transparent transparent transparent;
// // position: absolute;
// // top:;

// }
// .content{

// 	margin-left: .25rem;
// }

// .main .main-content{
// 	margin-top: 1.8rem;
// 	// float:left;
// 	li{
// 		line-height: .48rem;
// 		// padding-left: .25rem
// 	}
// }
// .main .main-img{
// 	float:right;
// 	width:3.25rem
// }
</style>
