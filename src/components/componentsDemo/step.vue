<template>
  <div class="step">
        <el-steps :active="activeNumber" align-center>
            <el-step v-for="(item,index) in stepArr" :key="index" :title="item.title" :description="item.text"></el-step>
        </el-steps>
  </div>
</template>

<script>
export default {
	name: 'Basics',
	 data() {
      return {
          activeNumber:4,
          stepArr:[
              {title:'注册用户',text:''},
              {title:'身份验证',text:''},
              {title:'生成个人信息消费表',text:''},
              {title:'完成',text:''},
          ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .step{
        margin-top:50px;
    }
    .el-step__description{
        margin-top:10px;
    }
</style>
