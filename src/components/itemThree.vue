<template>
  <div >
    <h2 class="title">库存统计</h2>
    <div class="chart" id="myEcharts">容器部分4</div>
  </div>
</template>

<script>
import {inject,onMounted,reactive} from 'vue'

export default {
 setup(){
    let $echarts=inject("echarts")
    let $http=inject("axios")
    let data=reactive({})
    async function getState(){
       data=await $http({url:'/three/data'})
       
    }
    onMounted(()=>{
      getState().then(()=>{
       console.log("并黄土",data)
       let myChart=$echarts.init(document.getElementById("myEcharts"))
       myChart.setOption({
         legend:{
           top:"bottom",
         },
         tooltip:{
           show:true,
         },
          grid:{
              left:"3%",
              right:"4%",
              bottom:"3%",
              containLabel:true,

            },
         series:[
           {
             type:"pie",
             data:data.data.chartThree.chartData,
             radius:[10,100],
             center:["50%","45%"],
             roseType:true,
             itemStyle:{
               borderRadius:10
             }
           }
         ]

       })
      })
    })
    return{
      getState,
      data,

    }
 }
}
</script>

<style lang="less" scoped>
#myEcharts{
  height:4.5rem;
}
.title{
  height:.6rem;
  color:#fff;
  line-height:0.6rem;
  text-align:center;
  font-size:0.25rem;
  
}
</style>
