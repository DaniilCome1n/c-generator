<template>
	<v-app>
		<sideBar/>
		<v-container fluid>
			<router-view></router-view>
		</v-container>
	</v-app>
	<!--  <div id="app">-->
	<!--    <div id="nav">-->
	<!--      <router-link to="/">Главная</router-link>-->
	<!--      <router-link to="/create-layout">Создать креатив</router-link>-->
	<!--    </div>-->
	<!--    <router-view/>-->
	<!--  </div>-->
</template>

<script>
import sideBar from '@/components/side-bar.vue';

export default {
	components: { sideBar },
};

</script>
<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
