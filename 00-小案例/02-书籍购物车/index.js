const app = new Vue({
  el: "#app",
  data: {
    currentIndex: 0,
    msg: [
      {
        name: "《算法导论》",
        date: "2006 - 09",
        price: 85.0,
        num: 1,
      },
      {
        name: "《编程艺术》",
        date: "2006 - 02",
        price: 59.0,
        num: 1,
      },
      {
        name: "《数据库导论》",
        date: "2003 - 05",
        price: 45.0,
        num: 1,
      },
      {
        name: "《js红宝书》",
        date: "2008 - 10",
        price: 129,
        num: 1,
      },
    ],
  },
  methods: {
    getFinalPrice(price) {
      return "￥" + price.toFixed(2);
    },

    remove(index) {
      // 移除元素 => 删除数组内元素
      this.msg.splice(index, 1);
    },
  },
  computed: {
    totalPrice() {
      // let totalPrice = 0;
      // for ... in ...
      // for (let i in this.msg) {
      //   totalPrice += this.msg[i].price * this.msg[i].num;
      // }

      // for ... of ...
      // for (let item of this.msg) {
      //   totalPrice += item.price * item.num;
      // }

      // return totalPrice;
      return this.msg.reduce((pre, msg) => pre + msg.price * msg.num, 0);
    },
  },
  // 过滤器
  filters: {
    showPrice(price) {
      return "￥" + price.toFixed(2);
    },
  },
});
