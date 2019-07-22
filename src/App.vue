<template>
    <div>
        <component v-if="!isShowHello" :is="componentToShow"/>
    </div>
</template>

<script>

    import CounterGroup from './components/CountGroup.vue'
    import HelloWorld from "./components/HelloWorld";

    import Router from './Router'

    export default {
        name: "app",
        data: function () {
            return {
                message: 0,
                componentToShow: new Router([
                    {path: '/', component: CounterGroup},
                    {path: "/hello", component: HelloWorld}
                ]).componentToShow
            };
        },
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
