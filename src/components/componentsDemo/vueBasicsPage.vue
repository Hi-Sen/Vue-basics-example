<template>
	<div class="hello">
		<h3>{{ msg }}</h3>
		<Step/>
		<hr>
		<!-- 子组件通过 $emit 暴露父组件方法 fromChild 事件出来， -->
		<p style="cursor:pointer;font-weight:bold;color:#409EFF;padding:5px;border-radius:10px;">
			$emit 点击头像 子组件调用父组件方法 fromChild
		</p>
		<!-- 封装组件使用 ，例举一个 title 组件-->
		<!-- 动态绑定 头像路径，渲染数据源，一行渲染几个， ref 父组件调用子组件方法 -->
		<Title
			:headSrc = 'headSrc'  
			:dataArr = 'dataArr'
			:lineNumber = 'lineNumber'
			ref = "goTitle"  
			@fromChild = 'fromChild' 
		/>
		<Progress/>
		<CircleProgress/>
		<!-- 例举 title 组件，使用 refs 父组件调用子组件的方法 -->
		<p @click="click" style="cursor:pointer;background-color:#409EFF;color:#fff;padding:5px;border-radius:10px;">
			点击 （refs） 父组件调用子组件方法 alert 我是子组件方法 fromParent
		</p>
	</div>
</template>

<script>

// 引用需要使用的组件
import Step from './step'
import Title from './title'
import Progress from './progress'
import CircleProgress from './circleProgress'

export default {
	name: 'Basics',
	data () {
		return {
			msg: '个人基本消费信息表',
			headSrc:'../../../static/head.png',   //头像路径
			dataArr:[                             //数据源，可自定义，也可在接口返回数据中操作，
				{name:'姓名111',value:'张三'},
				{name:'性别111',value:'男'},
				{name:'户籍11',value:'广东'},
				{name:'婚姻11',value:'未婚'},
				{name:'政治面貌',value:'无'},
				{name:'身份证号',value:'1234567894645'},
				{name:'身份证地址',value:'广东省广州市天河区'},
				{name:'现居地址',value:'广东省广州市天河区'},
			],
			lineNumber:3                        //一行渲染几个
		}
	},
	methods: {
		// refs 调用 子组件的方法
		click () {
			this.$refs.goTitle.fromParent()
		},
		// $emit 子组件调用父组件的方法 ，
		fromChild (value) {
			alert("子组件调用父组件的方法传值为： "+value)
		}
	},
	// 在 components 注册需要使用的组件，
	components: {
		Step,Title,Progress,CircleProgress
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	width:800px;
	margin:50px auto;
}
</style>
