import {
  RECEIVE_HEADER,
  RECEIVE_FOCUSLIST,
  RECEIVE_TAGLIST,
  RECEIVE_NEWITEMLISTS,
 RECEIVE_EWITEMLISTS2,
  RECEIVE_REQFLASHSALEINDEXVO,
  RECEIVE_REQTOPICLISTS,
  RECEIVE_TOPICLISTS,
  RECEIVE_CATEGORYS,
  RECEIVE_BANNERS,
  RECEIVE_COLUMN,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEEN,
  RECEIVE_GETFINDMORE,
  RECEIVE_YZM
} from './mutation-types'
import {
  reqHeadCateList,
  reqFocusList,
  reqTagList,
  reqnewitemlists,
  reqnewitemlists2,
  reqflashSaleIndexVO,
  reqtopicLists,
  reqcateList,
  reqcategoryData,
  reqbanners,
  reqcolumn,
  reqrecommend,
  reqtenfifteen,
  reqfindMore,
  reqyzm
} from '../api'

export default {
 // 异步获取头部导航信息action
  async getHeaderNav ({commit}) {
    let result = await reqHeadCateList()
    if(result.code === 0){
     const headerList = result.data
      commit(RECEIVE_HEADER, {headerList})
    }
  },
// 异步获取首页活动列表action
  async getFocusList ({commit}) {
    let result = await reqFocusList()
    if(result.code === 0){
      const focusList = result.data
      commit(RECEIVE_FOCUSLIST, {focusList})
    }
  },
  // 异步获取首页品牌列表action
  async getTagList ({commit}) {
    let result = await reqTagList()
    if(result.code === 0){
      const tagList = result.data
      commit(RECEIVE_TAGLIST, {tagList})
    }
  },
  //异步获取首页新品首发列表action
  async getnewitemlists ({commit}) {
    let result = await reqnewitemlists()
    if(result.code === 0){
      const newitemlists = result.data
      commit(RECEIVE_NEWITEMLISTS, {newitemlists})
    }
  },
  //异步获取首页人气推荐列表action
  async getnewitemlists2 ({commit}) {
    let result = await reqnewitemlists2()
    if(result.code === 0){
      const newitemlists2 = result.data
      commit(RECEIVE_EWITEMLISTS2, {newitemlists2})
    }
  },
  //异步获取限时购列表action
  async getflashSaleIndexVO ({commit}) {
    let result = await reqflashSaleIndexVO()
    if(result.code === 0){
      const flashSaleIndexVO = result.data
      commit(RECEIVE_REQFLASHSALEINDEXVO, {flashSaleIndexVO})
    }
  },
  //异步获取专题精选action
  async gettopicLists ({commit}) {
    let result = await reqtopicLists()
    if(result.code === 0){
      const topicLists = result.data
      commit(RECEIVE_REQTOPICLISTS, {topicLists})
    }
  },
//异步居家好物action
  async getcateList ({commit}) {
    let result = await reqcateList()
    if(result.code === 0){
      const cateList = result.data
      commit(RECEIVE_TOPICLISTS, {cateList})
    }
  },
//异步分类action
  async getcategorys ({commit}) {
    let result = await reqcategoryData()
    if(result.code === 0){

      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
//识物action
  async getbanners ({commit}) {
  let result = await reqbanners()
  if(result.code === 0){
    const banners = result.data
    commit(RECEIVE_BANNERS, {banners})
  }
},
//识物下边action
  async getcolumn ({commit}) {
    let result = await reqcolumn()
    if(result.code === 0){
      const column = result.data
      commit(RECEIVE_COLUMN, {column})
    }
  },
  //识物为你推荐action
  async getrecommend ({commit}) {
    let result = await reqrecommend()
    if(result.code === 0){
      const recommend = result.data
      commit(RECEIVE_RECOMMEND, {recommend})
    }
  },
  //十点一刻
  async  gettenfifteen ({commit}) {
    let result = await reqtenfifteen()
    if(result.code === 0){
      const tenfifteen = result.data
      commit(RECEIVE_TENFIFTEEN, {tenfifteen})
    }
  },
  //更多精彩
  async  getfindMore ({commit}) {
    let result = await reqfindMore()
    if(result.code === 0){
      const findMore = result.data
      commit(RECEIVE_GETFINDMORE, {findMore})
    }
  },
//yzm
async  getyzm ({commit}) {
  let result = await reqyzm()
  if(result.code === 0){
    const yzm = result.data
    commit(RECEIVE_YZM, {yzm})
  }
},
}
