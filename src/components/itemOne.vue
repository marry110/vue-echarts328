<template>
  <div>
    <h2 class="title">图表一</h2>
    <div class="chart" id="oneChart">容器部分1</div>
  </div>
</template>

<script>
import {inject,onMounted,reactive} from "vue"


export default {
  setup(){
    let $echarts=inject("echarts")
    let $http=inject("axios")
    console.log($echarts);
    // console.log($echarts);
    

    let data=reactive({})
    let xdata=reactive([])
    let ydata=reactive([])


    function setData(){
      xdata=data.data.chartOne.chartData.map(v=>v.title)
      ydata=data.data.chartOne.chartData.map(v=>v.num)
       console.log('xdata',xdata)
       console.log('ydata',ydata)
    }

   async function getState() {
   data=await $http({url:"/one/data"})
 
   console.log(data.data.chartOne.chartData)
   console.log(data.data.chartOne)
   console.log(data.data)
   console.log(data)

  
  
}


   onMounted(()=>{
      let myChart=$echarts.init(document.getElementById("oneChart"))
      // 调用请求
     getState().then(()=>{
       setData()

       myChart.setOption({
         grid:{
           top:"3%",
           left:"1%",
           right:"6%",
           bottom:"3%",
           containLabel:true,
         },
         xAxis:{
           type:"value",
           axisLine:{
             lineStyle:{
               color:"#fff",
             },
           },
         },
         yAxis:{
           type:"category",
           data:xdata,
            axisLine:{
             lineStyle:{
               color:"#fff",
             },
           },
         },
         series:[
           {
             data:ydata,
             type:"bar",                    
            itemStyle:{
              // normal:{取消此功能
              barBorderRadius:[0,20,20,0],
                color:new $echarts.graphic.LinearGradient(0,0,1,0,
                [
                  {
                   offset:0,
                   color:"#005eaa"
                 },
                  {
                   offset:0.5,
                   color:"#339ca8"
                 },
                  {
                   offset:1,
                   color:"#cda819"
                 }
                ]
                )
              // }
            }

           }
         ]
       })
       
     }) 
   })

    return {
      getState,
      data,
      xdata,
      ydata,
      setData,   
    }
  }
}
</script>

<style lang="less" scoped>
.chart{
  height:4.5rem;
  color:#fff;
  
}
.title{
  height:.6rem;
  color:#fff;
  line-height:0.6rem;
  text-align:center;
  font-size:0.25rem;
  
}
</style>
