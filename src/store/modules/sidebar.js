export default {
	state: {
		navItems: [
			{
				icon: 'mdi-home',
				path: '/',
				title: 'Главная',
			},
			{
				icon: 'mdi-plus',
				path: '/create',
				title: 'Создать креатив',
			},
		],
	},
	mutations: {},
	getters: {
		navItems: (state) => state.navItems,
	},
	actions: {},
	modules: {},
};
