<template>
    <div>
        <component :is="componentToShow"/>
    </div>
</template>

<script>
    import CounterGroup from './components/CountGroup.vue'
    import HelloWorld from "./components/HelloWorld";

    import Router from './Router'

    export default {
        name: "route-view",
        data: function () {
            return {
                componentToShow: new Router([
                    {path: '/', component: CounterGroup},
                    {path: "/hello", component: HelloWorld}
                ]).componentToShow
            };
        },
    }
</script>

<style scoped>

</style>