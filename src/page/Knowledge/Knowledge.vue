<template>
  <div class="Knowledge">
    <header>
      <div class="icon"><i class="iconfont icon-shouye"></i></div>
      <div class="wytext">网易严选</div>
      <div class="icon"><i class="iconfont icon-fangdajing"></i><i class="iconfont icon-icon"></i></div>
    </header>
    <div class="mainContent">
    <div class="mainCon">
      <div class="bannerswiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="index in 3">
              <img src="//yanxuan.nosdn.127.net/4c5bacd7db1c4777e1a6651240899077.jpg?imageView&quality=75"/>
            </div>
          </div>
        </div>
      </div>
      <div class="imgScrollX">
        <div class="slides">
          <div class="slide" v-for="index in 9">
            <div class="imgCon">
              <p>320篇文章</p>
            </div>
            <div class="text1">严选推荐</div>
          </div>
        </div>
      </div>
      <Lines/>
      <KnowledgeCard v-for="(item,index) in 2" :key="index"/>
      <Lines/>
      <div class="scrollDog">
        <header>十点一刻</header>
       <div class="single">
         <div class="singledogs">
           <div class="singledog" v-for="(item,index) in 3">
             <div>--今日话题--</div>
             <div>关于单身</div>
             <div>聊聊单身的好处</div>
             <div class="images">
               <img src="//yanxuan.nosdn.127.net/bb760f20a48b19d3d4979962c865cb56?imageView&thumbnail=48y48" alt="">
               <img src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt="">
               <img src="http://nos.netease.com/yanxuan/8945ae63d940cc42406c3f67019c5cb6.png?imageView&thumbnail=48y48" alt="">
               <span class="ellipsis"></span>
               <span>525人参与会话</span>
             </div>
           </div>
           <div class="singledog newsingledog">
            <span>查看全部话题</span> <i class="iconfont icon-icon--"></i>
           </div>
         </div>
       </div>
      </div>
      <Lines/>
      <KnowledgeCard/>
      <Lines/>
      <div class="video">
         <header>严选LOOK</header>
         <div>
           <video src="http://yanxuan.nosdn.127.net/yx-topic-1531997741819r9mv9q0g.jpg"></video>
          </div>
        <div>
          <p><img src="//yanxuan.nosdn.127.net/be23f31e86d9db771072eb33f60fb067.png?imageView&quality=75&thumbnail=48y48" alt=""><span>选妹</span></p>
          <p>唤自然系列</p>
        </div>
      </div>
      <div class="more">
        更多精彩
      </div>
      <KnowleWonderful v-for="(item,index) in 9" :key="index+'1'"/>
    </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import KnowledgeCard from '../../components/KnowledgeCard/KnowledgeCard.vue'
  import Lines from '../../components/Lines/Lines.vue'
  import KnowleWonderful from '../../components/KnowleWonderful/KnowleWonderful.vue'
  export default {
      mounted () {
       new Swiper ('.swiper-container', {
          loop: true,
         slidesPerView: 'auto',
       })

        new BScroll('.imgScrollX',{
          bounce: true,
          momentumLimitDistance: 1,
          scrollX: true,
          scrollY: false

        })
//   自定义滚动条
        new BScroll('.mainContent',{
          bounce: true,
          momentumLimitDistance: 1,
          scrollY: true,
          scrollbar: {
            fade: true,
            interactive: false,
          },
          mouseWheel: true

        })
        new BScroll('.single',{
          bounce: true,
          momentumLimitDistance: 1,
          scrollX: true


        })
      },
     components:{
       KnowledgeCard,
       Lines,
       KnowleWonderful
     }
    }
</script>

<style scoped lang="less">
   @import '../../common/less/rem';
   @import '../../common/less/blend';
   .Knowledge{
     height:100%;
     color: #333;
     background: #ccc;
     overflow: hidden;
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
     .mainContent{
       height:85%;
       overflow: hidden;
       background: #fff;
        .mainCon{

        }
        .bannerswiper{
         width:100%;
         height:384.984/@rem;
         padding:24/@rem 0;
         .swiper-container{
           width:10rem;
           padding-left: .2rem;
           .swiper-wrapper{
             .swiper-slide{
               width:670.031/@rem;
               height:384.984/@rem;
               margin-left: 10px;
               img{
                 width:100%;
               }
             }
           }

         }
       }
        .imgScrollX{
         width: 690/@rem;
         height:225.984/@rem;
         margin:32/@rem 30/@rem 48/@rem 30/@rem;
         .slides{
           width:3000/@rem;
            .slide{
              display: inline-block;
              margin-right: 24/@rem;
              width:164/@rem;
              height:210/@rem;
              .imgCon{
                width:161/@rem;
                height:161/@rem;
                background: url("//yanxuan.nosdn.127.net/254e04f823354c67d765d68c4012b64e.png?imageView&quality=75");
                background-size: 100% 100%;
                margin-bottom: 22/@rem;
                border-radius: .1rem;
                p{
                  color:#fff;
                  font-size: 24/@rem;
                  text-align: right;
                  padding-right: .2rem;
                }
              }
              .text1{
                font-size: 24/@rem;
                color:#333;
                text-align: center;

              }
            }
         }
       }
        .scrollDog{
          background: #fff;
          width:690/@rem;
          height:530/@rem;
          padding:0 30/@rem 40/@rem 30/@rem;
          margin-bottom: 20/@rem;

          &>header{
            text-align: center;
            background: #fff;
            width:100%;
            height:120/@rem;
            color: #333;
            font-size:32.0003/@rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .singledogs{
            width:690/@rem;
            height:531/@rem;
            width:3000/@rem;
            .singledog{
              background: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png");
              width:500/@rem;
              height:294/@rem;
              padding:38/@rem 40/@rem 79/@rem 40/@rem;
              background-size: 100% 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
             float: left;
              margin-right: .4rem;

              div:first-child{
                color:#7f7f7f;
                font-size: 24/@rem;
                margin-top: .4rem;
                margin-bottom: .3rem;
              }
              div:nth-child(2){
                color: #333;
                font-size: 36/@rem;
                margin-bottom: .3rem;
                font-weight: bold;
              }
              div:last-child{
                color:#333;
                font-size: 24/@rem;
              margin-top: .3rem;
               img{
                 width:48/@rem;
                 height:48/@rem;
                 border-radius: 50%;
               }
                .ellipsis{
                  display: inline-block;
                  width:48/@rem;
                  height:48/@rem;
                  border-radius: 50%;
                  background: #eee;
                }
              }
            }
            .newsingledog{
              display: flex;
              flex-direction: row;
              justify-content: center;
              color: #7f7f7f;
            }
          }
        }
        .video{
          background: #fff;
          width:100%;
          color: #333;
          font-size: 32.0003/@rem;
          header{
            height:120/@rem;
            background: #fff;
            text-align: center;
            line-height:120/@rem;
            display: flex;
            justify-content: center;
          }
         video{
           width:100%;
         }
          img{
            width:46/@rem;
            height:46@rem;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: .3rem;
          }
          p{
            margin-left: .3rem;
            margin-right: .3rem;
          }
          p:last-child{
            color: #7f7f7f;
            font-size:27.9998/@rem;
          }
        }
        .more{
          color:#333;
          font-size: 27.9998/@rem;
          text-align: center;
          height:140/@rem;
          line-height:140/@rem;
          background: #eee;
        }
     }


   }
</style>
