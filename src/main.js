import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        coooool: 7,
    },
    getters: {
        getCoooool: (state) => () => {
            return state.coooool - (state.coooool % 5);
        }
    }

});

new Vue({
    render: h => h(App),
    store
}).$mount('#app')
