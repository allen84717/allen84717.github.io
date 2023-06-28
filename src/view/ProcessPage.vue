<template>
	<myNavbar v-if="screenWidth > 992"></myNavbar>
	<myNavbar2 v-if="screenWidth <= 992"></myNavbar2>
	<processInfo v-if="screenWidth > 992"></processInfo>
	<processInfo2 v-if="screenWidth <= 992"></processInfo2>
	<myFooter v-if="screenWidth <= 992"></myFooter>
</template>

<script>
	import myNavbar from '../components/myNavbar/myNavbar3.vue';
	import myNavbar2 from '../components/myNavbar/myNavbar2.vue';	
	import processInfo from '../components/processInfo/processInfo.vue'
	import processInfo2 from '../components/processInfo/processInfo2.vue'
	import myFooter from '../components/myFooter/mobileFooter.vue'

	export default {
		components: {
			myNavbar,
			processInfo,
			processInfo2,
			myNavbar2,
			myFooter
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
	.process-headImg {
		display: none;
	}

	.process-footerImg {
		display: none;
	}

	.designIdeaWrap .imgContainer>img {
		width: 100vw;
		margin-top: -100%;
	}

	.designIdeaWrap .ideaTextWrap {
		padding: 5%;
	}

	.ideaTextWrap .ideaTitle {
		font-size: 2em;
		margin-bottom: 20px;
	}

	.ideaTextWrap .ideaSubTitle {
		font-size: 1.5em;
		margin-bottom: 20px;
	}

	.ideaTextWrap .ideaText {
		font-size: 0.95em;
		margin-bottom: 20px;
	}

	.endImgContainer {
		width: 100%;
	}

	.endImgContainer>img {
		width: 100%;
	}

	@media (max-width: 992px) {
		.process-Image-Div {
			overflow-x: hidden;
		}
		
		.process-headImg {
			height: auto;
			width: 100%;
			margin-top: -80%;
			display: block;
		}
		
		.process-footerImg {
			display: block;
			width: 100%;
		}
		
	}
</style>
