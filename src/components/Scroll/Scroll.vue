<template>
  <div :class="'imgScroll'+a">
    <div class="slides">
      <div class="slide" v-for="(soll,index) in scroll">
        <img :src="soll.listPicUrl">
        <div class="text1">{{soll.name}}</div>
        <div class="text2">{{soll.simpleDesc}}</div>
        <div class="text3">{{soll.retailPrice}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
       props: {
        scroll:Array,
         a:String
       },
         mounted () {
           const a=this.a;
           new BScroll('.imgScroll'+a ,{
             bounce: true,
             momentumLimitDistance: 1,
             scrollX: true

           })
         }

    }
</script>

<style  lang="less">
  @import "../../common/less/rem";
  @import "../../common/less/blend";
  .slides{
    background: #fff;
    padding-top: .5rem;
    padding-bottom: .3rem;
    width:3000/@rem;
    .clearfix();
    .slide{
      width:279.984/@rem;
      height:413.969/@rem;
      margin-left: .4rem;
      float: left;
      img{
        width:279.984/@rem;
        height:279.984/@rem;
        margin-bottom: 20/@rem;
        vertical-align: top;
        background: #f4f4f4;;
      }
      .text1{
        font-size: 27.9997/@rem;
        color:#333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .text2{
        font-size: 24/@rem;
        color:#7f7f7f;
        margin-top: 14/@rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .text3{
        font-size: 27.9998/@rem;
        color:#b4282d;
      }
    }
  }

</style>
