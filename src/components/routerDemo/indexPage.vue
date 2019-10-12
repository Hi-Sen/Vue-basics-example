<template>
	<div class="hello">
		<h1>{{ msg | upCase }}</h1>
		<h3>生命周期看 HelloWorld 组件控制台</h3>
		<hr>
		<el-container>
			<el-aside width="260px">
				<ul class="left">
					<li>
						<!-- <a href=""></a> -->
						<router-link to="/HelloWorld">
							普通路由，HellowWorld
						</router-link>
					</li>
					<li>
						<!-- 嵌套路由 child.vue -->
						<router-link to="/child">
							嵌套路由
						</router-link>
					</li>
					<li>
						<!-- 动态路由组件 track.vue -->
						<router-link :to="/track/+trackId">
							动态路由、命名路由, track
						</router-link>
					</li>
					<!-- <li @click="routeFun"> -->
					<li>
						<router-link :to="{
							name:'HelloWorld',
							params:{
								code:'11'
							}
						}">
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
						<router-link to="/flexbox">
							Flex box
						</router-link>
					</li>
				</ul>
			</el-aside>

			<el-main>
				<h3 v-if="false">常用指令</h3>
				<h3 v-else>常用指令 else</h3>
				<h3 v-show="false">常用指令 show</h3>

				<h2>{{T2}}</h2>

				<p v-text="text"
				   v-bind:style="{
							color:color
						}"
				   @click="click(text)"></p>

				<hr>
				<h3>全局变量 、方法</h3>

				<!-- 全局变量 color 使用 -->
				<p :style="{color:this.Glo.globalColor}">
					我是全局变量style属性color的值：{{this.Glo.globalColor}}
				</p>

				<!-- 全局方法的使用，细节查看 configGlobal  -->
				<button @click="this.Glo.setColor">点击调用全局方法,控制台查看</button>

				<hr>
				<h3>嵌套路由显示区</h3>
				<!-- 嵌套路由显示需要一对 <router-view></router-view> 标签 可以简写成 <router-view/>  -->
				<router-view/>

				<!-- 状态管理 -->
				<div v-if="this.$store.state.count">
					<h3>store - vuex</h3>
					<h2>我是状态共享值： {{this.$store.state.count}}</h2>
				</div>

			</el-main>
		</el-container>
	</div>
</template>

<script>
export default {
	name: 'RouteDemo',
	data () {
		return {
			msg: 'hello world',
			color: 'red',
			arr: [1, 2, 3, 4, 5],
			isActive: true,
			text: 'v-text 内容123456789',
			trackId: 123,        //动态路由，命名路由 传值132，返回个人信息 张三 男，否则 李梅 女
		}
	},
	filters: {
		upCase: function (value) {
			if (!value) return ''
			value = value.toString()
			return value.charAt(0).toUpperCase() + value.slice(1)
		}
	},
	watch: {
		msg (val, old) {
			console.log("新:" + val, "旧：" + old)
		},
		text: {
			handler (v, o) {
				console.log(v, o);
			},
			immediate: true,   // 刷新加载 立马触发一次 handler  
			deep: true        //  可以深度检测到 person 对象的属性值的变化   
		}
	},
	computed: {
		T2 () {
			return this.msg + '--------'
		}
	},
	methods: {
		click (n) {
			this.$nextTick(() => {
				alert(this.msg);
			})
			this.msg = "123456"
		},
		goValue () {
			// 编程式 路由传参，query 和 params 两种 ； query 在地址栏可以看到，params 地址栏看不到
			// 对应组件取值：$route.params.code 或者  $route.query.code
			this.$router.push({
				name: 'HelloWorld',
				params: {
					code: 123123456789
				}
			})
		},
		routeFun () {
			this.$router.push({
				name: 'HelloWorld',
				params: {
					code: '123456'
				}
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
  border-right: 3px solid #ddd;
}
.left li {
  line-height: 60px;
  border-bottom: 1px solid #ddd;
  text-align: left;
  cursor: pointer;
}
.left li a {
  text-decoration: none;
  color: #333;
}
.left li a:hover {
  color: rgb(106, 143, 188);
}
.active {
  color: red;
}
.a {
  background: blue;
}
</style>
