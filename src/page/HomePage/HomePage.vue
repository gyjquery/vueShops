<template>
  <div class="homePageCon">
     <div class="head">
       <HomeHeader/>
       <NavBar/>
     </div>
     <router-view/>
  </div>
</template>

<script>
  import HomeHeader from '../../components/HomeHeader/HomeHeader.vue'
  import NavBar from '../../components/NavBar/NavBar.vue'

    export default {
    components: {
      HomeHeader,
      NavBar
      },
      mounted () {

      }
    }
</script>

<style scoped lang="less">
 .homePageCon{
   height:100%;
   overflow: hidden;
   .head{
    position: absolute;
    top: 0;
     left:0;
     z-index: 1;
     background: #fff;
   }
 }

</style>
