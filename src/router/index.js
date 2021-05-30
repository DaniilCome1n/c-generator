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
		children: [
			{
				path: '/create/slide/:index',
				name: 'slide-layout',
				component: () => import('../components/slide.vue'),
			},
			{
				path: '/create/common-styles',
				name: 'slide-layout',
				component: () => import('../components/slide.vue'),
			},
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
