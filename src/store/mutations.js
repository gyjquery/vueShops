import {
  RECEIVE_HEADER,
  RECEIVE_FOCUSLIST,
  RECEIVE_TAGLIST,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_EWITEMLISTS2,
  RECEIVE_REQFLASHSALEINDEXVO,
  RECEIVE_REQTOPICLISTS,
  RECEIVE_TOPICLISTS
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
}
