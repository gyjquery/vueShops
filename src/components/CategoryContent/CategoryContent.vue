<template>
  <div class="categorycontent">
       <div class="navImg"><img src="http://yanxuan.nosdn.127.net/4068e8f7e4907c4dbced3b14c3af5091.jpg"/></div>
       <div class="text"><span></span>推荐专区分类<span></span></div>
       <ul>
         <li v-for="(item,index) in 10">
           <img src="http://yanxuan.nosdn.127.net/9b641e20dd9482da1428e37fb9a1a4ed.png?imageView&quality=85&thumbnail=144x144"/>
           <div class="categoryText">服装夏季专享</div>
         </li>
       </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
    export default {
    mounted () {
//      自定义滚动条
      new BScroll('.categorycontent' ,{
        bounce: true,
        momentumLimitDistance: 1,
        scrollY: true,
        scrollbar: {
          fade: true,
          interactive: false,
        },
      })
    }
    }
</script>

<style scoped lang="less">
  @import '../../common/less/rem';
   .categorycontent{
     height:100%;
     border:1px solid #f4f4f4;
     overflow: hidden;
     width:528/@rem;
     padding:30/@rem 30/@rem 21/@rem 30/@rem;
     .navImg{
       img{
         width:528/@rem;
         height:192/@rem;
       }
     }
      .text{
         font-size: 24/@rem;
        color: #333;
        text-align: center;
        margin-top: .4rem;
        span{
          display: inline-block;
          width:.6rem;
          height:2px;
          background: #eee;
          margin-bottom: .07rem;
          margin: .1rem;

        }
      }
     ul{
       display: flex;
       flex-wrap: wrap;
       li{
         width:144/@rem;
         height:216/@rem;
         font-size: 0;
         margin-right: 34/@rem;
         img{
           width:144/@rem;
           height:144/@rem;
           border-radius: 50%;
         }
         .categoryText{
           color: #333;
           font-size: 24/@rem;
         }
       }
       li:nth-child(3n){
         margin-right: 0;
       }
     }
   }
</style>
