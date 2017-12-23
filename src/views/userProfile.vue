<template>

    <div class="container">
        <!--个人资料-->
        <div class="item-ul">
           <ul>
               <li>
                   <span>头像</span>
                   <p>
                       <input type="file" accept="image/png,image/gif,image/jpg" name="file">
                       <img src="../assets/img/headimg.jpg" alt="">
                   </p>
                   <i class="item-right-icon"></i>
               </li>
               <li @click="pushRoute('editUserName')">
                   <span >昵称</span>
                   <span>未绑定</span>
                   <i class="item-right-icon"></i>
               </li>
               <li>
                   <span>实名认证111</span>
                   <span @click="pushRoute('Certification')">未绑定</span>
                   <i class="item-right-icon"></i>
               </li>
               <li @click="pushRoute('bindMobile')">
                   <span>手机号</span>
                   <span>未绑定</span>
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
    export default {
        data(){
            return {

            }
        },
        methods:{
            pushRoute(param){
                this.$router.push(""+param+"")
            },

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
