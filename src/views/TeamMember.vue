
<template>
    <div style="background: #F9F9F9;">
      <Header url="-1" title="我是团员" />
        <div style="display:block">
            <div class="memberHeader">
                <div><i class="icon-team"></i><span class="team">{{data.team.teamName}}</span></div>
                <div class="membersName"><span class="yellow2">团长: </span><span>{{data.team.teamLeader}}</span></div>
            </div>

            <div class="header-content">
                <p>
                    <i class="icon-persons"></i>
                    <span class="teamName">团队成员</span>
                    <!-- <input type="text"> -->
                    <span class="more">{{data.team.teamUserNum+ '人'}}</span>
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
            <div class="code">
                <div><img :src="data.team.teamImage" alt=""></div>
                <div>分享二维码</div>
            </div>
            <div class="abortTeam" @click="outTeam()">
                退出团队
            </div>
        </div>
        <div class="join_member" style="display:none">
            <div class="join_input"><i class="icon-yao"></i><input type="text" placeholder="请输入团队邀请码"></div>
            <p>注:团队邀请码由团队负责人提供</p>
            <div class="btn-join">确定加入</div>
        </div>
    </div>
</template>
<script>
import axios from "@/api/axios";
import api from "@/api/index.api";
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  },
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
    outTeam() {
      axios({
        method: "POST",
        url: api.outTeam,
        data: {
          userId: 1
        }
      })
        .then(res => {
          //                this.data =  res.data;
          console.log("退出团队成功", res.data);
        })
        .catch(rtn => {
          console.log(rtn);
        });
    }
  }
};
</script>
<style lang="less">
.memberHeader {
  width: 7.02rem;
  height: 2.08rem;
  padding: 0.16rem 0.28rem;
  text-align: center;
  .icon-team {
    display: inline-block;
    width: 0.52rem;
    height: 0.74rem;
    vertical-align: text-bottom;
    background: url("../assets/img/奖杯@2x.png") no-repeat center;
    background-size: cover;
  }
  .team {
    display: inline-block;
    margin: 0.34rem 0 0.1rem 0;
    font-size: 0.48rem;
    color: #e73b3b;
  }
  .membersName {
    font-size: 0.28rem;
    color: #151515;
    .yellow2 {
      color: #fc8d00;
    }
  }
}
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
      img {
        width: 0.48rem;
        height: 0.48rem;
      }
      span {
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
.code {
  padding: 0.52rem;
  text-align: center;
  img {
    width: 2.86rem;
    height: 2.8rem;
  }
}
.abortTeam {
  height: 0.96rem;
  line-height: 0.96rem;
  background-color: #fc8d00;
  color: #ffffff;
  text-align: center;
}
/*加入团队样式*/
.join_member {
  width: 4.8rem;
  margin: 0.7rem auto 0;
  .join_input {
    width: 100%;
    position: relative;
    i.icon-yao {
      background: url("../assets/img/邀请@2x.png");
      background-size: cover;
      width: 0.36rem;
      height: 0.36rem;
      display: block;
      position: absolute;
      left: 0.24rem;
      top: 0.22rem;
    }
    input {
      height: 0.8rem;
      width: 100%;
      line-height: 0.8rem;
      font-size: 0.3rem;
      outline: none;
      background: #ffffff;
      border: 1px solid rgba(107, 107, 107, 0.4);
      border-radius: 0.1rem;
      text-indent: 0.7rem;
      color: #6b6b6b;
    }
  }
  p {
    font-size: 0.24rem;
    text-align: center;
    margin-top: 0.16rem;
    color: #6b6b6b;
  }
  .btn-join {
    width: 100%;
    height: 0.72rem;
    line-height: 0.72rem;
    font-size: 0.32rem;
    color: #fff;
    text-align: center;
    background-color: #fc8d00;
    margin-top: 0.64rem;
    border-radius: 0.1rem;
  }
}
</style>
