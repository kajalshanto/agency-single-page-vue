import Vue from 'vue'
import App from './App.vue'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'

import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll)

// global.jQuery = require('jquery');
// var $ = global.jQuery;
// window.$ = $;

//var $ = require('jquery')
//import './assets/js/script.js'
//import $ from 'jquery'
//window.$ = window.jQuery = require('jquery')



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')