<template>
	<div>
		<div class="designIdeaWrap">
			<div class="imgContainer">
				<img src="../../../public/img/s1.jpg" />
			</div>
			<div class="ideaTextWrap">
				<div class="ideaTitle text-center">SERVICE</div>
				<div class="ideaSubTitle text-center">Creative And Customer Service</div>
				<div class="ideaText text-center">同時達成創意發揮以及客戶服務的圓滿是我們的核心理念</div>
			</div>
		</div>
		<div class="projectContainer" v-for="item in projectData" :key="item.title">
			<div class="imgContainer">
				<img :src="item.image" />
			</div>
			<div class="introContainer">
				<div class="introBox">
					<div class="title">{{ item.title }}</div><br>
					<div class="subTitle">{{ item.subTitle }}</div><br>
					<div class="introInfoBox d-flex justify-content-between">
						<div class="info">{{ item.info }}</div><br>
						<div class="d-flex flex-column">
							<div class="infoItems">
								<ul>
									<li v-for="(info, index) in item.infoItems" :key="index">{{ info }}</li>
								</ul>
							</div>
							<div class="materials">建材：<br>{{ item.materials }}</div><br>
						</div>
					</div><br>
					<div class="hashtags">{{ item.hashtags }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				projectData: '',
			}
		},
		methods: {

		},
		mounted() {
			axios.get('./projectInfo.json').then((res) => {
				this.projectData = res.data;

				console.log('aa', this.projectData);
			})
		}
	}
</script>

<style scoped>
	*::-webkit-scrollbar {
		width: 5px;
	}

	*::-webkit-scrollbar-track {
		border-radius: 5px;
	}

	*::-webkit-scrollbar-thumb {
		border-radius: 5px;
		background-color: #7f7f7f;
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
	}

	.imgContainer>img {
		width: 100vw;
	}

	.introContainer {
		width: 100%;
		height: 450px;
		position: relative;
	}

	.introBox {
		width: 90%;
		max-width: 850px;
		height: 450px;
		/* overflow-y: scroll; */
		background-color: rgba(255, 255, 255, 0.9);
		box-shadow: 0 0 10px;
		padding: 40px 25px;
		position: absolute;
		top: -90px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
	}

	.introBox div {
		letter-spacing: 2.5px
	}

	.introBox .introInfoBox {
		height: 220px;
		overflow-y: scroll;
	}

	.introBox .info {
		white-space: pre-line;
	}

	.introBox .hashtags {
		white-space: pre-line;
	}

	.infoItems ul {
		list-style: none;
		padding: 0;
	}
</style>
