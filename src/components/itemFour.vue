<template>
  <div>
    <h2 class="title">库存统计表</h2>
    <div class="chart" id="myEchartFour">容器部分3</div>
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
      data=await $http({url:"/four/data"})
   }

    onMounted(()=>{
    getState().then(()=>{
      console.log("the fourth table",data)
      let myChart=$echarts.init(document.getElementById("myEchartFour"));
      myChart.setOption({
        tooltip:{
          trigger:"axis",
          axisPointer:{
            type:"shadow",
          },
        },
        legend:{
              data:["服饰","数码","服装","家电","家居","日化"]
            },
             grid:{
              left:"3%",
              right:"4%",
              bottom:"3%",
              containLabel:true,

            },
        xAxis:{
          type:"category",
          data:data.data.chartFour.chartData.day,
          axisLine:{
            lineStyle:{
              color:"#fff"
            },
          },
        },
        yAxis:{
          type:"value",
          axisLine:{
            lineStyle:{
              color:"#fff"
            },
          },

        },
        series:[
          {
            name:"服饰",
            type:"bar",
            data:data.data.chartFour.chartData.num.Clothes,
            stack:"total",
            label:{
              show:true,
            },
            emphsis:{
              focus:"series",
            },

          },
          {
            name:"数码",
            type:"bar",
            data:data.data.chartFour.chartData.num.digit,
            stack:"total",
             label:{
              show:true,
            },
            emphsis:{
              focus:"series",
            },
            
          },
          {
            name:"家电",
            type:"bar",
            data:data.data.chartFour.chartData.num.Electrical,
            stack:"total",
             label:{
              show:true,
            },
            emphsis:{
              focus:"series",
            },
            
          },
          {
            name:"家居",
            type:"bar",
            data:data.data.chartFour.chartData.num.gear,
            stack:"total",
             label:{
              show:true,
            },
            emphsis:{
              focus:"series",
            },
            
          },
          {
            name:"日化",
            type:"bar",
            data:data.data.chartFour.chartData.num.Chemcials,
            stack:"total",
             label:{
              show:true,
            },
            emphsis:{
              focus:"series",
            },
            
          },
        ],
      })
      
    })
  })

  return {
    getState,
    data,
  }
  }
 
  
}
</script>

<style lang="less" scoped>

#myEchartFour{
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
