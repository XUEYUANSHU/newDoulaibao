<template>
    <div id="app">
        <div>
            <router-view></router-view>
            <ele_footer></ele_footer>
        </div>
    </div>
</template>
<script>


import Vue from 'vue'
import rem from  '@/assets/js/h5reset'
import '@/assets/css/style.css'
import footer from "@/components/footer.vue"
export default {
    data() {
        return {

        }
    },
    components: {
        ele_footer: footer
    },
    created() {
        this.setRem()
    },
    methods: {
           setRem(){
//               rem()
               (function(designWidth, maxWidth) {
                   var doc = document,
                       win = window;
                   var docEl = doc.documentElement;
                   var tid;
                   var rootItem,rootStyle;

                   function refreshRem() {
                       var width = docEl.getBoundingClientRect().width;
                       if (!maxWidth) {
                           maxWidth = 540;
                       };
                       if (width > maxWidth) {
                           width = maxWidth;
                       }
                       //与淘宝做法不同，直接采用简单的rem换算方法1rem=100px
                       var rem = width * 100 / designWidth;
                       //兼容UC开始
                       rootStyle="html{font-size:"+rem+'px !important}';
                       rootItem = document.getElementById('rootsize') || document.createElement("style");
                       if(!document.getElementById('rootsize')){
                           document.getElementsByTagName("head")[0].appendChild(rootItem);
                           rootItem.id='rootsize';
                       }
                       if(rootItem.styleSheet){
                           rootItem.styleSheet.disabled||(rootItem.styleSheet.cssText=rootStyle)
                       }else{
                           try{rootItem.innerHTML=rootStyle}catch(f){rootItem.innerText=rootStyle}
                       }
                       //兼容UC结束
                       docEl.style.fontSize = rem + "px";
                   };
                   refreshRem();

                   win.addEventListener("resize", function() {
                       clearTimeout(tid); //防止执行两次
                       // tid = setTimeout(refreshRem, 300);
                   }, false);

                   win.addEventListener("pageshow", function(e) {
                       if (e.persisted) { // 浏览器后退的时候重新计算
                           clearTimeout(tid);
                           tid = setTimeout(refreshRem, 300);
                       }
                   }, false);

                   if (doc.readyState === "complete") {
                       doc.body.style.fontSize = "16px";
                   } else {
                       doc.addEventListener("DOMContentLoaded", function(e) {
                           doc.body.style.fontSize = "16px";
                       }, false);
                   }
               })(750, 750);
           }
    }
}
</script>
<style lang="less">
@font-face {
  font-family: 'iconfont';  /* project id 511646 */
  src: url('//at.alicdn.com/t/font_511646_r5j9b8zfz6qd7vi.eot');
  src: url('//at.alicdn.com/t/font_511646_r5j9b8zfz6qd7vi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_511646_r5j9b8zfz6qd7vi.woff') format('woff'),
  url('//at.alicdn.com/t/font_511646_r5j9b8zfz6qd7vi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_511646_r5j9b8zfz6qd7vi.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:50px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>


