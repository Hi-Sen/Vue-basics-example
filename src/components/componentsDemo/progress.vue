<template>
  <div class="hello">
        <h3 style="margin:50px;">{{msg}}</h3>
        <!-- 基本信息 -->
        <el-row :gutter="20" v-for="(item,index) in dataArr" :key="index">
            <el-col :span="4">
                <div class="grid-content bg-purple" style="line-height:40px;text-align:left;">{{item.name}}</div>
            </el-col>
            <el-col  :span="20">
                    <el-progress style="line-height:40px;" :text-inside="true" :stroke-width="18" :percentage="item.value"></el-progress>
            </el-col>
        </el-row>
  </div>
</template>

<script>
export default {
	name: 'Basics',
	 data() {
      return {
          msg:'个人消费 - 线型进度条',
          headSrc:'../../../static/head.png',
          dataArr:[
              {name:'饮食',value:80},
              {name:'将康',value:70},
              {name:'通讯',value:20},
              {name:'其它',value:30},
             
          ],
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
