import Vue from 'vue'
import Router from 'vue-router'
import FirstShow from '../page/FirstShow/FirstShow.vue'
import Knowledge from '../page/Knowledge/Knowledge.vue'
import Personal from '../page/Personal/Personal.vue'
import HomePage from '../page/HomePage/HomePage.vue'
import Shop from '../page/Shop/Shop.vue'
import Category from '../page/Category/Category.vue'
import HomeNavContent from '../page/HomePage/HomeNavContent/HomeNavContent.vue'
import HomeNavPublic from '../page/HomePage/HomeNavPublic/HomeNavPublic.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/firstshow',
      component: FirstShow
    },
    {
      path: '/homepage',
      component: HomePage,
      meta:{
        isShow:true
      },
      children: [
        {
          path: '/homepage/homenavcontent/:id',
          component: HomeNavContent,
          meta:{
            isShow:true
          }
        },
        {
         path: '/homepage/homenavpublic/:id',
         component: HomeNavPublic,
          meta:{
            isShow:true
          }
        },
        {
          path: '',
          redirect: '/homepage/homenavcontent/1'

        }
         ]
    },
    {
      path: '/knowledge',
      component: Knowledge,
      meta:{
        isShow:true
      }
    },
    {
      path: '/personal',
      component: Personal,
      // meta:{
      //   isShow:true
      // }
    },
    {
      path: '/shop',
      component: Shop,
      meta:{
        isShow:true
      }
    },
    {
      path: '/category',
      component: Category,
      meta:{
        isShow:true
      }
    },{
      path: '/',
      redirect: '/firstshow'

    }
  ]
})

