<template>
  <div class="categorylist">
     <ul>
       <li :class="{activeLi:activeIndex===index}" v-for="(category,index) in categorys" @click="setcategory({category,index})"  :key="index">{{category.name}}</li>
     </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import PubSub from 'pubsub-js'
    export default {
    data(){
      return{
        activeIndex:0
      }
    },
    methods:{
        setcategory ({category,index}) {
          PubSub.publish('sendCategory',category)
          this.activeIndex=index;
        }
      },
    computed:{
      ...mapState(['categorys'])
    },
    mounted () {

    },
      watch:{
        categorys () {
          this.$nextTick(()=>{
            //      自定义滚动条
            new BScroll('.categorylist' ,{
              bounce: true,
              momentumLimitDistance: 1,
              scrollY: true,
              click:true
            })
          })
        }
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
       .activeLi{
         border-left:5px solid #ab2b2b;
         font-size:36/@rem;
         color: #ab2b2b;
       }
     }
   }
</style>
