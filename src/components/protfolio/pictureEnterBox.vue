<template>
	<div class="imageContainer d-flex justify-content-between align-items-center">
		<router-link :to="item.url" v-for="item in projectData" :key="item.text">
			<img :src="item.image" class="enterPicture" />
			<div class="enterText"> {{ item.text }} </div>
			<div class="enterIcon d-flex justify-content-center align-items-center">
				<i class="fa-light fa-plus"></i>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			projectData: [
				{
					image: '/img/現代黑白/27a91215779517defb8a2af23675b47d8cc1affb-proper.jpg',
					text: 'SPACE',
					url: '/ProtfolioEnter/Protfolio'
				}, {
					image: '/img/project/enterPic-2.jpg',
					text: 'ESTATE',
					url: '/ProtfolioEnter/Protfolio2'
				}
			],
		}
	},
}
</script>

<style scoped>
.imageContainer {
	width: 100%;
	margin: 0.25% auto;
	font-family: "Manjari", sans-serif, "STHeiti Light", "Heiti TC", "微軟正黑體", "Microsoft JhengHei", sans-serif;
}

.imageContainer>a {
	display: block;
	width: 49.8%;
	position: relative;
	text-decoration: none;
	color: #FFF;
	overflow: hidden;
	height: 600px;
}

.imageContainer>a:hover .enterPicture {
	filter: grayscale(0);
	transform: scale(1.1);
	transform-origin: 50%;
	transition: all 1s;
}

.imageContainer>a:hover .enterText {
	letter-spacing: 10px;
	transition: letter-spacing 1s;
}

.imageContainer>a:hover .enterIcon {
	visibility: visible;
	opacity: 1;
	transform: rotate(180deg);
	transition: all 1s;
}

.imageContainer>a>.enterPicture {
	/* height: 500px; */
	/* width: 100%;
		filter: grayscale(100%);
		transition: all 1s; */

	width: 100%;
	filter: grayscale(100%);
	transition: all 1s;
	top: 50%;
	left: 50%;
	/* transform: translateX(-15%); */
	height: 100%;
}

.imageContainer .enterText {
	font-family: 'Playfair Display', serif !important;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%);
	color: #FFF;
	font-weight: 400;
	font-size: 20px;
	letter-spacing: 3px;
	transition: all 1s;
	text-shadow: black 0.1em 0.1em 0.2em
}

.imageContainer .enterIcon {
	border: 1px solid #FFF;
	border-radius: 50%;
	width: 25px;
	height: 25px;
	text-decoration: none;
	position: absolute;
	top: 60%;
	left: calc(50% - 18px);
	visibility: visible;
	opacity: 0;
	transition: all 1s;
	color: #FFF;
}

.enterIcon>i {
	font-size: 24px;
	width: 100%;
	height: 100%;
	line-height: 22px;
	text-align: center;
}

@media (max-width: 992px) {
	.imageContainer {
		flex-direction: column;
	}

	.imageContainer>a {
		display: block;
		width: 100%;
		height: 276px;
		position: relative;
		text-decoration: none;
		margin-bottom: 10px;
		color: #FFF;
		overflow: hidden;
	}
}

@media (max-width: 576px) {

	.imageContainer {
		margin: 0 auto;

	}
}
</style>
