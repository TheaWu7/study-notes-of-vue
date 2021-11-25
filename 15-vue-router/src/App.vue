<template>
  <div id="app">
    <h2>router</h2>
    <!-- router-link 默认是a标签；加tag属性 变成相应标签,并且点击可跳转 -->
    <router-link to="./thea">Thea</router-link>
    <!-- 如果不想通过 ← → 返回上一个页面 就加一个 replace -->
    <router-link to="/momo" tag="li" replace>momo</router-link>
    <!-- 想改被点击的选项的类名 -->
    <!-- 想统一更改所有：在router中 -->
    <router-link to="/yu" tag="button" active-class="yuing">yu</router-link>

    <h2>实现 router-link</h2>
    <span @click="toThea">to Thea</span>
    <button @click="toMo">to momo</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    toThea(){
      // pushState方法，有返回
      this.$router.push('/thea');
    },
    toMo(){
      // replace方法，没有返回
      this.$router.replace('/momo');
    },
  }
}
</script>
<style>
.router-link-active {
  color:palevioletred;
}
.yuing {
  color: aquamarine;
}
.yuyu {
  font-size: 20px;
}
</style>
