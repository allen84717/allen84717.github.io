<template>
	<div class="body-wrapper">
		<div class="title">
			收費標準
		</div>
		<div class="chargeInfo-wrapper">
			<div class="design-wrapper">
				<div class="design-img">
					<img src="./designContractIcon.png">
					<br />
					<div>
						<span>設計費</span><br/>
						<span>(含3D)</span>
					</div>
				</div>
				<div class="design-item">
					<div class="item"></div>
					<div class="item">
						住宅設計
					</div>
					<div class="item">
						商空設計
					</div>
					<div class="item">
						老屋翻新
					</div>
					<div class="item"></div>
				</div>
				<div class="design-money">
					<div class="money"></div>
					<div class="money">
						5000/坪
					</div>
					<div class="money">
						6000/坪
					</div>
					<div class="money">
						6000/坪
					</div>
					<div class="money"></div>
				</div>
			</div>
			<div class="line"></div>
			<div class="watch-wrapper">
				<div class="watch-img">
					<img src="./engineerIcon.png">
					<br />
					<div>
						<span>監工費</span><br />
						<span>(視個案而定)</span>
					</div>
				</div>
				<div class="watch-desc">
					以總工程款5% ~ 8%金額計算而定
				</div>
				<div class="watch-space"></div>
			</div>
			<div class="line" style="height: 3px;"></div>
			<div class="measuring-wrapper">
				<div class="measuring-img">
					<img src="./preliminaryDesignIcon.png">
					<br />
					<span>場勘丈量</span>
				</div>
				<div class="measuring-item">
					<div class="item">室內40坪內</div>
					<div class="item">室內40坪以上</div>
				</div>
				<div class="measuring-money">
					<div class="money">4000/次</div>
					<div class="money">8000/次</div>
				</div>
			</div>
		</div>
		<div class="tips1">以上金額為未稅金額，稅金另計</div>
		<div class="pay-title">
			付款方式
		</div>
		<div class="chargeMethod-wrapper">
			<div class="design-wrapper">
				<div class="design-pay">
					設計費
				</div>
				<div class="design-pay-desc">
					7成訂金、3成尾款
				</div>
			</div>
			<div class="line"></div>
			<div class="engineeringContract-wrapper">
				<div class="engineeringContract-text">
					工程合約
				</div>
				<div class="engineeringContract-text-desc">
					<div class="desc1">
						新成屋：3成訂金、6成中期、1成尾款
					</div>
					<div class="desc2">
						舊屋翻新、毛胚屋：3成訂金、3成中期、3成中期、1成尾款
					</div>
				</div>
			</div>
		</div>

	</div>
	<myFooter></myFooter>
</template>

<script>
	import myFooter from '../myFooter/myFooter.vue'
	export default {
		components: {
			myFooter
		}
	}
</script>

<style lang="less">
	@media (min-width: 991px) {
		.title {
			text-align: center;
			font-size: 28px;
			margin-top: 20px;
			margin-bottom: 100px;
		}

		.chargeInfo-wrapper {
			display: flex;
			flex-direction: column;
			padding-left: 20%;
			padding-right: 30%;

			.line {
				top: 50%;
				width: 100%;
				height: 2px;
				margin-left: 10%;
				background-color: black;
				margin-top: 20px;
				margin-bottom: 20px;
			}

			.design-wrapper {
				flex: 1;
				display: flex;

				.design-img {
					flex: 1;
					text-align: center;
					position: relative;

					img {
						width: 100px;
						height: 100px;
						margin-bottom: 10px;
						position: absolute;
						left: 40%;
						top: 20%;
					}

					div {
						padding-right: 20px;
						position: absolute;
						top: 84%;
						left: 44%;
					}
				}

				.design-item {
					flex: 1;
					flex-direction: column;

					.item {
						flex: 1;
						display: flex;
						font-size: 22px;
						line-height: 33px;
						height: 33px;
					}
				}

				.design-money {
					flex: 1;
					font-size: 22px;
					text-align: right;
					.money {
						height: 33px;
					}
				}
			}

			.watch-wrapper {
				flex: 1;
				display: flex;

				.watch-img {
					flex: 1;
					text-align: center;
					position: relative;
					height: 180px;

					img {
						width: 100px;
						height: 100px;
						margin-bottom: 5px;
						position: absolute;
						left: 36%;
						top: 20%;
					}

					div {
						padding-right: 20px;
						position: absolute;
						top: 80%;
						left: 37%;
					}
				}

				.watch-desc {
					flex: 1;
					font-size: 22px;
				}

				.watch-space {
					flex: 1;
					font-size: 22px;
				}
			}

			.measuring-wrapper {
				flex: 1;
				display: flex;

				.measuring-img {
					flex: 1;
					text-align: center;
					position: relative;
					height: 180px;

					img {
						width: 100px;
						height: 100px;
						margin-bottom: 5px;
						position: absolute;
						left: 36%;
						top: 20%;
					}

					span {
						padding-right: 20px;
						position: absolute;
						top: 75%;
						left: 40%;
					}
				}

				.measuring-item {
					flex: 1;
					flex-direction: column;
					font-size: 22px;

					.item {
						flex: 1;
					}
				}

				.measuring-money {
					flex: 1;
					flex-direction: column;
					font-size: 22px;
					text-align: right;

					.money {
						flex: 1;
					}
				}
			}
		}

		.pay-title {
			text-align: center;
			font-size: 28px;
			margin-top: 20px;
			margin-bottom: 50px;
		}

		.tips1 {
			font-size: 20px;
			text-align: center;
			background-color: gray;
			margin-left: 30%;
			margin-right: 30%;
			margin-top: 30px;
			margin-bottom: 30px;
		}

		.chargeMethod-wrapper {
			display: flex;
			flex-direction: column;
			padding-left: 20%;
			padding-right: 30%;
			margin-bottom: 50px;

			.line {
				top: 50%;
				width: 80%;
				height: 2px;
				margin-left: 10%;
				margin-right: 10%;
				background-color: black;
				margin-top: 20px;
				margin-bottom: 20px;
			}

			.design-wrapper {
				display: flex;
				font-size: 20px;
				padding-left: 20%;
				width: 80%;

				.design-pay {
					flex-grow: 1;
					flex: 0 0 90px;
				}

				.design-pay-desc {
					flex-grow: 3;
					font-size: 20px;
				}
			}

			.engineeringContract-wrapper {
				display: flex;
				font-size: 20px;
				padding-left: 20%;

				.engineeringContract-text {
					flex-grow: 1;
					flex: 0 0 90px;
				}

				.engineeringContract-text-desc {
					flex-grow: 2;
					display: flex;
					flex-direction: column;
					font-size: 20px;

					.desc1 {
						flex: 1;
					}

					.desc2 {
						flex: 1;
					}
				}
			}
		}
	}

	@media (max-width: 990px) {
		.title {
			text-align: center;
			font-size: 28px;
			margin-top: 20px;
			margin-bottom: 20px;
		}

		.chargeInfo-wrapper {
			display: flex;
			flex-direction: column;

			.line {
				top: 50%;
				width: 90%;
				height: 2px;
				margin-left: 5%;
				margin-right: 5%;
				background-color: black;
				margin-top: 20px;
				margin-bottom: 20px;
			}

			.design-wrapper {
				flex: 1;
				display: flex;

				.design-img {
					flex: 1;
					text-align: center;
					position: relative;

					img {
						width: 80px;
						height: 80px;
					}

					span {
						padding-right: 12px;
					}
				}

				.design-item {
					flex: 1;
					flex-direction: column;

					.item {
						flex: 1;
						display: flex;
						font-size: 16px;
					}
				}

				.design-money {
					flex: 1;
					font-size: 16px;
					text-align: center;
				}
			}

			.watch-wrapper {
				flex: 1;
				display: flex;

				.watch-img {
					flex: 1;
					text-align: center;
					position: relative;

					img {
						width: 80px;
						height: 80px;
						margin-right: 20px;
					}

					span {
						margin-right: 20px;
					}
				}

				.watch-desc {
					flex: 1;
					flex-grow: 2;
					font-size: 16px;
				}

				.watch-space {
					flex: 1;
					font-size: 22px;
				}
			}

			.measuring-wrapper {
				flex: 1;
				display: flex;

				.measuring-img {
					flex: 1;
					text-align: center;
					position: relative;

					img {
						width: 80px;
						height: 80px;
						margin-right: 20px;
					}

					span {
						padding-right: 20px;
					}
				}

				.measuring-item {
					flex: 1;
					flex-direction: column;
					font-size: 16px;

					.item {
						flex: 1;
					}
				}

				.measuring-money {
					flex: 1;
					flex-direction: column;
					font-size: 16px;
					text-align: center;

					.money {
						flex: 1;
					}
				}
			}
		}

		.tips1 {
			font-size: 20px;
			text-align: center;
			background-color: gray;
			margin-left: 20%;
			margin-right: 20%;
			margin-top: 30px;
			margin-bottom: 30px;
		}

		.pay-title {
			text-align: center;
			font-size: 28px;
			margin-top: 20px;
			margin-bottom: 50px;
		}

		.chargeMethod-wrapper {
			display: flex;
			flex-direction: column;
			margin-bottom: 50px;

			.line {
				top: 50%;
				width: 80%;
				height: 2px;
				margin-left: 10%;
				margin-right: 10%;
				background-color: black;
				margin-top: 20px;
				margin-bottom: 20px;
			}

			.design-wrapper {
				display: flex;
				font-size: 16px;
				padding-left: 10%;
				width: 80%;

				.design-pay {
					flex-grow: 1;
					flex: 0 0 70px;
				}

				.design-pay-desc {
					flex-grow: 3;
					font-size: 16px;
				}
			}

			.engineeringContract-wrapper {
				display: flex;
				font-size: 16px;
				padding-left: 10%;

				.engineeringContract-text {
					flex-grow: 1;
					flex: 0 0 70px;
				}

				.engineeringContract-text-desc {
					flex-grow: 2;
					display: flex;
					flex-direction: column;
					font-size: 16px;

					.desc1 {
						flex: 1;
					}

					.desc2 {
						flex: 1;
					}
				}
			}
		}
	}
</style>
