export default {
	state: {
		slides: {
			1: {
				index: 1,
				isEmpty: true,
			},
		},
	},
	mutations: {
		addSlide(state, slide) {
			if (slide.index) {
				state.slides = {
					...state.slides,
					[slide.index]: { ...slide },
				};
			}
		},
	},
	getters: {
		slides: (state) => Object.values(state.slides),
		slide: (state, index) => state.slides[index],
	},
	actions: {},
	modules: {},
};
