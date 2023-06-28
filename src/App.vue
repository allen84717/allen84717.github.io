<template>
	<!-- <myNavbar></myNavbar> -->
	<router-view></router-view>
</template>

<script>
	// import myNavbar from './components/myNavbar/myNavbar3.vue';

	export default {
		name: 'App',
		data() {
			return {}
		},
		methods: {

		},
		components: {
			// myNavbar
		},
		watch: {
			$route: function() {
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			}
		}
	}
</script>

<style scoped>
	
	@media (max-width: 992px) {
		body {
			overflow-x: hidden;
			overflow-y: auto !important;
		}
	}

	a:-webkit-any-link {
		color: black;
		cursor: pointer;
		text-decoration: none;
	}

	a {
		color: black !important;
		text-decoration: none !important;
	}
</style>
