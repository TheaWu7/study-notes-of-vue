<template>
  <div id="nav">
    <h2>App组件</h2>
    <h3>
      {{counter}}
    </h3>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>

    <h4>{{$store.state.counter}}</h4>
    <button @click="add">+</button>
    <button @click="sub">-</button>

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
  },
  methods:{
    add(){
      // 使用vuex中定义的方法
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    }
  }
}
</script>
