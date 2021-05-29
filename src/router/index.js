import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'main-layout',
		component: () => import('../views/main-layout.vue'),
	},
	{
		path: '/create',
		name: 'create-layout',
		component: () => import('../views/create-layout.vue'),
	},
	{
		path: '/create/:slideIndex',
		name: 'slide-layout',
		component: () => import('../views/slide-layout.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
