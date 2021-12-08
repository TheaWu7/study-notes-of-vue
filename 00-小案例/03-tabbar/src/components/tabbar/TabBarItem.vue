<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <!-- <div :class="{active: isActive}"> -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#ff5777',
    }
  },
  data(){
    return{
      // isActive: false,
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
      // 获取正在活跃的路由的路径
      // 跟（当前的路径）进行比较
      // == -1：没找到|!== -1：找到了
      // 找到 => 相等 => 当前选项
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor}:{}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
}
.active {
  color: #ff5777;
}
</style>