import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' 

import Video from '@/components/video'    //video

import VueBasicsPage from '@/components/componentsDemo/vueBasicsPage'    //组件
import RouterDemo from '@/components/routerDemo/indexPage'    //路由
import Child from '@/components/routerDemo/child'    //子路由
import Track from '@/components/routerDemo/track'    //嵌套路由
import VuexDemo from '@/components/vuexDemo/vuex'    //状态管理

Vue.use(Router)

export default new Router({
	routes: [
		
		{
			path: '/',
			name: 'RouterDemo',
			component: RouterDemo,
			children:[
				{
					path: '/child',
					name: 'Child',
					component: Child,
				}
			]
		},
		{
			path: '/video',
			name: 'Video',
			component: Video
		},
		{
			path: '/HelloWorld',
			name: 'HelloWorld',
			component: HelloWorld
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
			path: '/track/:id',
			name: 'Track',
			component: Track
		},
	]
})
