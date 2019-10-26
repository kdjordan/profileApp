import Vue from 'vue'
import App from './App.vue'
import 'vue-material-design-icons/styles.css';
import store from './store/store';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
