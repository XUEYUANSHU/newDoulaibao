<template>

    <div class="container">
        <Header url='-1' title="首页"></Header>
        <!--个人资料-->
        <div class="item-ul">
           <ul>
               <li>
                   <span>头像</span>
                   <p>
                       <input id="image" type="file" accept="image/png,image/gif,image/jpg" name="file" multiple="multiple"  @change="onFileChange">
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
                   <span @click="checkUserStatus($event)" :status-id="data.userStatus">{{data.userStatus === 0 ? "未认证":(data.userStatus === 1?"审核中":(data.userStatus === 2?"已认证":(data.userStatus === 3?"审核失败":"认证失败")))}}</span>
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
import Header from "@/components/Header.vue";
import footer from "@/components/footer.vue";
import axios from "@/api/axios";
import api from "@/api/index.api";
export default {
  data() {
    return {
      data: [],
      usermobile: "",
      status: ""
    };
  },
  created() {
    this.getUerProfile();
  },
  methods: {
    pushRoute(param) {
      this.$router.push("" + param + "");
    },
    getUerProfile() {
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
    checkMobile() {
      var usermobile = (this.usermobile = event.currentTarget.getAttribute(
        "usermobile-id"
      ));
      //                alert(this.usermobile)
      if (usermobile === "") {
        this.$touter.push("bindMobile");
      } else {
        this.$router.push("showMobile");
      }
    },
    //检测是否实名
    checkUserStatus() {
      var status = (this.status = event.currentTarget.getAttribute(
        "status-id"
      ));
      //                alert(this.status)0 未通过 1.审核中2.通过 3.失败
      if (status === "0") {
        this.$router.push("Certification");
        //                    alert('未认证')
      } else if (status === "1") {
        //                    this.$router.push('changeMobile')
        this.$router.push("identifyReview");
        //                    alert('1')
      } else if (status === "2") {
        //                    alert('2')
        this.$router.push("identifySucc");
      } else {
        //                    alert('3')
        this.$router.push("Certification");
      }
    },
    //photo
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
    //   this.createImage(files[0]);

      var formData = new FormData();
      formData.append("file", document.getElementById("image"));
      formData.append("userId", 1); //添加其他需要上传的数据，这里可以用JSON.stringify转，涉及file上传的切记不要转;

      axios({
         headers: { "Content-Type": "multipart/form-data" },
        method: "POST",
        url: api.uploadimage,
        data: {
          formData
        }
      })
        .then(res => {
          //                        this.data = res.data;
          console.log(res.code);
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
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
      axios({
        method: "POST",
        url: api.uploadimage,
        data: {
          file: this.image
        }
      })
        .then(res => {
          //                        this.data = res.data;
          console.log(res.code);
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
};
</script>
<style lang="less" scoped="scoped">
.container {
  background-color: #fff;
}
.item-ul {
  ul {
    margin: 0.2rem 0;
    li {
      display: flex;
      align-items: center;
      padding: 0.2rem;
      font-size: 0.32rem;
      color: #545454;
      border-bottom: 1px solid #ccc;
      p {
        flex: 1;
        display: flex;
        position: relative;
        height: 0.56rem;
        img {
          width: 0.56rem;
          height: 0.56rem;
          border-radius: 50%;
          position: absolute;
          right: 0;
          top: 0;
          display: inline-block;
          z-index: 98;
        }
        input {
          width: 0.56rem;
          height: 0.56rem;
          position: absolute;
          right: 0;
          top: 0;
          border: none;
          outline: none;
          /*background-color: rgba(0,0,0,0);*/
          opacity: 0;
          display: inline-block;
          z-index: 99;
        }
      }
      span:nth-child(2) {
        flex: 1;
        text-align: right;
      }
      i.item-right-icon {
        background: url("../assets/img/item-right-icon.png") no-repeat center;
        background-size: cover;
        width: 0.18rem;
        height: 0.36rem;
        margin-left: 0.3rem;
      }
    }
    li.bankcard {
      /*margin-top: .2rem;*/
      border-top: 0.2rem solid #f2f2f2;
    }
  }
}
</style>
