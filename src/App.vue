<template>
  <router-view />
</template>
<script>
import { provide } from 'vue'
import * as echarts from 'echarts'
import axios from 'axios'
// 设置基准路径 
// axios.defaults.baseURL="http://localhost:8888"
axios.defaults.baseURL="http://118.178.233.180:8888"
// axios.defaults.baseURL="118.170.233.180"
export default {
  setup() {
    // provider('随便起','传递的内容')
    provide('echarts', echarts)
    provide('axios', axios)
  },
}
</script>
<style lang="less">
body {
  background: rgb(129,216,208);
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
