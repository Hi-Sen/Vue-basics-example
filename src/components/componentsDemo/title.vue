<template>
  <div class="hello">
        <img @click="isTrue && fromChild" class="head" :src="headSrc" alt="">
        <!-- 基本信息 -->
        <el-row :gutter="20">
            <el-col style="line-height:40px;text-align:left;" 
                    :span="24/lineNumber" v-for="(item,index) in dataArr" :key="index">
                    <div class="grid-content bg-purple">{{item.name}}:  <span style="color:#409EFF">{{item.value}}</span></div>
            </el-col>
        </el-row>
  </div>
</template>

<script>
export default {
	name: 'Basics',
    data() {
        return {
            isTrue:true
        }
    },
    methods: {
        // 父组件调用子组件的方法
        fromParent () {
            alert("我是子组件方法")
        },
        // 子组件通过 $emit 暴露出去 fromChild 事件，父组件通过监听该事件，来触发
        fromChild () {
            this.$emit('fromChild','child-value')
        }
    },
    /**
     * prors 接受父组件传过来的值， 可以当做 data 的 透明计算属性，直接使用，还可以校验 值 类型。（看文档）
     * computed 
     * watch 
     * 都是 计算属性， props 一般用于接收父组件传值
     * wacth 和 computed 都是侦听函数， 监听 data 下的属性是否有变化，然后自动渲染视图
     * watch 不管是否发生了变化，只要监听了，就得走一次
     * computed, 带有缓存，一般用于 vuex ，如果值没有发生变化，则不更新，发生了变化就更新，相对来讲性能比 watch 好一点点
     */
    props:['headSrc','dataArr','lineNumber']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .head{
        width:80px;
        height:80px;
        border-radius: 50%;
        margin-bottom: 20px;
    }
</style>
