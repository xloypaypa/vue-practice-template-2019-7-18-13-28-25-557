<template>
<div>
<center>总&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数：<input type="text" v-model="sum" style="margin-top:10px"></center>
</div>
</template>
 
<script>
export default {
 name: "countGroup",
 data: function() {
 return {
 countNumber: 0
 };
 },
  props: {sum:{default:0}}
 
};
</script>