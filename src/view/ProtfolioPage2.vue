<template>
	<myNavbar v-if="screenWidth > 992" ref="navbar"></myNavbar>
	<myNavbar2 v-if="screenWidth <= 992" ref="navbar"></myNavbar2>
	<ProtfolioBox></ProtfolioBox>
</template>

<script>
	import myNavbar from '../components/myNavbar/myNavbar3.vue';
	import myNavbar2 from '../components/myNavbar/myNavbar2.vue';
	import ProtfolioBox from '@/components/protfolio/ProtfolioBox2.vue'

	export default {
		components: {
			myNavbar,
			myNavbar2,
			ProtfolioBox,
		},
		computed: {
			screenWidth: {
				get: function() {
					return screen.width;
				}
			}
		}
	}
</script>

<style scoped>
</style>
