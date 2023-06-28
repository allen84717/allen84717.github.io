<template>
	<myNavbar v-if="screenWidth > 992" ref="navbar"></myNavbar>
	<myNavbar2 v-if="screenWidth <= 992" ref="navbar"></myNavbar2>
	<div class="concept-wrapper">
		<myConcept ref="concept"></myConcept>
		<myContact></myContact>
	</div>
	<myFooter></myFooter>
</template>

<script>
import myNavbar from '../components/myNavbar/myNavbar3.vue';
import myNavbar2 from '../components/myNavbar/myNavbar2.vue';
import myConcept from '../components/myConcept/myConcept2.vue'
import myFooter from '../components/myFooter/mobileFooter.vue'
import myContact from '../components/myContact/myContact2.vue'
export default {
	mounted() {
		// this.$refs.concept.$refs.bottomDiv.style.marginTop = `${(this.$refs.navbar.$refs.navbar.clientHeight - 10) * -1}px`;
	},
	computed: {
		screenWidth: {
			get: function() {
				return screen.width;
			}
		}
	},
	components: {
		myConcept,
		myNavbar,
		myFooter,
		myContact,
		myNavbar2
	}
}

</script>

<style lang="less">
	.concept-wrapper {
		overflow: auto;
		overflow-x: hidden;
		margin-bottom: 20px;
	}
</style>
