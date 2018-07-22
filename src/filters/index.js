import Vue from 'vue'
import moment from 'moment'

// 定义一个自定义过滤器
Vue.filter('date-format', function (value, format='YYYY-MM-DD HH:mm:ss') {

  return moment(value).format(format)
})
