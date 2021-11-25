<template>
  <div>
    <h2>a User</h2>
    <h2>hi,{{userID}}</h2>
    <h2>hello,{{$route.params.yonghuxinxila}}</h2>
  </div>
</template>
<script>
export default {
  name: 'user',
  computed: {
    userID(){
      // $route => 正在活跃的路由
      return this.$route.params.yonghuxinxila
    }
  }
}
</script>