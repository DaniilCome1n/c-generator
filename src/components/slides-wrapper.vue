<template>
	<div class="slide-cards-wrapper">
		<slideCard v-for="slide in slides" :key="slide.index" :index="slide.index" />
	</div>
</template>

<script>
import slideCard from '@/components/slide-card.vue';
import { mapGetters } from 'vuex';

export default {
	components: {
		slideCard,
	},
	name: 'slides-wrapper',
	data() {
		return {};
	},
	computed: {
		...mapGetters(['slides']),
	},
};
</script>

<style scoped>
.slide-cards-wrapper{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	gap: 15px;
}
</style>
