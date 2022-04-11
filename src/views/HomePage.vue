<template>
  <div>
    <header>
      <h1>千锋教育</h1>
    </header>

    <!-- 大容器   -->
    <section class="container">
      <!-- 左容器 -->

      <section class="itemLeft">
        <item-page>
          <item-one></item-one>
        </item-page>
        <item-page>
          <item-two></item-two>
        </item-page>
      </section>

      <!-- 中间容器  -->
      <section class="itemCenter">
      <map-page></map-page>
      </section>

      <!-- 右容器 -->
      <section class="itemRight">
        <item-page>
          <item-three></item-three>
        </item-page>
        <item-page>
          <item-four></item-four>
        </item-page>
      </section>
    </section>
  </div>
</template>

<script>
import itemPage from '@/components/itemPage.vue'
import itemOne from '@/components/itemOne.vue'
import itemTwo from '@/components/itemTwo.vue'
import itemThree from '@/components/itemThree.vue'
import itemFour from '@/components/itemFour.vue'
import mapPage from '@/components/mapPage.vue'
import { inject } from 'vue'
export default {
  components: { itemPage, itemOne, itemTwo, itemThree, itemFour,mapPage, },
  setup() {
    let $echarts = inject('echarts')
    let $http = inject('axios')
    console.log($echarts)
    console.log($http)
  },
}
</script>

<style lang="less" scoped>
header {
  height: 1rem;
  width: 100%;
  background-color: rgba(0, 0, 255, 0.2);
  //  标题文字样式
  font-size: 0.375rem;
  color: #fff;
  line-height: 1rem;
  text-align: center;
}
.container {
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  height: 570px;
  // background-color: gray;
  display: flex;
  direction: column;

  .itemLeft,
  .itemRight {
    flex: 3;
  }
  .itemCenter {
    flex: 5;
    height: 10.5rem;
    // border: 1px solid blue;
    padding: 0.125rem;
    margin: 0.25rem;
  }
}
</style>
