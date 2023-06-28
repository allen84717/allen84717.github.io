<template>
	<myNavbar ref="myNavbar" :goPage="goPage"></myNavbar>
	<div v-if="index == 0" class="body-wrapper">
		<mySlogan></mySlogan>
		<rightIcon></rightIcon>
		<myFooter></myFooter>
	</div>
	<div v-if="index == 2">
		<processInfo></processInfo>
	</div>
	<div v-if="index == 4">
		<myContact></myContact>
		<rightIcon></rightIcon>
	</div>
</template>

<script>
	import myNavbar from './components/myNavbar/myNavbar.vue'
	import mySlogan from './components/mySlogan/mySlogan.vue'
	import rightIcon from './components/right_icon/right_icon.vue'
	import myFooter from './components/myFooter/myFooter.vue'
	import processInfo from './components/processInfo/processInfo.vue'
	import myContact from './components/myContact/myContact.vue'
	export default {
		name: 'App',
		data() {
			return {
				index: 0
			}
		},
		methods: {
			goPage(index) {
				this.$refs.myNavbar.index = index;
				this.index = index;
			}
		},
		components: {
			myNavbar,
			processInfo,
			mySlogan,
			rightIcon,
			myFooter,
			myContact
		}
	}
</script>

<style>
	#app {
		/* background-color: #000; */
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

	@media(max-width:640px) {
		.ideaTextWrap .ideaTitle {
			font-size: 1.75em;
		}

		.ideaTextWrap .ideaSubTitle {
			font-size: 1.25em;
		}
	}

	.body-wrapper {
		position: relative;
		background: url('cover.jpg');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: center;
		background-size: cover;
		height: calc(100vh);
	}

	body::-webkit-scrollbar {
		display: none;
	}
</style>
