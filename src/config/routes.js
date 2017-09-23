import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../Home.vue'
import Explorer from '../Explorer.vue'
import Cart from '../Cart.vue'
import Me from '../Me.vue'
Vue.use(VueRouter)

const router=new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{name:'Home',path:'/',component:Home},
		{name:'Explorer',path:'/explorer',component:Explorer},
		{name:'Cart',path:'/cart',component:Cart},
		{name:'Me',path:'/me',component:Me}
	]
})

export default router;