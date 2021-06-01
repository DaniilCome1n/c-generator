<template>
	<v-container class="main-container" fill-height>
		<div class="heading-wrapper">
			<h2>Создание креатива</h2>
		</div>
		<v-btn color="primary" @click="$router.push('/create/common-styles')">Задать общие стили</v-btn>
		<slideWrapper/>
	</v-container>
</template>

<script>
import slideWrapper from '@/components/slides-wrapper.vue';

export default {
	components: {
		slideWrapper,
	},
	name: 'create-layout',
};
</script>

<style lang="scss">

</style>
