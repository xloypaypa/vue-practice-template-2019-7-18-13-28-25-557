import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from "./components/HelloWorld";
import CountGroup from "./components/CountGroup";
import Cool from "./components/Cool";
import Super from "./components/Super";

Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/hello',
            component: HelloWorld,
            children: [
                {
                    path: 'cool',
                    component: Cool
                },
                {
                    path: 'super',
                    component: Super
                }
            ]
        },
        {
            path: '/',
            component: CountGroup
        }
    ]
});

new Vue({
    render: h => h(App),
    router // <= don't forget this one
}).$mount('#app')
