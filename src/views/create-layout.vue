<template>
	<v-container class="main-container" fill-height>
		<div class="heading-wrapper">
			<h2>Создание креатива</h2>
		</div>
		<div class="slide-cards-wrapper">
			<slideCard/>
		</div>
	</v-container>
</template>

<script>
import slideCard from '@/components/slide-card.vue';

export default {
	components: {
		slideCard,
	},
	name: 'create-layout',
};
</script>

<style lang="scss">
.main-container{
	flex-wrap: nowrap !important;
	flex-direction: column;
	align-items: flex-start;
	.slide-cards-wrapper{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		gap: 15px;
	}
}
</style>
