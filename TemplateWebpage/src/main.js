import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'


Vue.use(VueResource);
Vue.use(VueRouter);

//Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'

//Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://3.22.43.19:8080/'
// Vue.http.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// Vue.http.headers.common['Accept'] = 'application/json, text/plain, */*'
// Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'


Vue.http.options.root = 'http://3.22.43.19:8080/'; //insert root URL here

new Vue({
  el: '#app',
  render: h => h(App)
})
