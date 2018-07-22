<template>
  <div>
    <div class="knowledgeCard">
      <div class="texttop">为你推荐</div>
      <div class="knowimage"><span>严选推荐</span></div>
      <div class="introduce">
        <p><span>选择一种风格，选择一种人生</span><span>9.6元起</span></p>
        <p>ins风.北京风，ins风.北京风，ins风.北京风</p>
      </div>
    </div>
    <div class="recommend" v-for="index in 2" :key="index">
      <div class="recleft">
        <p><img src="//yanxuan.nosdn.127.net/2775332d3490abdb5bfe867c64d1c2e4.png?imageView&quality=75&thumbnail=48y48""/><span>丁磊</span></p>
        <p>这款邮寄茶叶饮料</p>
        <p>云翠龙井有机茶叶饮料限时69.8元</p>
      </div>
      <div class="recright"><span>丁磊好货推荐</span></div>
    </div>
  </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="less">
  @import '../../common/less/rem';
 .knowledgeCard{
   margin-top: .3rem;
   display: flex;
   flex-direction:column;
   align-items: center;
    .texttop{
      width:690/@rem;
      height:120/@rem;
      font-size: 32/@rem;
     text-align: center;
      line-height:120/@rem;
    }
   .knowimage{
     width:688/@rem;
     height:386/@rem;
     background:url("//yanxuan.nosdn.127.net/796f47698fe5f4f8a8e1836d294f15c3.jpg?imageView&quality=75");
     background-size:100% 100%;
     color: #333;
   }
   .introduce{
     padding:24/@rem 20/@rem 67/@rem 20/@rem;
     font-size: 36/@rem;
     width:648/@rem;
     height:94.984/@rem;
     border:1px solid #eee;
     p:last-child{
       font-size:27.999/@rem;
       color: #7f7f7f;
       margin-top: .1rem;
     }
   }
 }
  .recommend{
    width:688/@rem;
    height:271/@rem;
    border:1px solid #ececec;
    margin: 0 auto;
    margin-top: .5rem;
    display: flex;
   margin-bottom: .5rem;
    .recleft{
      width:358.061/@rem;
      height:272/@rem;
      padding:0 30/@rem 0 20/@rem;


      p{
       img{
         width:46/@rem;
         border-radius: 50%;
         vertical-align: middle;
       }
      }
      p:first-child{
         font-size: 20/@rem;
        margin-top: .8rem;
      }
      p:nth-child(2){
        font-size: 32/@rem;
        color: #333;
        margin-top: .3rem;
      }
      p:last-child{
        font-size: 24/@rem;
        color: #7f7f7f;
        margin-top: .3rem;
      }
    }
    .recright{
      width:279.984/@rem;
      height:272/@rem;
       background: url("//yanxuan.nosdn.127.net/f8c462f078d259736ce2f9584df487b6.jpg");
      background-size:100% 100% ;
      span{
        display: inline-block;
        background: #fff;
        border-radius: .3rem;
        font-size: 24/@rem;
        width:167/@rem;
        height:34/@rem;
        margin-left: .3rem;
        text-align: center;
      }
    }
  }
</style>
