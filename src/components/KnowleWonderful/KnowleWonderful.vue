<template>
   <div class="knowlewonderful">
       <div><img src="//yanxuan.nosdn.127.net/9b23a51f7833e95f3ce905975e639c5e.jpg?imageView&quality=75"/></div>
       <div>简美家具首款首发</div>
   </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="less">
  @import '../../common/less/rem';
      .knowlewonderful{
        width:642/@rem;
        height:449/@rem;
        padding:24/@rem;
        margin-bottom: 30/@rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        div:first-child{
          width:642/@rem;
          height:360/@rem;
          margin-left: .6rem;
          img{
            width:100%;
            height:100%;
          }
        }
        div:last-child{
          width:642/@rem;
          height:32.984/@rem;
          padding: 29/@rem 0 28/@rem;
          font-size:27.9998/@rem;
          color:#333;
        }
      }
</style>
