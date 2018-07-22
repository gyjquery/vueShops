<template>
  <div class="main">
    <router-view/>
    <Footer v-if="$route" v-show="$route.meta.isShow"/>
  </div>
</template>
<script>
  import Footer from './components/Footer/Footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  },
  mounted () {
    //dispath分发action  更新数据
    this.$store.dispatch('getFocusList')
    this.$store.dispatch('getTagList')
    this.$store.dispatch('getnewitemlists')
    this.$store.dispatch('getnewitemlists2')
    this.$store.dispatch('getflashSaleIndexVO')
    this.$store.dispatch('gettopicLists')
    this.$store.dispatch('getcateList')
  }
}
</script>

<style lang="less" scoped>
  .main{
    height:100%;
  }
</style>
