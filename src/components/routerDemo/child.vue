
<template>
  <el-tabs v-model="activeName"
           @tab-click="handleClick"
           style="width:400px;margin:0 auto;">
    <el-tab-pane label="用户管理"
                 name="first">我是用户管理</el-tab-pane>
    <el-tab-pane label="配置管理"
                 name="second">我是配置管理</el-tab-pane>
    <el-tab-pane label="角色管理"
                 name="third">我是角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿"
                 name="fourth">我是定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
};
</script>