<template>
	<v-navigation-drawer app>
		<div class="d-flex justify-center align-center">
			<img :src="require('/src/assets/img/logo.png')" alt="logo">
		</div>
		<v-list nav active-class="deep-purple--text text--accent-4">
			<v-list-item link>
				<v-list-item-icon>
					<v-icon>mdi-home</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<router-link to="/">Главная</router-link>
				</v-list-item-content>
			</v-list-item>
			<v-list-item link>
				<v-list-item-icon>
					<v-icon>mdi-plus</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<router-link to="/create-layout">Создать креатив</router-link>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>

export default {
	name: 'sidebar',
	data() {
		return {
			// key: value
		};
	},
};
</script>

<style scoped>

</style>
