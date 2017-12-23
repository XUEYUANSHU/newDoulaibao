<template>

    <div class="container">
        <!--个人资料-->
        <div class="item-ul">
           <ul>
               <li>
                   <span>头像</span>
                   <p>
                       <input type="file" accept="image/png,image/gif,image/jpg" name="file">
                       <img :src="data.avatar" alt="">
                   </p>
                   <i class="item-right-icon"></i>
               </li>
               <li @click="pushRoute('editUserName')">
                   <span >昵称</span>
                   <span>{{data.nickname === "" ? "未绑定":data.nickname}}</span>
                   <i class="item-right-icon"></i>
               </li>
               <li>
                   <span>实名认证</span>
                   <span @click="checkUserStatus($event)" :status-id="data.userStatus">{{data.userStatus === 0 ? "未认证":"已认证"}}</span>
                   <i class="item-right-icon"></i>
               </li>
               <li @click="checkMobile($event)" :usermobile-id="data.mobile">
                   <span>手机号</span>
                   <span>{{data.mobile === "" ? "未绑定":data.mobile}}</span>
                   <i class="item-right-icon"></i>
               </li>
               <li class="bankcard"  @click="pushRoute('bindBank')">
                   <span>银行卡</span>
                   <span>未绑定</span>
                   <i class="item-right-icon"></i>
               </li>
           </ul>
        </div>
    </div>
</template>
<script>
    import footer from "@/components/footer.vue";
    import axios from "@/api/axios";
    import api from "@/api/index.api";
    export default {
        data(){
            return {
                   data:[],
                   usermobile:'',
                   status:''
            }
        },
        created(){
          this.getUerProfile()
        },
        methods:{
            pushRoute(param){
                this.$router.push(""+param+"")
            },
            getUerProfile(){
                axios({
                    method: "POST",
                    url: api.userDetail,
                    data: {
                        userId: 1
                    }
                })
                    .then(res => {
                        this.data = res.data;
//                        var mobile = res.data.mobile;
                        console.log(res.data.userStatus);
//                        console.log("res.data", res.data);
                        //                this.bannerList = res.data.bannerList;
                        //                console.log(this.bannerList)
                        //                this.$set(this.items,data)
                    })
                    .catch(rtn => {
                        console.log(rtn);
                    });
            },
            //检测手机号是否绑定
            checkMobile(){
                var usermobile =  this.usermobile = event.currentTarget.getAttribute('usermobile-id');
                alert(this.usermobile)
                if(usermobile === ''){
                    this.$touter.push('bindMobile')
                }else {
                    this.$router.push('showMobile')
                }
            },
            //检测是否实名
            checkUserStatus(){
                var status =  this.status = event.currentTarget.getAttribute('status-id');
//                alert(this.status)
                if(status === "0"){
                    this.$router.push('Certification')
                    alert('未认证')
                }else if(status === "1"){
//                    this.$router.push('changeMobile')
                    alert('您已完成个人认证')
                }
            }

        }
    }
</script>
<style lang="less" scoped="scoped">
    .container{
        background-color: #fff;
    }
    .item-ul{
        ul{
            margin:.2rem 0;
            li{
                display: flex;
                align-items: center;
                padding: .2rem;
                font-size: .32rem;
                color: #545454;
                border-bottom: 1px solid #ccc;
                p{
                    flex:1;
                    display: flex;
                    position: relative;
                    height:.56rem;
                    img{
                        width: .56rem;
                        height:.56rem;
                        border-radius: 50%;
                        position: absolute;
                        right:0;
                        top:0;
                        display: inline-block;
                        z-index:98;
                    }
                    input{
                        width:.56rem;
                        height:.56rem;
                        position: absolute;
                        right:0;
                        top:0;
                        border:none;
                        outline: none;
                        /*background-color: rgba(0,0,0,0);*/
                        opacity: 0;
                        display: inline-block;
                        z-index: 99;
                    }
                }
                span:nth-child(2){
                    flex:1;
                    text-align: right;
                }
                i.item-right-icon{
                    background: url("../assets/img/item-right-icon.png") no-repeat center;
                    background-size: cover;
                    width:.18rem;
                    height:.36rem;
                    margin-left: .3rem;
                }
            }
            li.bankcard{
                /*margin-top: .2rem;*/
                border-top: .2rem solid #f2f2f2;
            }
        }
    }
</style>
