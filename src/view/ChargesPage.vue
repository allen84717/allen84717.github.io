<template>
	<myNavbar v-if="screenWidth > 992"></myNavbar>
	<myNavbar2 v-if="screenWidth <= 992"></myNavbar2>
	<chargeInfo></chargeInfo>
</template>

<script>
	import myNavbar from '../components/myNavbar/myNavbar3.vue'
	import myNavbar2 from '../components/myNavbar/myNavbar2.vue'
	import chargeInfo from '../components/chargeInfo/chargeInfo2.vue'
	
	export default {
		computed: {
			screenWidth: {
				get: function() {
					return screen.width;
				}
			}
		},
		components: {
			chargeInfo,
			myNavbar,
			myNavbar2
		}
	}
</script>

<style>
	
</style>
