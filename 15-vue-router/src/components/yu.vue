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
    // this.$router.push(this.path); //在路由有多个子路由的时候 保持子路由关闭时的状态；在再次打开时 依旧是当时的状态
    console.log('yu activated');
  },

  // 在路由有多个子路由的时候 保持子路由关闭时的状态；在再次打开时 依旧是当时的状态
  beforeRouterLeave(to,from,next){
    console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  },
  deactivated() {
    console.log('yu deactivated');
  },
}
</script>