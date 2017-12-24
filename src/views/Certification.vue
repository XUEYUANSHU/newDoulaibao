<template>
    <div>
        <div class="cert-item">
            <h3><span>实名认证</span>(请上传真实的个人信息，认证通过后将无法修改)</h3>
            <div class="cert-input">
                <p><span>姓名</span><input type="text" placeholder="请输入真实姓名" ref="realName" v-model="realName"></p>
                <p><span>身份证</span><input type="text" placeholder="请输入信息" ref="idCard" v-model="idCardNumber"></p>
            </div>
            <div class="cert-img">
                <div class="cert-img-list">
                    <p>身份证正面照</p>
                    <div class="choose-img">
                        <img :src="idCardFront" alt="">
                        <input type="file" accept="image/png,image/gif,image/jpg" name="file" @change="uploading($event,this)" ref="avatar" />
                    </div>
                </div>
                <div class="cert-img-list">
                    <p>身份证反面照</p>
                    <div class="choose-img">
                        <img :src="idCardVerso" alt="">
                        <input type="file" accept="image/png,image/gif,image/jpg" @change="uploading($event,this)" ref="avatar2"/>
                    </div>
                </div>
                <div class="cert-img-list">
                    <p>手持身份证照</p>
                    <div class="choose-img">
                        <img :src="idCardBody" alt="">
                        <input type="file" accept="image/png,image/gif,image/jpg" @change="uploading($event,this)" ref="avatar3"/>
                    </div>
                </div>
            </div>
            <div class="upload" @click="submit()">
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
                realName:'',
                idCardNumber:'',
                idCardFront:'static/img/zhengmian.png',//正面
                idCardVerso:'static/img/反面照@2x.png',//反面
                idCardBody:'static/img/手持@2x.png',//手持身份证
            }
        },
        created(){

        },
        methods:{
            uploadImg(){
//                this.$router.push('identifyReview')
//
            },
            uploading(event){
//                var that = this
                this.file = event.target.files[0];//获取文件
                var windowURL = window.URL || window.webkitURL;
//
                this.file = event.target.files[0];
                //创建图片文件的url
                this.idCardFront = windowURL.createObjectURL(this.$refs.avatar.files[0]);
                this.idCardVerso = windowURL.createObjectURL(this.$refs.avatar2.files[0]);
                this.idCardBody = windowURL.createObjectURL(this.$refs.avatar3.files[0]);
                var formdata = new FormData();
                formdata.append('file', this.file);
//                formdata.append('userId',"1")
                console.log(this.$refs.avatar.files[0]);
//                console.log(formdata.get("userId"))
                var config ={} ;
//                axios({
//                    method: "POST",
//                    url: api.uploadimage,
//                    headers: {
//                        'Content-Type':'multipart/form-data'
//                    },
//                    data:
//                    formdata,
//
//                })
//                    .then(res => {
////                        this.data = res.data;
//                        console.log(res.code)
//                        this.src = res.data
//                        console.log(this.src)
//                        console.log(res.message)
////                        var mobile = res.data.mobile;
////                        console.log(res.data.userStatus);
////                        console.log("res.data", res.data);
//                        //                this.bannerList = res.data.bannerList;
//                        //                console.log(this.bannerList)
//                        //                this.$set(this.items,data)
//                    })
//                    .catch(rtn => {
//                        console.log(rtn);
//                    });
            },
            submit(){
//                console.log(this.realName)
//                console.log(this.idCard)
                console.log(this.$refs.avatar.files[0])
//                console.log(this.$refs.avatar2.files[0])
//                console.log(this.$refs.avatar3.files[0])
                if(this.realName === '' || this.idCardNumber === ''){
                    alert('请输入个人信息')
                }
                if(this.$refs.avatar.files[0] === undefined || this.$refs.avatar2.files[0] === undefined || this.$refs.avatar3.files[0] === undefined){
                    alert('请选择照片')
                }else {
                    var formdata = new FormData();
                    formdata.append('realName',this.realName)
                    formdata.append('idCardNumber',this.idCard)
                    formdata.append('idCardFront',this.$refs.avatar.files[0])
                    formdata.append('idCardVerso',this.$refs.avatar2.files[0])
                    formdata.append('idCardBody',this.$refs.avatar3.files[0])
                    formdata.append('userId',1)
                    axios({
                        method: "POST",
                        url: api.bindIdentify,
                        headers: {
                            'Content-Type':'multipart/form-data'
                        },
                        data: formdata
                })
                    .then(res => {
//                        this.data = res.data;
                        console.log(res.code)
                        if(res.code === 200){
                            this.$router.push('identifyReview')
                        }
//                        this.src = res.data
//                        console.log(this.src)
                        console.log(res.message)
//                        var mobile = res.data.mobile;
//                        console.log(res.data.userStatus);
//                        console.log("res.data", res.data);
                        //                this.bannerList = res.data.bannerList;
                        //                console.log(this.bannerList)
                        //                this.$set(this.items,data)
                    })
                    .catch(rtn => {
                        console.log(rtn);
                    });
                }
            }
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
