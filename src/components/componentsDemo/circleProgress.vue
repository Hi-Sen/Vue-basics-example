<template>
  <div class="hello">
      <h3 style="margin:50px;">{{msg}}</h3>
        <!-- 基本信息 -->
        <el-row :gutter="20">
            <el-col style="line-height:40px;" 
                    :span="24/lineNumber" v-for="(item,index) in dataArr" :key="index">
                    <div class="grid-content bg-purple">
                        <el-progress type="circle" :percentage="item.value"></el-progress><br>
                        <span>{{item.name}}</span>
                    </div>
            </el-col>
        </el-row>
  </div>
</template>

<script>
export default {
	name: 'Basics',
	 data() {
      return {
          msg:'个人消费 - 环形进度条',
          headSrc:'../../../static/head.png',
          dataArr:[
              {name:'服饰美容',value:90},
              {name:'生活日用',value:50},
              {name:'交通出行',value:30},
              {name:'文教娱乐',value:70},
          ],
          lineNumber:4
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
