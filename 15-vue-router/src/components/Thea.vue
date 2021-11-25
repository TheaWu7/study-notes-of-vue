<template>
  <div>
    <h2>from Thea</h2>
    <router-link to="/thea/news">news</router-link>
    <router-link to="/thea/msg">msg</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Thea'
}
</script>