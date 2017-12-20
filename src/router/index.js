import Vue from 'vue'
import Router from 'vue-router'



import HomePage from "@/views/index/HomePage"
import Products from "@/views/Products"
import UserCenter from "@/views/UserCenter"
import OrderList from "@/views/OrderList"
import myWealth from "@/views/myWealth"
import userProfile from '@/views/userProfile'
import editUserName from '@/views/editUserName'
import News from '@/views/News'
import TeamLeader from '@/views/TeamLeader'
import TeamMember from '@/views/TeamMember'
import Raider from '@/views/TeamMember'
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
    path: '/myWealth',
    name: 'myWealth',
    component: myWealth
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
}
]


var router = new Router({
    routes: routeData
})


export default router;
