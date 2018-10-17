import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

require('./mock/mock.js');

import App from './App.vue';
import router from './router';

Vue.use(ElementUI);

Vue.config.productionTip = false

/*
* v-has
*/

Vue.directive('has', {
  bind: function(el, binding) {
    if (!Vue.prototype.$_has(binding.value)) {
      el.parentNode.removeChild(el);
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

