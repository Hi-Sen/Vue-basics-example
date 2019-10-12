import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import VueBasicsPage from '@/components/componentsDemo/vueBasicsPage'    // 组件    
import RouterDemo from '@/components/routerDemo/indexPage'    // 路由   
import Child from '@/components/routerDemo/child'    // 子路由  
import Track from '@/components/routerDemo/track'    // 嵌套路由   
import VuexDemo from '@/components/vuexDemo/vuex'    // 状态管理  
import Flexbox from '@/components/flexbox'    // flexbox  

Vue.use(Router)

// 按需注册
const _import = function (url) {
	return resolve => require(['@/' + url + '.vue'], resolve);
}

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'RouterDemo',
			component: _import('components/routerDemo/indexPage'),
			children: [
				{
					path: '/child',
					name: 'Child',
					component: Child
				}
			]
		},
		{
			path: '/HelloWorld',
			name: 'HelloWorld',
			component: resolve => require(['@/components/HelloWorld.vue'], resolve),
			// redirect: '/child'
		},
		{
			path: '/track/:id',
			name: 'Track',
			component: Track,
		},
		{
			path: '/vueBasicsPage',
			name: 'VueBasicsPage',
			component: VueBasicsPage
		},
		{
			path: '/vuexDemo',
			name: 'VuexDemo',
			component: VuexDemo
		},
		{
			path: '/flexbox',
			name: 'Flexbox',
			component: Flexbox
		},
	]
})


// 路由钩子函数 
router.beforeEach((to, from, next) => {
	//会在任意路由跳转前执行，next一定要记着执行，不然路由不能跳转了
	console.log('beforeEach')
	console.log(to, from)
	document.title = to.name;
	next()
})
router.afterEach((to, from) => {
	//会在任意路由跳转后执行 
	console.log('afterEach')
})

export default router; 