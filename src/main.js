import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import CounterGroup from './components/CountGroup.vue'
import HelloWorld from "./components/HelloWorld";
import Router from './Router'
const router = new Router([
  {path: '/', component: CounterGroup},
  {path: "/hello", component: HelloWorld}
]);

Vue.router = router;

new Vue({
  render: h => h(App),
}).$mount('#app')
