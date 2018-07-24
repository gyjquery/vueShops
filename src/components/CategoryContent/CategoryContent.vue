<template>
  <div class="categorycontent">
       <div class="navImg"><img :src="category.bannerUrl"/></div>
       <div class="text"><span></span>推荐专区分类<span></span></div>
       <ul>
         <li v-for="(item,index) in category.subCateList">
           <img :src="item.bannerUrl ||item.wapBannerUrl "/>
           <div class="categoryText">{{item.name}}</div>
         </li>
       </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import PubSub from 'pubsub-js'
  import {mapState} from 'vuex'
    export default {
    data () {
      return{
        category:[]
      }
    },
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
   //  接收左侧导航的数据
      PubSub.subscribe('sendCategory',(msg,category)=>{
        console.log(category)
        this.category=category
      })
    },
      beforeDestroy(){
//       取消订阅  防止切换路由  导致重复订阅
        PubSub.unsubscribe('sendCategory')
      },
      methods:{

      },
      computed:{
        ...mapState(['categorys'])

      },
      watch:{
        categorys(){
           this.category =this.categorys[0]
        }
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
           overflow: hidden;
           text-overflow:ellipsis;
           white-space: nowrap;
           text-align: center;
         }
       }
       li:nth-child(3n){
         margin-right: 0;
       }
     }
   }
</style>
