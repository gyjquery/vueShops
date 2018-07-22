<template>
  <div class="container">
    <div><img src="http://yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" class="headerImg"/></div>
    <div><img src="http://yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg"></img></div>
    <div class="con">
      <img src="http://yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg"/>
      <p class="download"></p>
      <p class="continue" @click="toHome"></p>
    </div>
  </div>
</template>

<script>
    export default {
      methods: {
        toHome () {
          this.$router.replace('/homepage')
        }
      }
    }
</script>

<style scoped lang="less">
 @import '../../common/less/rem';
 .container{
   height:100%;
   background: #eee;
   div{
     img{
      width:750/@rem;
      vertical-align: top;
    }
  }
   .con{
     position: relative;
     .download{
       width:432/@rem;
       height:98/@rem;
       position: absolute;
       left: 144/@rem;
       top: 97/@rem;
     }
     .continue{
       position: absolute;
       top:231/@rem;
       left:236/@rem;
       width:254/@rem;
       height:30/@rem;
     }
   }

 }
</style>
