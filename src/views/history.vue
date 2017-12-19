<template>
    <div class="container">
        <div class="tab-item" >
            <ul>
                <li v-for="(item,index) in itemTabs" :class="{active: index == num}" @click="tab(index)"  :key="index">{{item}}</li>
            </ul>
        </div>
        <div class="tab-item-box" v-for="(item,index) in itemBoxs" :key="index">
            <ul v-show=" index == num">
                <li>{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
    data(){
            return {
                itemTabs:['全部','已完成','待生效'],
                itemBoxs:['2','3','4'],
                num:0
            }

    },
     methods:{
        tab(index){
            this.num = index;
         }
    }
    }
</script>
<style lang="less" scoped="scoped">
    .container{
        background-color: #fff;
    }
    .tab-item{
        ul{
            display: flex;
            align-items: center;
            padding: .2rem 0;
            border-bottom: 1px solid #f9f9f9;
            li{
                flex:1;
                text-align: center;
                /*background-color: red;*/
                font-size: .32rem;
                line-height: .4rem;
                color: rgba(153,153,153,0.60);
                letter-spacing: 0.21px;
            }
            .active{
                color: #FC8D00;
            }
        }
    }
    .item-box{
        ul{
            li{
                background-color: #fff;
                border-bottom:1px solid #f9f9f9;
            }
        }
    }
</style>
