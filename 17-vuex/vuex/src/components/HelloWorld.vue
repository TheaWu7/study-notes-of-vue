<template>
  <div class="hello">
    <h2>++++++++++++hello组件+++++++++++</h2>
    <h3>{{counter}}</h3>
    <!-- 使用vuex中的state -->
    <h4>{{$store.state.counter}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  // 通过父传子 传递数据
  props: {
    counter: Number
  },
  data(){
    return{
    }
  }
}
</script>
