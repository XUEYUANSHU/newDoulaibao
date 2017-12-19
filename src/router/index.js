import Vue from 'vue'
import iHttp from '@/api/my-axios.js'
import Router from 'vue-router'



import HomePage from "@/views/index/HomePage"
import Products from "@/views/Products"
import UserCenter from "@/views/UserCenter"
import OrderList from "@/views/OrderList"
import myWealth from "@/views/myWealth"
import  userProfile from  '@/views/userProfile'
import  editUserName from  '@/views/editUserName'
// import AllProduct from "@/views/index/AllProduct"
// import ImTeam from "@/views/index/ImTeam"
// //JoinTeam
// import JoinTeam from "@/views/index/JoinTeam"
// import Share from "@/views/index/Share"




Vue.use(Router)
Vue.use(iHttp());
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
    path: '/OrderList',
    name: 'OrderList',
    component: OrderList
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
