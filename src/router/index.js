import Vue from 'vue'
import Router from 'vue-router'



import HomePage from "@/views/index/HomePage"
import Raider from '@/views/Raider' // 创富攻略
import Products from "@/views/Products"
import UserCenter from "@/views/UserCenter"
import OrderList from "@/views/OrderList"
import myWealth from "@/views/myWealth"
import userProfile from '@/views/userProfile'
import editUserName from '@/views/editUserName'
import history from '@/views/history'

import News from '@/views/News'
import TeamLeader from '@/views/TeamLeader'
import TeamMember from '@/views/TeamMember'

import bindMobile from '@/views/bindMobile' //手机绑定
import changeMobile from '@/views/changeMobile' //修改手机绑定
import showMobile from '@/views/showMobile' //修改手机绑定
import Raider from '@/views/Raider'
import addBankCard from '@/views/addBankCard'
import tixian from '@/views/tixian'
import tixianWechatSucc from '@/views/tixianWechatSucc' //提现到微信成功提示
import intoAccount from '@/views/intoAccount' //到账微信成功提示
import AccountIntoBank from '@/views/AccountIntoBank' //到账银行成功提示
import identifyReview from '@/views/identifyReview' //认证审核中
import identifySucc from '@/views/identifySucc' //认证审核完成
import tixianGoIdentify from '@/views/tixianGoIdentify' //提现转实名认证

// import cashWechatSuccess from '@views/cashWechatSuccess.vue'  //提现d到微信提示 // 实名认证
import Certification from '@/views/Certification' // 实名认证

import bindBank from '@/views/bindBank' // 绑定银行卡
// import cashWechatSuccess from '@views/cashWechatSuccess'  //提现页面
// import AllProduct from "@/views/index/AllProduct"
// import ImTeam from "@/views/index/ImTeam"
// //JoinTeam
// import JoinTeam from "@/views/index/JoinTeam"
// import Share from "@/views/index/Share"




Vue.use(Router)

var routeData = [{
	path: '/',
	name: 'Home',
	component: HomePage
},
{
	path: '/Raider',
	name: 'Raider',
	component: Raider
},
{
	path: '/',
	redirect: '/Home'
},
{
	path: '/Products',
	name: 'Products',
	component: Products
},
{
	path: '/UserCenter',
	name: 'UserCenter',
	component: UserCenter
},
{
	path: '/OrderList',
	name: 'OrderList',
	component: OrderList
},
{
	path: '/myWealth',
	name: 'myWealth',
	component: myWealth
},

{
	path: '/history',
	name: 'history',
	component: history
},


{
	path: '/News',
	name: 'News',
	component: News
},
{
	path: '/TeamLeader',
	name: 'TeamLeader',
	component: TeamLeader
},
{
	path: '/TeamMember',
	name: 'TeamMember',
	component: TeamMember
},
{
	path: '/userProfile',
	name: 'userProfile',
	component: userProfile
},
{
	path: '/editUserName',
	name: 'editUserName',
	component: editUserName
},

{
	path: '/OrderList',
	name: 'OrderList',
	component: OrderList
},
{
	path: '/bindMobile',
	name: 'bindMobile',
	component: bindMobile
},
{
	path: '/Certification',
	name: 'Certification',
	component: Certification
},
{
	path: '/bindBank',
	name: 'bindBank',
	component: bindBank
},
    {
        path: '/Certification',
        name: 'Certification',
        component: Certification
    },
    {
        path: '/tixian',
        name: 'tixian',
        component: tixian
    },
    {
        path: '/addBankCard',
        name: 'addBankCard',
        component: addBankCard
    },
    {
        path: '/tixianWechatSucc',
        name: 'tixianWechatSucc',
        component: tixianWechatSucc
    },
    {
        path: '/intoAccount',
        name: 'tintoAccount',
        component: intoAccount
    },
    {
        path: '/AccountIntoBank',
        name: 'AccountIntoBank',
        component: AccountIntoBank
    },
    {
        path: '/changeMobile',
        name: 'changeMobile',
        component:changeMobile
    },
    {
        path: '/showMobile',
        name: 'showMobile',
        component:showMobile
    },
    {
        path: '/identifyReview',
        name: 'identifyReview',
        component:identifyReview
    },
    {
        path: '/identifySucc',
        name: 'identifySucc',
        component:identifySucc
    },
    {
        path: '/tixianGoIdentify',
        name: 'tixianGoIdentify',
        component:tixianGoIdentify
    }
]


var router = new Router({
	routes: routeData
})


export default router;
