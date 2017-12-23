<template>
    <div>
        <div class="container">
            <!--实名认证-->
            <div class="item-ul">
                <ul>
                    <li>
                        <span>实名认证</span>
                        <span>请上传真实的个人信息，认证通过后将无法进行修改</span>
                    </li>
                    <li>
                        <span >姓名</span>
                        <input type="text" placeholder="请输入真实姓名" />
                    </li>
                    <li>
                        <span >身份证</span>
                        <input type="text" placeholder="请输入信息" />
                    </li>
                    <li>
                        <span >身份证正面照</span>
                        <input type="file" accept="image/png,image/gif,image/jpg" name="file">
                        <img src="../assets/img/正面照@2x.png" alt="">
                    </li>
                    <li class="bankcard">
                        <span >身份证反面照</span>
                        <input type="file" accept="image/png,image/gif,image/jpg" name="file">
                        <img src="../assets/img/反面照.png" alt="">
                    </li>
                    <li class="bankcard">
                        <span >手持身份证照</span>
                        <input type="file" accept="image/png,image/gif,image/jpg" name="file">
                        <img src="../assets/img/反面照.png" alt="">
                    </li>
                </ul>
            </div>
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
