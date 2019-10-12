<template>
  <div class="hello">
    <h1>我是Hello World </h1>

    <div v-if="$route.params.code || $route.query.code">
      <hr>
      <h1>{{$route.params.code ? "路由传参值：" + $route.params.code : ""}}</h1>
      <h1>{{$route.query.code ? "路由传参值：" + $route.query.code : ""}}</h1>
    </div>

    <hr>
    <h1 v-if="this.$store.state.count">状态共享值：{{this.$store.state.count}}</h1>
    <h2>{{msg}}</h2>

    <button @click="btn">生命周期更新前，更新后，触发点击</button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    btn () {
      this.msg = '生命周期已经发生了变化';
    }
  },
  // 声明周期看控制台
  beforeCreate: function () {
    console.group('------beforeCreate创建前状态------');
    console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
    console.log("%c%s", "color:red", "data   : " + this.$data); //undefined 
  },
  created: function () {
    console.group('------created创建完毕状态------');
    console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化 
  },
  beforeMount: function () {
    console.group('------beforeMount挂载前状态------');
    console.log("%c%s", "color:red", "el     : " + (this.$el)); //已被初始化
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化  
  },
  mounted: function () {
    console.group('------mounted 挂载结束状态------');
    console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
  },
  beforeUpdate: function () {
    console.group('beforeUpdate 更新前状态===============》');
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
  },
  updated: function () {
    console.group('updated 更新完成状态===============》');
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
  },
  beforeDestroy: function () {
    console.group('beforeDestroy 销毁前状态===============》');
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
  },
  destroyed: function () {
    console.group('destroyed 销毁完成状态===============》');
    console.log("%c%s", "color:red", "el     : " + this.$el);
    console.log(this.$el);
    console.log("%c%s", "color:red", "data   : " + this.$data);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
