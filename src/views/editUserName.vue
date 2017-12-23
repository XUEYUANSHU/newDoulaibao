<template>
    <div>
        <div class="item">
            <input type="text" placeholder="请输入您的姓名" class="username"  v-model="nickname">
            <!--<p >{{nickname}}</p>-->
            <span class="save" @click="editUserName()">保存</span>
        </div>
    </div>
</template>
<script>
    import axios from "@/api/axios";
    import api from "@/api/index.api";
    import router from "@/router/index";
    export default {
        data(){
          return {
              data:[],
              nickname:""
          }
        },
        created(){
//            this.editUserName()
        },
        methods:{
//            pushRoute(param) {
//                console.log(param)
//                this.$router.push("" + param + "");
//            },
            editUserName(){
                if(this.nickname === ''){
                    alert('请输入姓名')
                }
                else{
                    axios({
                        method: "POST",
                        url: api.editnickName,
                        data: {
                            userId: 1,
                            nickname:this.nickname
                        }
                    })
                        .then(res => {
                            this.data = res.data;
                            console.log(res.code);
                            alert(res.data)
                            this.$router.push("userProfile");
                            console.log("res.data", res.data);
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
<style lang="less" scoped="">
    .item{
        margin-top: .2rem;
        input{
            border:none;
            outline:none;
            height: .8rem;
            line-height: .8rem;
            font-size:.3rem;
            text-indent: .2rem;
            width:100%;
        }
        span{
            width:5.4rem;
            height:.72rem;
            line-height: .72rem;
            font-size: .3rem;
            text-align: center;
            color: #fff;
            background-color: #fc8d00;
            border-radius: .08rem;
            margin: .2rem auto;
            display: block;
        }
    }
</style>
