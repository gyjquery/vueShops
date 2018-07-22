<template>
  <div class="category">
     <header><i class="iconfont icon-fangdajing"></i><span>搜索商品,共10005款好物</span></header>
     <div class="categoryMain">
       <CategoryList/>
       <CategoryContent/>
     </div>
  </div>
</template>

<script>
  import CategoryList from '../../components/CategoryList/CategoryList.vue'
  import CategoryContent from '../../components/CategoryContent/CategoryContent.vue'
    export default {
    components:{
      CategoryList,
      CategoryContent
    }
    }
</script>

<style scoped lang="less">
  @import '../../common/less/rem';
 .category{
   height:100%;
   overflow: hidden;
    header{
      width:690/@rem;
      height:56/@rem;
      margin: .2rem auto;
      font-size: 27.998/@rem;
      color:#666;
      text-align: center;
      background: #ededed;
      border-radius: .1rem;
      line-height:56/@rem;
    }
   .categoryMain{
     height:85%;
     display: flex;
   }
 }
</style>
