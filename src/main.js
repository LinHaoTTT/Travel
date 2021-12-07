import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/border.css'
import 'styles/reset.css'

import  VueAwesomeSwiper  from  'vue-awesome-swiper'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
//路由就是根据网址的不同，返回不同的内容给用户
