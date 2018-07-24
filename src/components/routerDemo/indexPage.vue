<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<h3>生命周期看 HelloWorld 组件控制台</h3>
	<hr>
	<el-container>
		<el-aside width="260px">
			<ul class="left">
				<li>
					<router-link to="/HelloWorld">
						普通路由，HellowWorld
					</router-link>
				</li>
				<li>
					<!-- 动态路由组件 track.vue -->
					<router-link :to="/track/+id">
					动态路由、命名路由, track
					</router-link>
				</li>
				<li>
					<!-- 嵌套路由 child.vue -->
					<router-link to="/child">
					嵌套路由
					</router-link>
				</li>
				<li>
					<router-link :to="{name:'HelloWorld'}">
						编程式路由到 HelloWorld
					</router-link>
				</li>
				<li @click="goValue">
					路由传参
				</li>
				<li>
					<!--直接看官方文档，在路由里边添加 redirect 指向重定向的路由就好  -->
					路由重定向 redirect 
				</li>
				<li>
					<router-link to="/vueBasicsPage">
						组件页面
					</router-link>
				</li>
				<li>
					<router-link to="/vuexDemo">
						状态管理器
					</router-link>
				</li>
				<li>
					<router-link to="/video">
						video 视频组件
					</router-link>
				</li>
			</ul>
		</el-aside>
		<el-main>
				<h3>常用指令</h3>
				<!-- 绑定一段 html 元素，v-html 能识别这段 HTML 文本，一下是一个 button -->
				<p v-html="html"></p>
				<!-- 绑定一段 txt 文本，字符串，不能识别 html 元素  -->
				<p v-text="text"></p>
				<!-- v-for 遍历数组 arr， item 子元素，index 是索引，也叫作下标， -->
				<p v-for="(item,index) in arr" :key="index">
					<span>{{item}}</span>
				</p>
				<!-- v-model 双向绑定 这里用作输入框-->
				<input type="text" v-model="inputTxt">
				<p>输入了：{{inputTxt}}</p>
				<!-- v-bind 绑定，简写 :bind  这里距离绑定class , 取决于 isActive 为 true 还是 false -->
				<p v-bind:class={active:isActive}>注意文字颜色。点击下边按钮添加了类</p>
				<!-- v-on 触发事件，简写 @  ，绑定各种事件，这里是点击事件，切换上边 isActive 的状态-->
				<button @click="click"> 切换class </button>
				<!-- v-show 我们通过点击上边的按钮 来切换 isActive 的状态，控制是否显示-->
				<p v-show="isActive">我要显示 show</p>
				<!-- 这里通过 isactive 状态 来渲染if或者elese, else只有跟着if才能使用-->
				<p v-if="isActive">我是 v-if </p>
				<p v-else>我是 v-else </p>
				<!-- 全局变量 color 使用 -->
				<p :style="{color:this.Glo.globalColor}"
					:class="{isBg:this.Glo.activeBg}"
				>
					我是全局变量style属性color的值：{{this.Glo.globalColor}}
				</p>
				<!-- 全局方法的使用，细节查看 configGlobal  -->
				<button @click="this.Glo.setColor">点击调用全局方法,控制台查看</button>
			<hr>

			<h3>嵌套路由显示区</h3>
			<hr>
			<!-- 嵌套路由显示需要 一对 <router-view></router-view> 标签 可以简写成 <router-view/>  -->
			<router-view/>
			
		</el-main>
	</el-container>
  </div>
</template>

<script>
export default {
	name: 'RouteDemo',
	data () {
		return {
			msg: 'vue Router',
			html:'<button> 按钮  v-html 渲染一段 HTML文本</button>',
			text:"渲染一段字符串文本，",
			arr:[
				'数字1','数字2','数字3',
			],
			inputTxt:'', 
			isActive:false,
			id:123,        //动态路由，命名路由 传值132，返回个人信息 张三 男，否则 李梅 女
		}
	},
	methods:{
		goValue () {
			// 编程式 路由传参，query 和 params 两种 ； query 在地址栏可以看到，params 地址栏看不到
			// 对应组件取值：$route.params.code 或者  $route.query.code
			this.$router.push({
				name:'HelloWorld',
				params:{
					code:123
				}
			})
		},
		click () {
			this.isActive = !this.isActive
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left{
	border-right: 3px solid #ddd;
}
.left li{
	line-height:60px;
	border-bottom: 1px solid #ddd;
	text-align: left;
	cursor: pointer;
}
.left li a {
	text-decoration: none;
	color:#333;
}
.left li a:hover{
	color:rgb(106,143,188);
}
.active{
	color:red;
}
</style>
