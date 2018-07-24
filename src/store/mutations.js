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

export default {
   [RECEIVE_HEADER] (state, {headerList}) {
     state.headerList = headerList
  },

  [RECEIVE_FOCUSLIST] (state, {focusList}) {
    state.focusList = focusList
  },

  [RECEIVE_TAGLIST] (state, {tagList}) {
    state.tagList = tagList
  },

  [RECEIVE_NEWITEMLISTS](state,{newitemlists}){
    state.newitemlists = newitemlists
  },

  [RECEIVE_EWITEMLISTS2](state,{newitemlists2}){
    state.newitemlists2 = newitemlists2
  },

  [RECEIVE_REQFLASHSALEINDEXVO](state,{flashSaleIndexVO}){
    state.flashSaleIndexVO = flashSaleIndexVO
  },

  [RECEIVE_REQTOPICLISTS](state,{topicLists}){
    state.topicLists = topicLists
  },

  [RECEIVE_TOPICLISTS](state,{cateList}){
    state.cateLists = cateList
  },

  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  },

  [RECEIVE_BANNERS](state,{banners}){
    state.banners = banners
  },

  [RECEIVE_COLUMN](state,{column}){
    state.columns = column
  },

  [RECEIVE_RECOMMEND](state,{recommend}){
    state.recommend = recommend
  },

 [RECEIVE_TENFIFTEEN](state,{tenfifteen}){
   state.tenfifteen = tenfifteen
 },

  [RECEIVE_GETFINDMORE](state,{findMore}){
    state.findMores = findMore
  },
  [RECEIVE_YZM](state,{yzm}){
  state.yzmNow = yzm
},
}
