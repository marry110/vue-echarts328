<template>
  <div>
    <div class="item">
      <!-- 设置插槽   -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.item {
  height: 5.125rem;
  border: 1px solid rgb(204, 204, 204);
  margin: 0.25rem;
  background-color: rgba(12, 130, 255, 0.85);
}
</style>
