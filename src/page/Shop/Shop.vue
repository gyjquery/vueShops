<template>
  <div class="shop">
    <header><span>购物车</span><span>领劵</span></header>
    <div class="prompt">
      <div><i class="iconfont icon-right-1"></i>30天无忧退货</div>
      <div><i class="iconfont icon-right-1"></i>48小时快速退款</div>
      <div><i class="iconfont icon-right-1"></i>满88元免邮费</div>
    </div>
    <div class="login">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png"/>
      <div>去添加点什么吧</div>
      <button @click="toLogin">登录</button>
    </div>
  </div>
</template>

<script>
    export default {
      methods:{
         toLogin(){
           this.$router.replace('/personal')
         }
      }
    }
</script>

<style scoped lang="less">
   @import '../../common/less/rem';
    .shop{
      background: #f4f4f4;
      height:100%;
      header{
        height:100%;
        height:87.984/@rem;
        padding: 0 30/@rem;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
         span:first-child{
           color:#333;
           font-size: 36/@rem;
         }
        span:last-child{
          color:#B4282D;
          font-size: 30/@rem;
          position: absolute;
          right:.8rem;
          top:.3rem;
        }
      }
      .prompt{
        padding:0 30/@rem;
        height:72/@rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #fff;
        margin-bottom: 10px;
        background: #f4f4f4;
        div{
          color:#333;
          font-size: 24/@rem;
          i{
            color:#b4282d;
            margin-right:8/@rem;
          }
        }
      }
      .login{
        display: flex;
        flex-direction: column;
       align-items: center;
        img{
          width:248/@rem;
          height:248/@rem;
          vertical-align: top;
          margin-top: 4rem;
        }
        div{
          color: #999;
         font-size: 27.9998/@rem;
          margin-bottom: .3rem;
        }
        button{
          background: #b4282d;
          width:480/@rem;
          height:92/@rem;
          line-height: 92/@rem;
          text-align: center;
          border:none;
          color: #fff;
        }
      }
    }
</style>
