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

    <h2>-----mutation相关-----</h2>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">+stu</button>
    <h4>info:{{$store.state.info}}</h4>
    <button @click="changeinfo">changeinfo</button>
    <button @click="acyncUpdateInfo">acyncUpdateInfo</button>

    <h4>------module使用------</h4>
    <h5>{{$store.state.a.name}}</h5>
    <button @click="updateName">修改名字</button>
    <h5>fulName:{{$store.getters.fulName}}</h5>
    <h5>fulName2:{{$store.getters.fulName2}}</h5>
    <h5>fulName3:{{$store.getters.fulName3}}</h5>
    <button @click="aUpdateName">异步修改名字</button>
    <!-- 父传子 -->
    <hello :counter='counter' />
  </div>
</template>

<script>
import hello from './components/HelloWorld.vue'
import { INCREMENT, DECREMENT, ADDCOUNT, ADDSTU, CHANGEINFO } from "./store/mutation-type";

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
      // this.$store.commit('increment')
      // 类型常量
      this.$store.commit(INCREMENT)
    },
    sub(){
      this.$store.commit(DECREMENT)
      // this.$store.commit('decrement')
    },
    addCount(count){
      // count: 荷载 payload
      // 1. 普通提交风格
      // this.$store.commit('addCount',count);

      // 2. 带类型的提交
      this.$store.commit({
        type:'addCount',
        count, //对象增强写法
      })
    },
    addStu(){
      const stu = {id:105, name: 'hua',age:611};
      this.$store.commit(ADDSTU,stu)
    },
    changeinfo(){
      this.$store.commit(CHANGEINFO)
    },
    // 在action中定义的方法，用dispatch执行
    acyncUpdateInfo(){
      this.$store
      .dispatch('acyncUpdateInfo','传递参数')
      .then(res => {
        console.log('在action中使用的promise，在使用时执行.then');
        console.log(res);
      })
    },
    updateName(){
      this.$store.commit('updateName','修改后的name')
    },
    aUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>
