<template>
  <div id="app">
    <h2>router</h2>
    <!-- router-link 默认是a标签；加tag属性 变成相应标签,并且点击可跳转 -->
    <router-link to="/thea">Thea</router-link>
    <!-- 如果不想通过 ← → 返回上一个页面 就加一个 replace -->
    <router-link to="/momo" tag="li" replace>momo</router-link>
    <!-- 想改被点击的选项的类名 -->
    <!-- 想统一更改所有：在router中 -->
    <router-link to="/yu" tag="button" active-class="yuing">yu</router-link>
    <br><hr><br>

    <h2>实现 router-link</h2>
    <span @click="toThea">to Thea</span>
    <button @click="toMo">to momo</button>
    <br><hr><br>

    <h2>动态路由</h2>
    <!-- 用v-bind绑定，动态获取传过来的userId -->
    <!-- <router-link :to="'/user/'+userId">用户</router-link> -->
    <router-link :to="'/user/'+userId" :userId='userId'>用户</router-link>
    <br><hr><br>

    <h2>传递参数</h2>
    <!-- <router-link to="/profile">profile</router-link> -->
    <router-link :to="{path: '/profile',query:{name: 'yu',age:18}}">profile</router-link>

    <button @click="userClick">User</button>
    <button @click="profClick">Profile</button>
    <br><br>
    
    <!-- <router-view style="border:1px solid black"/> -->

    <!-- 想要有些路由每次进入都新建 退出都销毁： exclude='name'(组件名称) -->
    <!-- 如果排除多个 不要加空格 -->
    <keep-alive exclude="momo">
      <router-view style="border:1px solid black"/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'app',
  data(){
    return {
      userId: 'yu'
    }
  },
  methods: {
    toThea(){
      // pushState方法，有返回
      this.$router.push('/thea');
    },
    toMo(){
      // replace方法，没有返回
      this.$router.replace('/momo');
      // $router => new Router的对象
    },
    userClick(){
      this.$router.push('/user/' + this.userId)
    },
    profClick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: 'thea',
          age: 17
        }
      })
    }
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
