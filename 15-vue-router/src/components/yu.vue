<template>
  <div>
    <h2>from yu</h2>
  </div>
</template>
<script>
export default {
  name: 'yu',
  /**
   * 如果没有keep-alive
   * 在每次点击这个页面时 会调 created
   * 离开页面会调 destroyed
   */
  created(){
    console.log('yu created');
  },
  destroyed(){
    console.log('destroyed');
  },
  /**
   * 如果加了 keep-alive
   * 离开时则不会销毁组件 不会调 destroyed
   */

  /**
   * 下面两个函数 只有在组件被保留了状态 使用了 keep-alive 时，才有效果
   */
  activated(){
    console.log('activated');
  },
  deactivated() {
    console.log('deactivated');
  }
}
</script>