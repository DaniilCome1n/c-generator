import Vue from 'vue';
import Vuex from 'vuex';
import sidebar from '@/store/modules/sidebar';
import slidesWrapper from '@/store/modules/slides-wrapper';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		sidebar,
		slidesWrapper,
	},
});
