<template>
  <div class="wrapper nav">
    <ul>
      <li  @click="toNavCon(index)" v-for="(header,index) in headerList" :key="index">
       <span :class="{textColor:activeIndex===index}">{{header.name}}</span>
       <span :class="{line:activeIndex===index}"></span>
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
          activeIndex: 0
        }
      },
      computed:{
        ...mapState(['headerList']),
      },
      mounted () {
//        轮播
        new BScroll('.wrapper',{
          scrollX: true,
          click:true
        })

        PubSub.subscribe('activeIndex',(msg,activeIndex)=>{
          console.log(activeIndex)
           this.activeIndex = activeIndex
        })
        this.$store.dispatch('getHeaderNav')

      },
      beforeDestroy(){
//       取消订阅  防止切换路由  导致重复订阅
        PubSub.unsubscribe('activeIndex')
      },
      updated(){
        const index =this.activeIndex;
        localStorage.setItem("setActiveId",index)
      },
      beforeMount(){
          const nowIndex = localStorage.getItem("setActiveId")
          this.activeIndex=parseInt(nowIndex)

      },

      methods: {
      toNavCon (index) {
//        console.log(index)
        if(index===0){
          this.$router.replace(`/homepage/homenavcontent/${index}`)

        }else{
          this.$router.replace(`/homepage/homenavpublic/${index}`)
        }
        this.activeIndex = index
      }
    }
    }
</script>

<style scoped lang="less">
  @import '../../common/less/rem';
 .nav{
   overflow: hidden;
   width: 750/@rem;
   ul{
     display: flex;
     padding: 0 30/@rem;
     width:20rem;

     li{
       color:#333;
       white-space: nowrap;
       padding:0 16/@rem;
       font-size:27.998/@rem;
       margin-left: 48/@rem;
       width:55.954/@rem;
       height:60/@rem;
       line-height:60/@rem ;
       position: relative;
       .line{
         display: block;
         width:87.953/@rem;
         height:3.984/@rem;
         background: #b4282d;
         position: absolute;
         bottom:0;
         left:0;
       }
       .textColor{
         color: #b4282d;
       }
     }
     li:first-child{
       margin-left: 0;

     }

   }
 }
</style>
