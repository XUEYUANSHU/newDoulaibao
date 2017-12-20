
<template>
    <div style="background: #F9F9F9;">
        <div class="common_top">
            <!-- <div class="common_fanhui" @click="returnIndex"><img src="../../assets/img/return.png" /></div> -->
            <div class="common_fanhui" @click="returnIndex"><img ></div>
            我是团长
        </div>
        <div class="common-w">
            <div class="share-title">分享谈对分享码</div>
            <div class="share-num">22222222</div>
            <div class="nav">
                <div class="list">
                    <div>
                        <!-- <img src="../../assets/img/short_message.png" class="icon-logo-img" /> -->
                        <img  />
                        <span>短信</span>
                    </div>
                    <div class="boder-line">
                        <!-- <img src="../../assets/img/qq.png" class="icon-logo-img" /> -->
                        <img />
                        <span>QQ </span>
                    </div>
                    <div>
                        <!-- <img src="../../assets/img/weixin.png" class="icon-logo-img" /> -->
                        <img  />
                        <span>微信</span>
                    </div>
                    <div class="boder-line">
                        <!-- <img src="../../assets/img/friend_circle.png" class="icon-logo-img" /> -->
                        <img   />
                        <span>朋友圈</span>
                    </div>
                    <div style="boder:0">
                        <!-- <img src="../../assets/img/two_code.png" class="icon-logo-img" /> -->
                        <img   />
                        <span>二维码</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="header-content">
            <p>
                <i class="icon-people"></i>
                <span>团队名称</span>
                <!-- <span class="more"> </span> -->
                <input type="text" class="input1" placeholder="创富团队">

                <i class="icon-eidt"></i>

            </p>
            <p>
                <i class="icon-person"></i>
                <span>团队成员</span>
                <!-- <input type="text"> -->
                <span class="more">更多 </span>
            </p>
        </div>
        <div class="header-list">
            <div class="nav">
                <div class="list">
                    <div>
                        <span>李薇薇</span>
                        <span>131****6790 </span>
                    </div>
                    <div>
                        <span>李薇薇</span>
                        <span>131****6790 </span>
                    </div>
                    <div>
                        <span>李薇薇</span>
                        <span>131****6790 </span>
                    </div>
                </div>

            </div>
            <div class="nav">
                <div class="list">
                    <div>
                        <span>李薇薇</span>
                        <span>131****6790 </span>
                    </div>
                    <div>
                        <span>李薇薇</span>
                        <span>131****6790 </span>
                    </div>
                    <div>
                        <span>李薇薇</span>
                        <span>131****6790 </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>

 
import axios from '@/api/axios'
import api from '@/api/index.api'

export default {

    data: function () {
        return {

        }

    },

    created() {
        //console.log(, "woshi");
        // if(){
        this.getData()

    },
    methods: {
        returnIndex() {
            this.$router.go(-1)
        },
        getData() {
            axios({
                method: 'POST',
                url: api.itemInfo,
                data: { userId: 1 }
            }).then((res) => {
                console.log(res)

            }).catch(rtn => {
                console.log(rtn)
            });
        },


    }


}
</script>
<style lang="less">
.header-content {
  background: #fff;
  padding: 0 0.24rem;
  p {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #3d3d3d;
    // padding:.2rem .3rem;
    line-height: 0.96rem;

    .icon-people {
      width: 20px;
      height: 20px;
      display: block;
    //   background: url("../../assets/img/people_icon.png") no-repeat center;
      background-size: cover;
    }
    .icon-eidt {
      width: 16px;
      height: 16px;
      display: block;
    //   background: url("../../assets/img/icon_edit.png") no-repeat center;
      background-size: cover;
    }
    .icon-person {
      width: 20px;
      height: 20px;
      display: block;
    //   background: url("../../assets/img/person_icon.png") no-repeat center;
      background-size: cover;
    }
    .input1 {
      outline: none;
      flex: 2;
      border: 0;
      border: 1px solid #f3f0f0;
      padding: 0.08rem 0.2rem;
      margin-left: 20%;
      margin-right: 3%;
      width: 3.44rem;
    }
    span {
      margin-left: 20px;
    }
    span:nth-child(3) {
      flex: 1;
      text-align: right;
    }
  }
}
.common_top {
  width: 100%;
  height: 0.88rem;
  background-color: orange;
  text-align: center;
  line-height: 0.88rem;
  color: white;
  font-size: 18px;
  position: fixed;
  top: 0px;
  z-index: 10000333;
}
.common_fanhui {
  width: 0.22rem;
  height: 0.41rem;
  float: left;
  line-height: 0.88rem;
  position: absolute;
  margin-left: 0.26rem;
}

.common_fanhui img {
  width: 11px;
  height: 19px;
}

.common_font {
  line-height: 0.88rem;
  text-align: center;
  font-size: 18px;
}
.common-w {
  margin: 1.12rem 0.24rem 0.24rem;
  background: #fff;
  border: 1px solid #f3f0f0;
  box-shadow: 0 0 2px #888888;
  .share-title {
    text-align: center;
    margin: 0.32rem 0 0.28rem;
    font-size: 0.28rem;
    color: #fc8d00;
  }
  .share-num {
    text-align: center;
    font-size: 0.64rem;
    color: #e73b3b;
    margin-bottom: 0.17rem;
  }
}
.header-list {
  background: #fff;
}
.nav {
  .list {
    display: flex;
    border-top: 1px solid #f3f0f0;
    padding: 0.2rem 0;
    align-items: center;
    justify-content: center;
    //    padding: .2rem 0;
    //    border-bottom: .2rem solid #F3F0F0;
    .boder-line {
      border-left: 1px solid #f3f0f0;
      border-right: 1px solid #f3f0f0;
    }
    div {
      flex: 1;
      text-align: center;
      font-size: 0;
      span {
        display: block;
        margin-top: 0.1rem;
        font-size: 14px;
        color: #3d3d3d;
      }
    }
  }
}
</style>
