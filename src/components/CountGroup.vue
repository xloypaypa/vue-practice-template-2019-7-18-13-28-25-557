<template>
<div>
<center>请输入个数：<input type="text" @input="initElementOfCount(countNumber)" v-model.number="countNumber" placeholder="请输入..."/></center>
<div v-for="(index,item) in countNumber" v-bind:key="item">
<counter @increase="(value)=>getTotal(index,value)" @decrease="(value)=>getTotal(index,value)"></counter>
</div>
<CounterSum :sum="sum"></CounterSum>
</div>

</template>
 
<script>
import counter from "./Count.vue";
import CounterSum from "./CounterSum.vue";
export default {
 name: "countGroup",
 data: function() {
 return {
 countNumber: 0,
 sum:0,
 elementOfCount:[]
 };
 },
 components: {
 counter,
 CounterSum
 },
 methods:{
getTotal:function (index,value) {
    this.elementOfCount[index]=value;
    this.sum=0;
    for(let i=0;i<this.elementOfCount.length;i++)
    this.sum+=this.elementOfCount[i];
    window.console.log(this.sum);
},
initElementOfCount:function(length){
    window.console.log(length);
    this.elementOfCount= new Array(length);
    for(let i=0;i<this.elementOfCount.length;i++)
    this.elementOfCount[i]=0;
    this.sum=0;
}
 }

};
</script>