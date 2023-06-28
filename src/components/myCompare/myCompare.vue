<template>
	<div class="container-fluid compare">
		<div class="row bg">
			<div class="col-12 col-md-5 L-bg">
				<div class="">
					<h2 class="title" style="color: #5c636a;">你的夢想，我們實現</h2>
					<p class="content">一切從生活習慣開始</p>
					<p class="content">我們的每項設計都是你日常的延伸</p>
					<p class="content">誰說夢想與現實距離注定遙不可及</p>
					<p class="content">在這裡，設計讓夢想與你縮短距離直到觸手可及</p>
				</div>
				<div class="row btn-area">
					<div class="col-12" :class="btnArea">
						<a href="https://is.gd/3NtF3m" target="_blank">
							<button type="button" class="btn btn-secondary btn-L"><span
									class="text">線上預約</span></button>
						</a>
						<router-link style="margin-left: 20px;" to="/Process">
							<button type="button" class="btn btn-outline-secondary btn-R"><span
									class="text">服務流程</span></button>
						</router-link>
					</div>
				</div>
			</div>
			<div class="col-md-1"></div>
			<div class="col-12 col-md-6 img">
				<div class="afterContainer" @mousemove="moveCompare" @touchmove="tMoveCompare">
					<img class="afterPic" src="../../../public/img/homepageBk/對照圖1-L.jpg" />
					<div class="beforeContainer">
						<img class="beforePic" src="../../../public/img/homepageBk/對照圖1-R.jpg" />
					</div>
					<div class="boundariesBox d-flex flex-column align-items-center">
						<div class="topLine"></div>
						<div class="midBox d-flex justify-content-around align-items-center">
							<i class="fa-solid fa-angle-left"></i>
							<i class="fa-solid fa-angle-right"></i>
						</div>
						<div class="botLine"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				compareXPos: '50%',
			}
		},
		computed: {
			btnArea: function() {
				if (screen.width > 992) {
					return {
						'text-start': true
					}
				}
				return {
					'text-center': true
				}
			}
		},
		methods: {
			moveCompare(event) {
				let clientXPos = event.clientX;

				let compareBox = event.target;
				let compareBoxX = compareBox.getBoundingClientRect().x;
				let compareBoxWidth = compareBox.getBoundingClientRect().width;

				this.compareXPos = (clientXPos - compareBoxX) / compareBoxWidth * 100;

				document.querySelector('.beforeContainer').style.width = this.compareXPos + '%';
				document.querySelector('.boundariesBox').style.left = this.compareXPos + '%';
			},

			tMoveCompare(event) {
				let clientXPos = event.touches[0].clientX;

				let compareBox = event.target;
				let compareBoxX = compareBox.getBoundingClientRect().x;
				let compareBoxWidth = compareBox.getBoundingClientRect().width;

				this.compareXPos = (clientXPos - compareBoxX) / compareBoxWidth * 100;

				document.querySelector('.beforeContainer').style.width = this.compareXPos + '%';
				document.querySelector('.boundariesBox').style.left = this.compareXPos + '%';
			},

		}
	}
</script>

<style lang="less">
	.container-fluid.compare {
		.bg {
			padding: 10% 20% 10% 20%;
			background-color: #f4f4f4 !important;
			// height: 800px;

			.L-bg {
				background-color: white;
				padding-top: 45px;
			}

			.title {
				margin-top: 20px;
				font-size: 28px;
				margin-bottom: 40px;
			}

			.content {
				margin-bottom: 8px;
			}

			.btn-area {
				margin-top: 30px;
				margin-bottom: 30px;


				.btn-L,
				.btn-R {
					border-radius: 0%;
					width: 55%;
					width: 150px;

				}

				.text {
					font-family: "Roboto", 'Microsoft JhengHei';
					font-size: 14px;
					letter-spacing: 1.8px;
				}
			}

			//比對圖
			.afterContainer {
				position: relative;
				width: 100%;
				overflow: hidden;

				.afterPic {
					width: 100%;
				}

				.beforeContainer {
					position: absolute;
					top: 0;
					left: 0;
					width: 50%;
					height: 100%;
					overflow: hidden;

					.beforePic {
						height: 100%;
						width: auto;

					}
				}

				.boundariesBox {
					position: absolute;
					top: 0;
					left: 50%;
					width: 50px;
					height: 100%;
					filter: brightness(100);
					pointer-events: none;
					overflow: hidden;
					transform: translateX(-50%);


					.topLine,
					.botLine {
						width: 0%;
						height: 50%;
						border-left: 2px solid #FFF;
					}

					.midBox {
						border: 2px solid #FFF;
						border-radius: 50%;
						width: 50px;
						height: 15%;
					}
				}
			}
		}

		@media (max-width: 992px) {
			.bg {
				background-color: #f4f4f4 !important;
				padding: 0%;

				.afterContainer {
					.boundariesBox {
						.midBox {
							border: 2px solid #FFF;
							border-radius: 50%;
							width: 40px;
							height: 20% !important;
						}
					}
				}
			}

			.row.bg {
				.L-bg {
					margin-top: 40px;
					margin-bottom: 20px;

					.title {
						font-size: 28px;
						font-family: Heebo;
					}

					.content {
						font-size: 16px;
						font-family: Heebo;
						font-weight: 500;
						letter-spacing: 1.8px;
					}

					.btn-area {
						margin-top: 30px;
						margin-bottom: 30px;

						.btn-L,
						.btn-R {
							border-radius: 0%;
							width: 55%;
							width: 100px;

						}

						.text {
							font-family: "Roboto", 'Microsoft JhengHei';
							font-size: 14px;
							letter-spacing: 1.8px;
						}
					}
				}

				.col-12.col-md-6.img {
					padding-left: 0px !important;
					padding-right: 0px !important;

				}
			}
		}
	}
</style>
