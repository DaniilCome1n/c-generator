<template>
	<v-container class="main-container" fill-height>
		<h2 class="mb-10">Общие стили</h2>
		<div class=" common-styles-wrapper width100 d-flex justify-space-between full-width">
			<div class="preview-wrapper">
				<slideCard type="preview"
									 :previewStyles="previewStyles"
									 :questionStyles="questionStyles"
									 :answerStyles="answerStyles"
									 :uncheckStyles="uncheckStyles"
									 :checkStyles="checkStyles"
									 :nextStyles="nextStyles"/>
				<v-btn class="mt-6" color="primary" @click="saveCommonStyles">Сохранить</v-btn>
			</div>
			<stylesOptions :previewStyles="previewStyles"
										 :questionStyles="questionStyles"
										 :answerStyles="answerStyles"
										 :uncheckStyles="uncheckStyles"
										 :checkStyles="checkStyles"
										 :nextStyles="nextStyles"/>
		</div>
	</v-container>
</template>

<script>
import slideCard from '@/components/slide-card.vue';
import stylesOptions from '@/components/common-styles/elements/styles-options.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
	components: {
		slideCard,
		stylesOptions,
	},
	name: 'common-styles',
	data() {
		return {
			propertyNames: ['previewStyles', 'questionStyles', 'answerStyles', 'uncheckStyles', 'checkStyles', 'nextStyles'],
			previewStyles: {},
			questionStyles: {},
			answerStyles: {},
			uncheckStyles: {},
			checkStyles: {},
			nextStyles: {},
		};
	},
	mounted() {
		this.propertyNames.map((propertyName) => {
			this[propertyName] = this.getStyles(propertyName);
			return null;
		});
	},
	computed: {
		...mapGetters(['getStyles']),
	},
	methods: {
		...mapMutations(['setStyles']),
		saveCommonStyles() {
			this.propertyNames.map((propertyName) => {
				const styleObject = this[propertyName];
				this.setStyles({ propertyName, styleObject });
				return null;
			});
		},
	},
};
</script>

<style scoped>

</style>
