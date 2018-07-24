<template>
  <div class="personal">
    <header>
      <div class="icon" @click="toHome"><i class="iconfont icon-shouye"></i></div>
      <div class="wytext">网易严选</div>
      <div class="icon" @click="toShop"><i class="iconfont icon-fangdajing"></i><i class="iconfont icon-icon"></i></div>
    </header>
    <div class="loginIn"  v-if="isShow===1">
      <div class="fle">
        <div class="logoWrap"><img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"></div>
        <div class="phoneLogin" @click="toPhoneLogin"><i class="iconfont icon-smartphone"/><span>手机号码登录</span></div>
        <div class="emailLogin" @click="toEmailLogin"><i class="iconfont icon-youxiang"/><span>邮箱账号登录</span></div>
        <div class="rec">手机号快速注册 ></div>
      </div>
      <div class="foot"><span><i class="iconfont icon-weixin"></i>微信</span>|<span><i class="iconfont icon-qq"></i>QQ</span>|<span> <i class="iconfont icon-weibo"></i>微博</span></div>
    </div>
    <div class="phoneLoginIn" v-if="isShow===2">
       <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
       <div class="phonenum"><input type="text" maxlength="11" ref="ph" placeholder="请输入手机号" v-model="phonecontent" @click="writePhone"/></div>
       <div class="yzm"><input type="text" @click="hander" maxlength="4" placeholder="请输入短信验证码" v-model="writeyzm"/><span @click="getYzm" :class="{yzmColor:!yzm}">{{yzm?"获取验证码":`已发送${timer}秒`}}</span></div>
       <span v-if="isNow" class="error">{{isRight?"手机号错误":"验证码错误"}}</span>
      <div class="acc"><span>遇到的问题?</span><span>使用密码验证登录</span></div>
      <div class="Loginpshone" @click="Loginpshone">登录</div>
      <div class="other" @click="otherLogin">其他账号登录</div>
      <div class="zhuce">注册账号</div>
    </div>
    <div class="phoneLoginIn" v-if="isShow===3">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
      <div class="phonenum"><input type="text" placeholder="邮箱账号"/></div>
      <div class="yzm"><input type="text" placeholder="密码" style="width:100%"/></div>
      <div class="acc"><span>注册账号</span><span>忘记密码</span></div>
      <div class="Loginpshone">登录</div>
      <div class="other" @click="otherLogin">其他登录方式</div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      data(){
        return{
          isShow:1,
          phonecontent:"",
          isRight:true,
          isNow:false,
          timer:10,
          yzm:true,
          writeyzm:""
        }
      },
      computed:{
        ...mapState(['yzmNow'])
      },
      methods:{
        toPhoneLogin () {
           this.isShow=2
        },
        toEmailLogin(){
          this.isShow=3
        },
        otherLogin(){
          this.isShow=1
        },
        Loginpshone(){
          var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
           if(!myreg.test(this.phonecontent)){
               this.isNow=true
               this.isRight=true
               this.phonecontent=""
           }else if(!this.writeyzm || this.writeyzm.length<4){
             this.isNow=true
             this.isRight=false
           }else if(this.writeyzm===this.yzmNow.yzm){
               console.log("验证码正确")
           }
        },
        writePhone(){
          this.isNow = false

        },
        getYzm(){
 //           防止多次误触
           if(!this.yzm){
               return
           }
          this.$store.dispatch('getyzm')
          setTimeout(()=>{
             console.log(this.yzmNow)
          },300)
          this.yzm=false
          const interval=setInterval(()=>{
            this.timer--
            if(this.timer<=0){
              clearInterval(interval)
               this.timer=10
              this.yzm=true
            }
          },1000)
        },
        hander(){
          this.writeyzm=''
          this.isNow=false
        },
        toHome(){
          this.$router.replace('/homepage')
        },
        toShop(){
          this.$router.replace('/shop')
        }
      }

    }
</script>

<style scoped lang="less">
@import '../../common/less/rem';
.personal{
  height:100%;
  background: #F2F5F4;
  header{
    width:710/@rem;
    height:87.984/@rem;
    padding:0 16/@rem 0 24/@rem;
    background: #FAFAFA;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon{

      i{
        font-size: 55/@rem;
        margin-right: 20/@rem;
      }
      .icon-fangdajing{
      }
    }
    .wytext{
      font-family: "楷体";
      font-weight: bold;
      font-size: 45/@rem;
      padding-left: 30/@rem;
    }
  }
  .logoWrap{
    img{
      width:250/@rem;
      margin-top: 160/@rem;
      margin-bottom: 160/@rem;
    }
  }
  .fle{
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size:25/@rem;
    .phoneLogin{
      width:666/@rem;
      height:88/@rem;
      background:#b4282d;
      color: #fff;
      margin-bottom: .5rem;
      text-align: center;
      line-height: 88/@rem;
      span{
        margin-left: .2rem;
      }
    }
    .emailLogin{
      width:666/@rem;
      height:88/@rem;
      background:#F2F5F4;
      color: #b4282d;
      border:1px solid #b4282d;
      margin-bottom: .5rem;
      text-align: center;
      line-height: 88/@rem;
      span{
        margin-left: .2rem;
      }
    }
    .rec{
      font-size: 24/@rem;
    }
  }
  .foot{
     margin-left:1.1rem;
     position: absolute;
     bottom:.9rem;
     color: #7F7F7F;
     span{
      margin: 0 40/@rem;
       i{
         margin-right: .2rem;
       }
     }
   }
  .phoneLoginIn{
    background: #fff;
    width:100%;
    height:100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    img{
      width:186/@rem;
      height:62/@rem;
      margin: 40/@rem 0 80/@rem 0;
    }
    .phonenum{
      width:670/@rem;
      height:92/@rem;
      line-height: 92/@rem;
      text-align: center;
      border-bottom: 1px solid #eee;
     input{
      width:670/@rem;
       border: none;
       outline: none;
     }
    }
    .yzm{
      width:670/@rem;
      height:92/@rem;
      line-height: 92/@rem;
      text-align: center;
      border-bottom: 1px solid #eee;
      input{
        width:500/@rem;
        border: none;
        outline: none;
      }
      span{
        display: inline-block;
        width:160/@rem;
        height:60/@rem;
        border-radius: .1rem;
        border:1px solid #000;
        line-height:60/@rem;
        font-size: 28/@rem;
      }
      .yzmColor{
        color: #ccc;
        border-color:#ccc;
      }

    }
    .acc{
      width:670/@rem;
      display: flex;
      justify-content: space-between;
      margin-top: .3rem;
      span{
     font-size:12/@rem ;
        color:#666;

      }
    }
    .Loginpshone{
         width:670/@rem;
         height:90/@rem;
         text-align: center;
         line-height: 90/@rem;
         background: #b4282d;
         color: #fff;
        margin: .5rem 0;
      border-radius: .1rem;
       }
    .other{
      width:670/@rem;
      height:90/@rem;
      text-align: center;
      line-height: 90/@rem;
      color: #b4282d;
      margin: .1rem 0 0 0;
      border-radius: .1rem;
      border:1px solid #b4282d;
    }
    .zhuce{
      margin-top: .3rem;
    }
    .error{
      color: red;
      display: block;
      width:100%;
      text-align: left;
      margin-left: 1rem;
    }
  }
}


</style>
