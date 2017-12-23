
<template>
    <div style="background: #F9F9F9;">
        <!-- <div class="common_top">
            <div class="common_fanhui" @click="returnIndex"><img src="../assets/img/return.png" /></div>
            我是团长
        </div> -->
        <div class="common-w">
            <div class="share-title">分享团队邀请码</div>
            <div class="share-num">{{data.team.teamCode}}</div>
            <div class="nav">
                <div class="list">
                    <div>
                        <img src="../assets/img/短信@2x.png" class="icon-logo-img" />
                        <span class="text">短信</span>
                    </div>
                    <div class="boder-line">
                        <img src="../assets/img/QQ @2x.png" class="icon-logo-img" />
                        <span class="text">QQ </span>
                    </div>
                    <div>
                        <img src="../assets/img/微信@2x.png" class="icon-logo-img" />
                        <span class="text">微信</span>
                    </div>
                    <div class="boder-line">
                        <img src="../assets/img/朋友圈@2x.png" class="icon-logo-img" />
                     
                        <span class="text">朋友圈</span>
                    </div>
                    <div style="boder:0">
                        <img src="../assets/img/二维码@2x.png" class="icon-logo-img" />
                        
                        <span class="text">二维码</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="header-content">
            <p>
                <i class="icon-people"></i>
                <span class="teamName">团队名称</span>
                <!-- <span class="more"> </span> -->
                <input type="text" class="input1" v-model="data.team.teamName"  placeholder="创富团队">

                <i class="icon-eidt"></i>

            </p>
            <p>
                <i class="icon-persons"></i>
                <span class="teamName">团队成员</span>
                <!-- <input type="text"> -->
                <span class="more">192人</span>
            </p>
        </div>
       <div class="header-list" v-for="(item, idx) in data.teamMembers" :key="idx">
            <div class="nav">
                <div class="list">
                    <div>
                        <span class="textTile">{{item.realName}}</span>
                        <span class="textContent">131****6790 </span>
                    </div>
                    <div>
                        <span class="textTile">推广单数</span>
                        <span class="textContent yellow1">{{item.expandNum}}</span>
                    </div>
                    <div>
                        <span class="textTile">累计收入</span>
                        <span class="textContent yellow1">{{item.awardPrice}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "@/api/axios";
import api from "@/api/index.api";

export default {
  data() {
    return {
      data: { team: {}, teamMembers: {} }
    };
  },

  mounted() {
    axios({
      method: "POST",
      url: api.teamInfo,
      data: {
        userId: 1
      }
    })
      .then(res => {
        this.data = res.data;
        console.log(this.data, "团队详情", res.data);
      })
      .catch(rtn => {
        console.log(rtn);
      });
  },
  methods: {
    returnIndex() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
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
    .teamName {
      font-size: 0.32rem;
    }
    .icon-people {
      width: 0.4rem;
      height: 0.32rem;
      display: block;
      background: url("../assets/img/people_icon.png") no-repeat center;
      background-size: cover;
    }
    .icon-eidt {
      width: 0.32rem;
      height: 0.32rem;
      display: block;
      background: url("../assets/img/icon_edit.png") no-repeat center;
      background-size: cover;
    }
    .icon-persons {
      width: 0.4rem;
      height: 0.32rem;
      display: block;
      background: url("../assets/img/people_icon.png") no-repeat center;
      background-size: cover;
    }
    .more {
      font-size: 0.28rem;
      color: #999999;
    }
    .input1 {
      box-sizing: border-box;
      outline: none;
      flex: 2;
      border: 0;
      border: 1px solid #f3f0f0;
      padding: 0.08rem 0.2rem;
      margin-left: 20%;
      margin-right: 3%;
      width: 3.44rem;
      font-size: 0.24rem;
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
  margin: 0.24rem 0.24rem 0.24rem;
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
      img {
        width: 0.48rem;
        height: 0.48rem;
      }
      span {
        height: 0.24rem;
        font-size: 0.24rem;
        color: #333333;
        display: block;
      }
      .textTile {
        color: #333333;
        font-size: 0.28rem;
      }
      .textContent {
        font-size: 0.24rem;
        margin-top: 0.1rem;
        color: #999999;
      }
      .yellow1 {
        color: #fc8d00;
      }
    }
  }
}
</style>
