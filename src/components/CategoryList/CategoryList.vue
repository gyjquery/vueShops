<template>
  <div class="categorylist">
     <ul>
       <li v-for="(item,index) in 19" :key="index">推荐专区</li>
     </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
    export default {
    mounted () {
//      自定义滚动条
      new BScroll('.categorylist' ,{
        bounce: true,
        momentumLimitDistance: 1,
        scrollY: true
      })
    }
    }
</script>

<style scoped lang="less">
  @import '../../common/less/rem';
   .categorylist{
     height:100%;
     width:162/@rem;
     border:1px solid #f4f4f4;
     overflow: hidden;
     ul{
       width:162/@rem;
       overflow: hidden;
       li{
         width:162/@rem;
         height:50/@rem;
         margin-top: 40/@rem;
         font-size: 27.998/@rem;
         color:#333;
         text-align: center;
       }
     }
   }
</style>
