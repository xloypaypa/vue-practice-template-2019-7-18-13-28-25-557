<template>
<div id="app">
<p>{{count}}</p>
  <button v-on:click="count++">点我+</button>
      <button v-on:click="count--">点我-</button>
      </div>
</template>

<script>

export default {
  name: 'app',
  data: function(){
    return {
      count:0
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
