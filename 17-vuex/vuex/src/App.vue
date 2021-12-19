<template>
  <div id="nav">
    <h2>------App组件-------</h2>
    <h3>
      {{counter}}
    </h3>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>

    <h4>{{$store.state.counter}}</h4>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">+stu</button>

    <h2>-----App的getter-----</h2>
    <h4>{{$store.state.stu}}</h4>
    <!-- 获取九月之后的（computed方法） -->
    <h4>computed:{{gt900}}</h4>
    <!-- vuex的getters方法 -->
    <h4>getters:{{$store.getters.moreSep}}</h4>

    <!-- 获取gtsep的个数 -->
    <h4>length:{{$store.getters.moreSepLength}}</h4>
    <!-- 获取年龄大于age（不定）的stu -->
    <h4>传参：{{$store.getters.gtAge(600)}}</h4>

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
  computed:{
    // 对vuex中的数据做操作
    gt900(){
      return this.$store.state.stu.filter((v) => v.age > 900)
    }
  },
  methods:{
    add(){
      // 使用vuex中定义的方法
      // 通过mutation更新
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    },
    addCount(count){
      // count: 荷载 payload
      this.$store.commit('addCount',count)
    },
    addStu(){
      const stu = {id:105, name: 'hua',age:611};
      this.$store.commit('addStu',stu)
    }
  }
}
</script>
