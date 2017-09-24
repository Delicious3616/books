import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../Home.vue'
import Explorer from '../Explorer.vue'
import Cart from '../Cart.vue'
import Me from '../Me.vue'
import Main from '../Main.vue'
import BookDetail from '../assets/books/detail.vue'

Vue.use(VueRouter)

const router=new VueRouter({
	mode:'history',
	base:__dirname,
	linkActiveClass:"active",
	routes:[
		{
			name:"Main",
			path:"/",
			component:Main,
			children:[
				{name:'Home',path:'',component:Home},
				{name:'Explorer',path:'explorer',component:Explorer},
				{name:'Cart',path:'cart',component:Cart},
				{name:'Me',path:'me',component:Me}
			]
		},
		{
			name:"BookDetail",path:"/books/:id",component:BookDetail
		}
		

	]
})

export default router;