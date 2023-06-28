<template>
	<myNavbar v-if="screenWidth > 992"></myNavbar>
	<myNavbar2 v-if="screenWidth <= 992"></myNavbar2>
	<pictureEnterBox></pictureEnterBox>
	<mobileFooter></mobileFooter>
</template>

<script>
	import myNavbar from '../components/myNavbar/myNavbar3.vue';
	import myNavbar2 from '../components/myNavbar/myNavbar2.vue';
	import pictureEnterBox from '@/components/protfolio/pictureEnterBox.vue'
	import mobileFooter from '@/components/myFooter/mobileFooter.vue'
	export default {
		components: {
			myNavbar,
			pictureEnterBox,
			mobileFooter,
			myNavbar2
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
