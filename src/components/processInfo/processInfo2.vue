<template>
	<div class="process-wrapper">
		<div class="process-Image-Div">
			<img class="process-headImg" src="../../../public/img/s1.jpg" />
		</div>
		<div class="processContainer" :class="[index != 0? 'notfirstProcess' : '']" v-for="(item, index) in processData"
			:key="item.title">
			<div class="introContainer d-flex justify-content-center align-items-center">
				<div class="introBox">
					<div class="infoPic">
						<img :src="item.image" />
					</div>
					<div class="title text-center">{{ item.title }}</div>
					<div class="subTitle text-center">{{ item.subTitle }}</div>
					<div class="introInfoBox d-flex justify-content-center">
						<div class="d-flex flex-column">
							<div class="infoItems">
								<ul>
									<li v-for="(info, index) in item.infoItems" :key="index">{{ info }}</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="introIndex text-center">{{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}</div>
				</div>
			</div>
		</div>
		<div class="process-Image-Div">
			<img class="process-footerImg" src="../../../public/img/s10.jpg" />
		</div>
	</div>

</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				processData: '',
			}
		},
		methods: {

		},
		mounted() {
			axios.get('./processInfo.json').then((res) => {
				this.processData = res.data;
			})
		}
	}
</script>

<style scoped>
	* {
		color: #666;
	}

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


	.imgContainer {
		height: 500px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.imgContainer>img {}

	.introContainer {
		position: relative;
	}

	.introBox {
		width: 90%;
		max-width: 500px;
		box-shadow: 0 0 10px;
		padding: 50px 30px;
		position: relative;
		background-color: white;
		margin-top: 35px;
	}

	.introBox div {
		letter-spacing: 1px
	}

	.introBox .introInfoBox {}

	.introBox .infoPic {
		width: 80px;
		margin: 0 auto 30px
	}

	.introBox .subTitle {
		margin-bottom: 20px;
	}

	.infoPic>img {
		width: 100%;
	}

	.introBox .introIndex {
		position: absolute;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
		color: #ccc;
	}

	.infoItems ul {
		list-style: none;
	}

	.infoItems ul li {
		list-style-type: circle;
		font-size: 0.95em;
	}

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
		margin-top: 35px;
	}
</style>
