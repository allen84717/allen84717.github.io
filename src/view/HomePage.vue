<template>
	<myNavbar v-if="screenWidth > 992" ref="navbar"></myNavbar>
	<myNavbar2 v-if="screenWidth <= 992" ref="navbar"></myNavbar2>
	<div class="img-bg" ref="imgBg"></div>
	<div class="body-wrapper" ref="bodyWrapper">
		<div style="position: relative;">
			<mySlogan></mySlogan>
		</div>
	</div>
	<myDesignItem></myDesignItem>
	<myCompare></myCompare>
	<myComment></myComment>
	<homeInspiration></homeInspiration>
	<myCounseling></myCounseling>
	<myFooter2></myFooter2>
</template>

<script>
	import myNavbar from '../components/myNavbar/myNavbar3.vue';
	import myNavbar2 from '../components/myNavbar/myNavbar2.vue';
	import mySlogan from '../components/mySlogan/mySlogan.vue'
	import myFooter2 from '../components/myFooter/mobileFooter.vue'
	import myComment from '../components/myComment/myComment.vue'
	import myCounseling from '../components/myCounseling/myCounseling.vue'
	import myCompare from '../components/myCompare/myCompare.vue'
	import homeInspiration from '../components/homeInspiration/homeInspiration.vue'
	import myDesignItem from '../components/myDesignItem/myDesignItem.vue'

	export default {
		computed: {
			screenWidth: {
				get: function() {
					return screen.width
				}
			},
			
		},
		mounted() {
			// this.$refs.designItem.style.marginTop = `${this.$refs.navbar.$refs.navbar.clientHeight * -1}px`;
		},
		methods: {
			divFocueRB() {
				window.open(
					'https://docs.google.com/forms/d/e/1FAIpQLSfNbriQ1HnFaY3pL898-uaH8CU2LKURiImxMrTOwHlI2NSX2g/viewform?usp=send_form'
				);
			}
		},
		components: {
			mySlogan,
			myNavbar,
			myComment,
			myCounseling,
			myCompare,
			homeInspiration,
			myNavbar2,
			myFooter2,
			myDesignItem
		},
	}
</script>

<style lang="less">
	.body-wrapper {
		position: relative;
		width: 100%;
	}

	.img-bg {
		position: absolute;
		top: 0px;
		background: url('../../public/img/工業風-工壹/cover.jpg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		width: 100%;
		height: 96%;
	}
	
	@media (max-width: 992px) {
		.img-bg {
			background-position-x: 50.5% !important;
		}
	}
</style>
