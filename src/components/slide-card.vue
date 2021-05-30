<template>
	<v-card width="320" height="480" color="accent" class="slide-card"
					@click="$router.push(`create/slide/${index}`)">
		<v-icon x-large role="img" >mdi-plus</v-icon>
	</v-card>
</template>

<script>
export default {
	props: {
		index: {
			type: Number,
			required: true,
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
