<template>
  <div class="homePublic">
    <div>
      <div class="bigImg" v-if="cateList"><img :src="cateList.bannerUrl"/></div>
      <div class="goodContent"  v-if="cateList">
        <header>
          <p>{{cateList.name}}</p>
          <p>{{cateList.frontName}}</p>
        </header>
        <Good  v-for="(cate,index) in cateList.itemList" :key="index" :cate="cate"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Good from '../../../components/Good/Good.vue'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['cateLists']),
      cateList(){
         const cateLists = this.cateLists
         const findId = this.$route.params.id
         return cateLists[findId-1]

      }
    },
    mounted () {
      new BScroll('.homePublic',{
        bounce: true,
        momentumLimitDistance: 1,
        scrollY: true,
        scrollbar: {
          fade: true,
          interactive: false,
        },
        mouseWheel: true,
      })
    },
    components:{
      Good
    }
  }
</script>

<style scoped lang="less">
  @import '../../../common/less/rem';
  @import '../../../common/less/blend';
  .homePublic{
    height:81%;
    margin-top:145/@rem;
    background: #F4F4F4;
    overflow: hidden;
    .bigImg{
      width:100%;
      img{
        width:100%;
        height:420/@rem;
      }
    }
    .goodContent{
      background: #fff;
      .clearfix();
      header{
        width:750/@rem;
        height:120/@rem;
        display: flex;
        flex-direction: column;
       justify-content: center;
        p:first-child{
           font-size: 32/@rem;
           color:#333;
          margin-bottom: 16/@rem;
          text-align: center;
        }
        p:last-child{
          color:#999;
          font-size: 24/@rem;
          text-align: center;
        }
      }
      .whole{
        width:345.016/@rem;
        height:158.984/@rem;
        padding:128/@rem 0 129/@rem 0;
        display: inline-block;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        background: #f4f4f4;
        margin-left: 20/@rem;
        i{
          font-size: 70/@rem;
          color: #b5b5b5;
          display: block;
          margin-top: .3rem;
        }
      }
    }
  }
</style>
