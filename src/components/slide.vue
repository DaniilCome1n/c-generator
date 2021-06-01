<template>
	<v-container class="main-container" fill-height>
		<h2>Слайд {{$route.params.index}}</h2>
		<v-btn @click="addNewSlide">Добавить</v-btn>
	</v-container>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	name: 'slide-layout',
	data() {
		return {
			currentIndex: null,
		};
	},
	mounted() {
		this.currentIndex = this.$route.params.index;
	},
	methods: {
		...mapMutations(['addSlide']),
		addNewSlide() {
			const slide = {
				index: +this.currentIndex + 1,
				isEmpty: true,
			};
			this.addSlide(slide);
			this.$router.push('/create');
		},
	},
};
</script>

<style scoped>

</style>
