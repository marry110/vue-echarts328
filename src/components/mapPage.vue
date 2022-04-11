<template>
  <div class="map" id="map">



  </div>
</template>

<script>
import axios from 'axios'
import {onMounted,reactive,inject} from 'vue'
export default {
  setup () {
    let $echarts=inject("echarts")
    let data=reactive({})
    async function getState(){
    //  mapData=await axios.get('http://localhost:8080/map/china.json')
     data=await axios.get("/map/data")
    }
    onMounted(()=>{
      console.log('show china map chart',data)
      getState().then(()=>{
        console.log("map is ok",data);
        $echarts.registerMap("china",data.data.chinaData)
        let myChart=$echarts.init(document.getElementById("map"))
        myChart.setOption({
          geo:{
            map:"china",
            itemStyle:{
              areaColor:"#0099ff",
              borderColor:"#00ffff",
              shadwColor:"rgba(230,130,70,.5)",
              shadowBlur:30,
              emphasis:{
                focus:"self"
              }
            }
          },
          tooltip:{
            trigger:"item",
          },
          title:{
            text:"城市销量",
            left:"45%",
            textStyle:{
              color:"#fff",
              fontSize:20,
              textShadowBlur:"#33ffff",
            }
            
          },
          visualMap:{
            type:"continuous",
            min:100,
            max:5000,
            calculable:true,
            inRang:{
              color:["#50a3ba","#eac736","#d94e5d"],
            },
            textSyle:{
               color:"#fff"
            },
          },
          series:[
            {
              type:"scatter",
              itemStyle:{
                color:"red",

              },
              coordinateSystem:"geo",
              data:[
                  {name:"北京",value:[116.46,39.92,4367]},
                  {name:"上海",value:[121.48,31.22,8675]},
                  {name:"深圳",value:[114.07,22.62,2461]},
                  {name:"广州",value:[113.23,23.16,187]},
              ]

            }
          ]
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
.map{
  width:100%;
  height:100%;
}
</style>