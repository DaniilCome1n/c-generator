<template>
	<v-navigation-drawer app clipped>
		<div class="d-flex justify-center align-center logo-wrapper">
			<img :src="require('/src/assets/img/logo.png')" alt="logo">
		</div>
		<v-list active-class="deep-purple--text text--accent-4" nav>
			<router-link  v-for="item in navItems" :key="item.path" :to="item.path"
										active-class="deep-purple--text text--accent-4"
										class="text-decoration-none">
				<v-list-item link>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item>
			</router-link>
		</v-list>
	</v-navigation-drawer>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
	name: 'sidebar',
	data() {
		return {
			// key: value
		};
	},
	computed: {
		...mapGetters(['navItems']),
	},
};
</script>

<style scoped>
	.logo-wrapper{
		height: 60px;
	}
</style>
