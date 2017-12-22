import Vue from 'vue'
import Router from 'vue-router'



import HomePage from "@/views/index/HomePage"
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
import Raider from '@/views/Raider'

import CashWechatSuccess from '@views/cashWechatSuccess'  //提现页面
import Certification from '@views/Certification'  //提现页面
// import AllProduct from "@/views/index/AllProduct"
// import ImTeam from "@/views/index/ImTeam"
// //JoinTeam
// import JoinTeam from "@/views/index/JoinTeam"
// import Share from "@/views/index/Share"
import Deposit from '@views/Deposit'  //提现页面




Vue.use(Router)

var routeData = [{
	path: '/',
	name: 'Home',
	component: HomePage
},
// {
//     path: '/imTeam',
//     name: 'ImTeam',
//     component: ImTeam
// },
//
// {
//     path: '/joinTeam',
//     name: 'JoinTeam',
//     component: JoinTeam
// },
//

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
	path: '/Deposit',
	name: 'Deposit',
	component: Deposit
}
]


var router = new Router({
	routes: routeData
})


export default router;
