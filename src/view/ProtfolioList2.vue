<template>
	<myNavbar v-if="screenWidth > 992" ref="navbar"></myNavbar>
	<myNavbar2 v-if="screenWidth <= 992" ref="navbar"></myNavbar2>
	<protfolioList :myId="id"></protfolioList>
</template>

<script>
	import myNavbar from '../components/myNavbar/myNavbar3.vue';
	import myNavbar2 from '../components/myNavbar/myNavbar2.vue';
	import protfolioList from '../components/protfolio/protfolioList2.vue'
	export default {
		components: {
			myNavbar,
			myNavbar2,
			protfolioList
		},
		computed: {
			id: function() {
				return window.document.location.href.split('//')[1].split('/')[1].split('=')[1];
			},
			screenWidth: {
				get: function() {
					return screen.width;
				}
			}
		},
		methods: {

		}
	}
</script>

<style>
</style>
