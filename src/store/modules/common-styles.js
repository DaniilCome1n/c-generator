export default {
	state: {
		previewStyles: {
			backgroundImgFile: null,
			boxSizing: 'border-box',
			width: '320px',
			height: '480px',
			backgroundType: 'color',
			backgroundColor: '#A6E1FA',
			backgroundImage: '',
			backgroundGradient: '',
			needBorder: false,
			borderWidth: 2,
			borderColor: '#00072D',
		},
		questionStyles: {
			fontSize: '25px',
			color: '#00072D',
		},
		answerStyles: {
			fontSize: '25px',
			color: '#00072D',
		},
		uncheckStyles: {
			width: '45px',
			height: '45px',
			backgroundImgFile: null,
			backgroundImage: '',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
		},
		checkStyles: {
			width: '45px',
			height: '45px',
			backgroundImgFile: null,
			backgroundImage: '',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
		},
		nextStyles: {
			width: '145px',
			height: '40px',
			backgroundImgFile: null,
			backgroundImage: '',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
		},
	},
	mutations: {
		setStyles(state, { propertyName, styleObject }) {
			Object.keys(state[propertyName]).map((key) => {
				state[propertyName][key] = styleObject[key];
				return null;
			});
		},
	},
	getters: {
		getStyles: (state) => (propertyName) => state[propertyName],
	},
	actions: {},
	modules: {},
};
