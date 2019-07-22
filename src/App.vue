<template>
    <div>
        <route-view/>
    </div>
</template>

<script>

    import RouteView from "./route-view";
    export default {
        name: "app",
        components: {RouteView}
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
