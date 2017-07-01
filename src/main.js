import Vue from 'vue';
import App from './App';
import store from './store';
import { LOCAL_STORAGE } from './utilities';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
});

if (!localStorage[LOCAL_STORAGE]) {
  localStorage[LOCAL_STORAGE] = JSON.stringify({});
}
