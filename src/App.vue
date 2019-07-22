<template>
    <div>
        <component v-if="!isShowHello" :is="CounterGroup"/>
        <component v-if="isShowHello" :is="HelloWorld"/>
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
                isShowHello: new Router('/hello').isMatch,
                HelloWorld,
                CounterGroup
            };
        },
        components: {
            HelloWorld,
            CounterGroup
        }
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
