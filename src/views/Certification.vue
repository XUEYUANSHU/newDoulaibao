<template>
    <div>
        <div class="cert-item">
            <h3><span>实名认证</span>(请上传真实的个人信息，认证通过后将无法修改)</h3>
            <div class="cert-input">
                <p><span>姓名</span><input type="text" placeholder="请输入真实姓名"></p>
                <p><span>身份证</span><input type="text" placeholder="请输入信息"></p>
            </div>
            <div class="cert-img">
                <div class="cert-img-list">
                    <p>身份证正面照</p>
                    <div class="choose-img">
                        <img src="../assets/img/zhengmian2x.png" alt="">
                        <input type="file" accept="image/png,image/gif,image/jpg" name="file" />
                    </div>
                </div>
                <div class="cert-img-list">
                    <p>身份证反面照</p>
                    <div class="choose-img">
                        <img src="../assets/img/反面照@2x.png" alt="">
                        <input type="file" accept="image/png,image/gif,image/jpg" @change="onFileChange($event,1)"/>
                    </div>
                </div>
                <div class="cert-img-list">
                    <p>手持身份证照</p>
                    <div class="choose-img">
                        <img src="../assets/img/反面照@2x.png" alt="">
                        <input type="file" accept="image/png,image/gif,image/jpg" @change="onFileChange($event,1)"/>
                    </div>
                </div>
            </div>
            <div class="upload" @click="uploadImg()">
                <span>提交</span>
            </div>
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

            }
        },
        created(){

        },
        methods:{
            uploadImg(){
                this.$router.push('identifyReview')
//
            },
        }
    }
</script>
<style lang="less" scoped>
    .cert-item{
        padding-bottom: 1rem;
        h3{
            display: flex;
            align-items: flex-end;
            font-size: .24rem;
            color: rgba(18,18,18,0.25);
            padding: .16rem .24rem;
            span{
                font-size: .3rem;
                margin-right:.1rem ;
                color: #5f3104;
            }
        }
        .cert-input{
            background-color: #fff;
            p{
                display: flex;
                align-items: center;
                padding: .3rem .24rem;
                span{
                    font-size: .32rem;
                    color: #333;
                    width:1.3rem;
                }
                input{
                    flex:1;
                    outline:none;
                    border:none;
                    color: #333;
                    font-size: .28rem;
                    text-align: center;
                }
            }

        }
        .cert-img{
            background-color: #fff;
            margin-top: .16rem;
            padding: .16rem .24rem;
            font-size: .28rem;
            .cert-img-list{
                margin-top: .24rem;
                .choose-img{
                    width:7.5rem;
                    height:2.4rem;
                    position: relative;
                    padding: .24rem 0;
                    img{
                        width:4rem;
                        height:2.4rem;
                        position: absolute;
                        left:1.726rem;
                        top:.24rem;
                        z-index: 996;
                    }
                    input{
                        display: block;
                        width:4rem;
                        height:2.4rem;
                        opacity: 0;
                        outline:none;
                        border:none;
                        position: absolute;
                        left:1.726rem;
                        top:.24rem;
                        z-index: 999;
                    }
                }
            }
        }
        .upload{
            width:7.5rem;
            height:.96rem;
            line-height:.96rem;
            background-color: #fc8d00;
            color: #fff;
            font-size: .32rem;
            margin-top: .4rem;
            text-align: center;
        }
    }
</style>
