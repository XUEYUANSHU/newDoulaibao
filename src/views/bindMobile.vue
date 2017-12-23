<template>
    <div>
        <div class="item">
            <p><i class="icon-phone"></i><input type="number" value="" placeholder="请输入手机号码" id="phoneNum" class="mobile" ref="phone"></p>
            <p>
                <input type="number" id="msg" placeholder="请输入验证码" class="code" ref="code">
                <button  v-model="mobileCode" @click="sendCode" :disabled="!show" class="sendMsg">{{mobileCode}}</button>
            </p>
        </div>
        <button class="bindSucc" @click="submit()">绑定成功</button>
    </div>
</template>
<script>
    export default {
        props:{
          disabled:{
              type:Boolean,
              default:false
            }
        },
        data(){
            return {
                mobileCode:"发送验证码",
                code:"",
                show:true,
            }
        },
        methods:{
            //发送短信
            sendCode(){
                var reg = /^1[3|5][0-9]\d{4,8}$/;
                var time = 30;
                var that = this
                if(this.$refs.phone.value === "" || !reg.test(this.$refs.phone.value)){
                    console.log(this.$refs.phone.value)
                       return false;
                }else{
                    console.log('手机号合法'+ this.code)
                    alert('1')
                    this.show= false;
                    var timer = setInterval(function () {
                        time--;
                        that.mobileCode = time + "秒后重新发送";
                        console.log(this.mobileCode)
                        if(time <=0){
                            clearInterval(timer);
                            time = 30;
                            that.mobileCode = "发送验证码"
                            that.show = true;
                        }
                    },1000);

                }
            },
            //绑定成功跳转
            submit(){
                let val = this.$refs.code.value
                if(val === ""){
                   alert('验证码错误')
                }
                else{
                    //post
                    this.$router.push('userProfile');
                }
            }
        }
    }
</script>
<style lang="less" scoped>
.item{
    width:4.9rem;
    margin: .72rem auto 0;
    overflow: hidden;
    p{
        display: flex;
        align-items: center;
        position: relative;
        i.icon-phone{
            background: url("../assets/img/Shape Copy@2x.png") no-repeat center;
            background-size: cover;
            width:.36rem;
            height:.36rem;
            display: block;
            position: absolute;
            left:.24rem;
            top:.22rem;
        }
    }
    input{
        outline: none;
        border:1px solid rgba(107,107,107,0.40);
        border-radius: .1rem;
        margin: 0;
        padding: 0;
        color: #000;
        font-size: .3rem;
        height:.8rem;
        line-height: .8rem;
    }
    input.mobile{
        width:4.8rem;
        color: rgba(107,107,107,0.40);
        margin-bottom: .24rem;
        text-indent: .7rem;
    }
    input.code{
        width:2.54rem;
        float: left;
    }
    .sendMsg{
        font-size: .28rem;
        color: #fff;
        background-color: #fc8d00;
        display: block;
        text-align: center;
        margin-left: .1rem;
        height:.6rem;
        line-height: .6rem;
        width:2.16rem;
        float: left;
        outline: none;
        border: none;
        border-radius: .1rem;
    }
}
    .bindSucc{
        width:5.6rem;
        height: .72rem;
        line-height: .72rem;
        margin: .64rem auto 0;
        color: #fff;
        text-align: center;
        font-size: .32rem;
        background-color: #fc8d00;
        display: block;
        outline: none;
        border: none;
        border-radius: .1rem;
    }
</style>
