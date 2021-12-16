<template>
  <div id="nav">
    <h2>App组件</h2>
    <h3>
      {{counter}}
    </h3>

    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <!-- 父传子 -->
    <hello :counter='counter' />
  </div>
</template>

<script>
import hello from './components/HelloWorld.vue'
export default {
  name: 'App',
  data(){
    return {
      counter: 0,
    }
  },
  components: {
    hello,
  }
}
</script>
