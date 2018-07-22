<template>
 <div class="footer">
   <div @click="goto('/homepage')" :class="{active: $route.path.slice(0,9)==='/homepage'}">
     <p>
       <i class="iconfont icon-shouye"></i>
     </p>
     <span>首页</span>
   </div>
   <div  @click="goto('/knowledge')" :class="{active: $route.path==='/knowledge'}">
     <p>
       <i class="iconfont icon-bd-"></i>
     </p>
     <span>识物</span>
   </div>
   <div @click="goto('/category')" :class="{active: $route.path==='/category'}">
     <p>
       <i class="iconfont icon-iconyihuifu-"></i>
     </p>
     <span>分类</span>
   </div>
   <div @click="goto('/shop')" :class="{active: $route.path==='/shop'}">
     <p >
       <i class="iconfont icon-icon"></i>
     </p>
     <span>购物车</span>
   </div>
   <div @click="goto('/personal')" :class="{active: $route.path==='/personal'}">
     <p >
       <i class="iconfont icon-geren"></i>
     </p>
     <span>个人</span>
   </div>
 </div>
</template>

<script>
  import PubSub from 'pubsub-js'
    export default {
      methods: {
        goto (path) {
           this.$router.replace(path);
           if(path==='/homepage'){
            PubSub.publish('activeIndex',0)

           }
        }
      }
    }
</script>

<style  lang="less">
  @import "../../common/less/rem";
 .footer{
   position: absolute;
   width:100%;
   bottom: 0;
   display: flex;
   justify-content: space-around;
   background: #fff;

   &>div{
     margin-bottom: .15rem;
     p{
      text-align: center;
       i{
        font-size: 48/@rem;
         color: #666;
       }
    }
     span{
       display: block;
       color: #666;
       text-align: center;
       font-size: 24/@rem;
       margin-top: 2/@rem;
     }

   }
   &>.active{
     p{
       i{
         color:#b4282d ;
       }
     }
     span{
       color:#b4282d ;
     }

   }
 }
</style>
