import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import App from './App.vue'
import {routes} from './routes';


Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'http://3.22.43.19:8080/'; //insert root URL here

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
