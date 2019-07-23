<template>
    <div>
        <CounterGroup></CounterGroup>
        <h1>{{$store.getters.getCoooool()}}</h1>
    </div>
</template>

<script>

    import CounterGroup from './components/CountGroup.vue'

    export default {
        name: "app",
        data: function () {
            return {
                message: 0
            };
        },
        components: {
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
