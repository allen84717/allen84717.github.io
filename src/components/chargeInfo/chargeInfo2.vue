<template>
	<div class="container chargeInfo-wrapper">
		<div class="row title">
			<div class="col-12">
				<p class="h2 text-center">收費標準</p>
			</div>
		</div>
		<div class="row d-flex justify-content-around" style="height: 180px;">
			<div class="col-4 col-md-3 d-flex justify-content-center align-items-center">
				<figure class="figure first">
					<div class="chargeIconBox d-flex justify-content-center align-items-center flex-column">
						<img class="img-fluid" style="height: 100px;width: 100px;margin-left: 1rem;"
							src="./designContractIcon.png" alt="...">
						<figcaption class="figure-caption text-center fs-5 chargeTitle">設計費</figcaption>
						<figcaption class="figure-caption text-center chargeSubTitle">(含3D)
						</figcaption>
					</div>
				</figure>
			</div>
			<div class="col-8 d-flex justify-content-between align-items-center">
				<div class="col-sm-5 d-flex justify-content-center align-items-start flex-column">
					<p class="text-start fs-7 textGray">住宅設計</p>
					<p class="text-start fs-7 textGray">商空設計</p>
					<p class="text-start fs-7 textGray">老屋翻新</p>
				</div>
				<div class="col-sm-5 d-flex justify-content-center align-items-end flex-column">
					<p class="text-start fs-7 textGray">5000/坪</p>
					<p class="text-start fs-7 textGray">6000/坪</p>
					<p class="text-start fs-7 textGray">6000/坪</p>
				</div>
			</div>

		</div>
		<div class="row d-flex justify-content-around" style="height: 180px;">
			<div class="col-4 col-md-3 d-flex justify-content-center align-items-center">
				<figure class="figure second">
					<div class="chargeIconBox d-flex justify-content-center align-items-center flex-column">
						<img class="img-fluid" style="height: 100px;width: 100px;" src="./engineerIcon.png" alt="...">
						<figcaption class="figure-caption text-center fs-5 chargeTitle">監工費
						</figcaption>
						<figcaption class="figure-caption text-center chargeSubTitle">(視個案而定)
						</figcaption>
					</div>
				</figure>
			</div>
			<div class="col-8 d-flex justify-content-start align-items-center">
				<p class="text-start fs-7 textGray ">以總工程款5% ~ 8%金額計算而定</p>
			</div>
		</div>
		<div class="row d-flex justify-content-around" style="height: 180px;">
			<div class="col-4 col-md-3 d-flex justify-content-center align-items-center">
				<figure class="figure third" style="padding-left: 0px;">
					<div class="chargeIconBox d-flex justify-content-center align-items-center flex-column">
						<img class="img-fluid" style="height: 100px;width: 100px;" src="./preliminaryDesignIcon.png"
							alt="...">
						<figcaption class="figure-caption text-center fs-5 chargeTitle">場勘丈量
						</figcaption>
					</div>
				</figure>
			</div>
			<div class="col-8 d-flex justify-content-between align-items-center">

				<div class="col-sm-5 col-7 d-flex justify-content-center align-items-start flex-column">
					<p class="text-start fs-7 textGray">室內40坪內</p>
					<p class="text-start fs-7 textGray">室內40坪以上</p>
				</div>
				<div class="col-sm-5 col d-flex justify-content-center align-items-end flex-column">
					<p class="text-start fs-7 textGray">3000/次</p>
					<p class="text-start fs-7 textGray">6000/次</p>
				</div>
			</div>
		</div>
		<div class="notice alert alert-secondary text-center fs-5" role="alert" style="color: rgb(131 130 130)">
			以上金額為未稅金額，稅金另計
		</div>
		<div class="row title">
			<div class="col-12">
				<p class="h2 text-center">付款方式</p>
			</div>
		</div>
		<div class="row" style="height: 180px;">
			<div class="col-4 col-md-3">
				<p class="text-center fs-7 textGray">設計費</p>
			</div>
			<div class="col-8 col-md-9">
				<p class="text-start fs-7 textGray">7成訂金、3成尾款</p>
			</div>
		</div>
		<div class="row last" style="height: 180px;">
			<div class="col-4 col-md-3">
				<p class="text-center fs-7 textGray">工程合約</p>
			</div>
			<div class="col-8 col-md-9">
				<p class="text-start fs-7 textGray">分四階段收費：30%訂金、30%木工進場前、30%油漆進場前、10%尾款</p>
			</div>
		</div>
	</div>
	<myFooter></myFooter>
</template>

<script>
import myFooter from '../myFooter/mobileFooter.vue'
export default {
	components: {
		myFooter
	}
}
</script>

<style lang="less">
.container.chargeInfo-wrapper {
	.row {
		margin-top: 50px !important;
		border-bottom: 1px solid black !important;


		.chargeBox {
			width: 30%;
		}

		.coco {
			// align-items: unset !important;
			// padding-left: 10%;
		}
	}

	.alert.alert-secondary.text-center.notice {
		color: black;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.row.last {
		border-bottom: 0px !important;
	}

	.row.title {
		.col-12 {
			margin-bottom: 50px !important;
		}
	}
}

.figure {
	width: 100%;
}

.chargeIconBox {
	width: 100%;

}

.chargeTitle {
	// text-align: center;
}

.chargeSubTitle {
	font-size: .8rem !important;
}

.fs-7 {
	font-size: 1.1rem !important;
}



@media (max-width: 990px) {


	.container.chargeInfo-wrapper {
		margin-top: 20%;

		.row {
			margin-top: 10px !important;

			.coco {
				align-items: unset !important;
				// padding-left: 10%;
			}

			.col-4 {
				.figure.first {
					// padding-left: 18px !important;

					img {
						width: 80px !important;
						height: 80px !important;
					}
				}

				.figure.third {
					.figure-caption {
						// padding-left: 15px !important;
					}
				}

				.fs-5 {
					font-size: 16px !important;
					// padding-left: 5px !important;
				}
			}

			.fs-4 {
				font-size: .8rem !important;
			}
		}
	}

	.notice.fs-5 {
		font-size: 18px !important;
	}
}

@media (max-width:576px) {

	.textGray {
		color: #6c757d;

	}
}
</style>
