<template>
	<v-card width="320" height="480" tile color="accent" class="slide-card"
					@click="goToCreate">
		<v-icon v-if="type === 'add'" x-large role="img" >mdi-plus</v-icon>
		<div v-if="type === 'preview'" :style="resultPreviewStyles">
			<p :style="questionStyles">Вопрос</p>
			<p :style="answerStyles">Ответ</p>
			<div class="d-flex flex-row justify-space-between width100 px-16">
				<div :style="resultUncheckStyles"></div>
				<div :style="resultCheckStyles"></div>
			</div>
			<div class="mx-auto mt-10" :style="resultNextStyles"></div>
		</div>
	</v-card>
</template>

<script>
export default {
	props: {
		index: {
			type: Number,
		},
		type: {
			type: String,
			required: true,
		},
		previewStyles: {
			type: Object,
		},
		questionStyles: {
			type: Object,
		},
		answerStyles: {
			type: Object,
		},
		uncheckStyles: {
			type: Object,
		},
		checkStyles: {
			type: Object,
		},
		nextStyles: {
			type: Object,
		},
	},
	computed: {
		resultPreviewStyles() {
			let previewStyles = {};
			previewStyles = this.previewStyles;
			if (!this.previewStyles.needBorder) {
				previewStyles.border = 'none';
			} else {
				previewStyles.border = `${this.previewStyles.borderWidth}px solid ${this.previewStyles.borderColor}`;
			}
			if (this.previewStyles.backgroundType === 'color') {
				previewStyles.backgroundColor = this.previewStyles.backgroundColor;
			}
			if (this.previewStyles.backgroundType === 'image') {
				previewStyles.backgroundImage = `url('${this.previewStyles.backgroundImage}')`;
				previewStyles.backgroundRepeat = 'no-repeat';
				previewStyles.backgroundSize = 'cover';
			}
			if (this.previewStyles.backgroundType === 'gradient') {
				previewStyles.background = this.previewStyles.backgroundGradient;
			}
			return previewStyles;
		},
		resultUncheckStyles() {
			let uncheckStyles = {};
			uncheckStyles = this.uncheckStyles;
			uncheckStyles.backgroundImage = `url('${this.uncheckStyles.backgroundImage}')`;
			return uncheckStyles;
		},
		resultCheckStyles() {
			let checkStyles = {};
			checkStyles = this.checkStyles;
			checkStyles.backgroundImage = `url('${this.checkStyles.backgroundImage}')`;
			return checkStyles;
		},
		resultNextStyles() {
			let nextStyles = {};
			nextStyles = this.nextStyles;
			nextStyles.backgroundImage = `url('${this.nextStyles.backgroundImage}')`;
			return nextStyles;
		},
	},
	methods: {
		goToCreate() {
			if (this.type === 'add') {
				this.$router.push(`create/slide/${this.index}`);
			}
		},
	},
	name: 'slide-card',
};
</script>

<style scoped>
.slide-card{
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}
</style>
