<template>
	<div class="myConcept2 container-fluid top" style="margin-top: 20px;">
		<div class="row about">
			<div class="col-12 img-bg">

			</div>
			<div class="col-12 img-bg-dark">

			</div>
			<div class="col-12 img-bg-text">
				<div style="align-items: center;display: flex;height: calc(58vh);transform: translateY(10%);">
					<div class="row">
						<p class="text-start text-light col-md-1 a01"></p>
						<p class="text-start text-light col-md-11 a02">關於東喬空間設計</p>
						<p class="text-start text-light col-sm-1 a03"></p>
						<p class="text-start text-light col-sm-6 a04">
							東喬空間設計，其作品強調材質本身自然質感及精準的比例處理，透過光影潤飾空間，改造與規劃讓每個人更享受在家的時光。</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="myConcept2 container-fluid bottom" ref="bottomDiv">
		<div class="row concept">
			<div class="col-12">
				<div class="row block ms-md-3">
					<div class="col-4 design-title"></div>
					<div class="col-8 design-title">
						<h1>設計理念</h1>
					</div>
					<div class="picBox col-12 col-md-4 img">
						<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
							<div class="carousel-inner">
								<div class="carousel-item active " data-bs-interval="3000">
									<img src="./MG0730.png" class="d-block w-100" alt="...">
								</div>
								<div class="carousel-item " data-bs-interval="3000">
									<img src="./MG0747.png" class="d-block w-100" alt="...">
								</div>

							</div>
							<button class="carousel-control-prev" type="button"
								data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Previous</span>
							</button>
							<button class="carousel-control-next" type="button"
								data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Next</span>
							</button>
						</div>
						<img src="./MG0730_2.png" class="img-fluid" alt="...">
					</div>
					<div class="col-12 col-md-4 content" style="font-size: 26px;">
						<div class="row">
							<div class="col-md-3"></div>
							<div class="col-md-9 col-12 fs-5">
								<h1 class="text-center">設計理念</h1>
								<p class="text3">沒有對話的設計</p>
								<p class="text2">無法永續</p>
								<p class="text">走進空間裡建築</p>
								<p class="text2">勾勒美好</p>
								<p class="text">擅長與業主建構空間理念需求</p>
								<p class="text">創造出一幅生活具象化的作品</p>
								<p class="text">不只擘劃量體的美</p>
								<p class="text">以量身打造現代質感的人文居所</p>
								<p class="text">將工學和美學合而為一</p>
								<p class="text">自有工班的一條龍服務、提供完善保固</p>
								<p class="text2">只為了讓家富有內涵又完整的生活環境</p>
								<p class="text">我們相信設計源於生活</p>
								<p class="text">細節成就品質。</p>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-4 img-2">
						<img src="./MG0747_2.png" class="img-fluid" alt="...">
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

		}
	},
}
</script>

<style lang="less">
.myConcept2.container-fluid.top {
	.row.about {
		height: calc(58vh);

		.col-12.img-bg {
			position: absolute;
			top: 0px;
			width: 100%;
			height: calc(58vh);
			// background: url('https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
			background: url('https://images.pexels.com/photos/534174/pexels-photo-534174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			width: 100%;
		}

		.col-12.img-bg-dark {
			position: absolute;
			top: 0px;
			width: 100%;
			background-color: black;
			height: calc(58vh);
			z-index: 3;
			opacity: .4;
		}

		.col-12.img-bg-text {
			position: absolute;
			top: 0px;
			width: 100%;
			height: calc(58vh);
			z-index: 6;
		}

		.a01 {
			font-size: 40px;
		}

		.a02 {
			font-size: 40px;
		}

		.a03 {
			font-size: 24px;
		}

		.a04 {
			font-size: 24px;
		}
	}
}

.myConcept2.container-fluid.bottom {
	.row.concept {
		.text {
			margin-bottom: 1px;
		}

		.text2 {
			margin-bottom: 20px;
		}

		.text3 {
			margin-top: 40px;
			margin-bottom: 1px;
		}

		.img {
			height: auto;
		}

		.block {
			height: auto;
		}

		.img-fluid {
			height: 80%;
			padding-left: 60px;
		}

		.col-md-9.col-12 {
			.text-center {
				display: none;
			}
		}

		.col-12.col-md-4.img {
			.carousel.slide {
				display: none;
			}
		}
	}
}

.carouselExampleSlidesOnly {
	height: 60vh;
}

.carousel-item {
	height: 100% !important;
}

@media (max-width: 992px) {
	.myConcept2.container-fluid {
		.col-12.col-md-6 {
			.text-center {
				text-align: right !important;
			}
		}

		.a01 {
			font-size: 40px;
			margin-bottom: 44%;
		}

		.a02 {
			font-size: 30px !important;
		}

		.a03 {
			font-size: 24px;
			margin: 0px !important;
		}

		.a04 {
			font-size: 18px !important;
		}
	}

	.myConcept2.container-fluid.bottom {
		.design-title {
			display: none;
		}

		.text {
			margin-bottom: 1px;
		}

		.text2 {
			margin-bottom: 20px;
		}

		.text3 {
			margin-top: 40px;
			margin-bottom: 1px;
		}

		.row.concept {
			.img-fluid {
				height: 100%;
				padding-left: 0px;
			}

			.col-12 {
				.row.block.ms-md-3 {
					.col-12.col-md-4.content {
						margin-bottom: 10px;

						.col-md-9.col-12 {
							h1 {
								display: block;
								font-weight: 600;
								margin-top: 40px;
							}

							p {
								font-size: 20px;
								text-align: center;
							}
						}
					}

					.col-12.col-md-4.img-2 {
						margin-top: 20px;
						margin-bottom: 20px;

						img {
							display: none;
						}
					}

					.col-12.col-md-4.img {
						.img-fluid {
							display: none;
						}

						.carousel.slide {
							display: block;
						}
					}
				}
			}
		}
	}
}

@media (max-width:420px) {
	.carousel-item {
		height: 66vh;
		overflow: hidden;
	}
}

@media (max-width:376px) {
	.carousel-item {
		// height: 77vh !important;
	}

}
@media (max-width:375px) {
	.carousel-item {
		// height: 64vh !important;
	}

}
</style>
