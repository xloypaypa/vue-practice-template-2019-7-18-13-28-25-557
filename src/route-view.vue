<template>
    <div>
        <component :is="componentToShow"/>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "route-view",
        data: function () {
            return {
                componentToShow: Vue.router.componentToShow
            };
        },
    }
</script>

<style scoped>

</style>