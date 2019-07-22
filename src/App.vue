<template>
    <div>
        <CounterGroup v-if="!isShowHello"/>
        <HelloWorld v-if="isShowHello"/>
    </div>
</template>

<script>

    import CounterGroup from './components/CountGroup.vue'
    import HelloWorld from "./components/HelloWorld";

    export default {
        name: "app",
        data: function () {
            return {
                message: 0,
                isShowHello: window.location.pathname === '/hello',
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
