<template>
	<div class="container-fluid footer-wrapper3 footer">
		<footer class="row" style="margin-left: 0px;">
			<div class="col-12 titleRow">
				<span class="text-center text-light title en" style="font-family: Heebo;">D.C design <span
						class="text-center text-light title cn" style="font-family: Heebo;">東喬設計</span></span>
				<div class="row">
					<div class="col-md-4 col-1"></div>
					<div class="col-md-4 col-10 line"></div>
					<div class="col-md-4 col-1"></div>
				</div>
			</div>
			<div class="row d-flex justify-content-center">
				<div class="col-md-4 col-12 text-center myflex w-100 d-flex  justify-content-center">
					<div class="phone" style="flex: 0 0 60px;height: 35px;" @click="go('tel:+886-3-287-0178')">
						<i style="width: 35px;height: 35px;color:white" class="fa-solid fa-phone"></i>
					</div>
					<div class="mail" style="flex: 0 0 60px;height: 35px;" @click="go('mailto:Dongchiao18@gmail.com')">
						<i style="width: 35px;height: 35px;color:white" class="fa-solid fa-envelope"></i>
					</div>
					<div class="fb" style="flex: 0 0 60px;height: 35px;" @click="iconClk('fb')">
						<i style="width: 35px;height: 35px;color:white" class="fa-brands fa-facebook"></i>
					</div>
					<div class="ig" style="flex: 0 0 60px;height: 35px;" @click="iconClk('ig')">
						<i style="width: 35px;height: 35px;color:white" class="fa-brands fa-instagram"></i>
					</div>
					<div class="line" style="flex: 0 0 60px;height: 35px;" @click="iconClk('line')">
						<i style="width: 35px;height: 35px;color:white" class="fa-brands fa-line"></i>
					</div>
				</div>
			</div>
			<div class="row bottom-flex">
				<div class="col-md-4 col-12">
					<p class="text-center text-light address">
						<i class="fa-solid fa-location-pin" style="margin-right: 5px;"></i>桃園市大園區春德路130號2樓
					</p>
				</div>
				<div class="col-md-4 col-12">

				</div>
				<div class="col-md-4 col-12">
					<p class="text-center text-light time">
						<i class="fa-solid fa-clock" style="margin-right: 5px;"></i>08:00~17:00
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>
<script>
	export default {
		methods: {
			go(url) {
				location.href = url;
			},
			iconClk(str) {
				let url = '';
				switch (str) {
					case 'ig':
						url = 'https://www.instagram.com/dongcio_design/';
						break;
					case 'fb':
						url = 'https://www.facebook.com/dongcio.design';
						break;
					case 'line':
						url = 'line://ti/p/~@dongcio';
						break;
				}
				window.open(url, '_blank');
			}
		}
	}
</script>
<style lang="less" scoped>
	.container-fluid.footer-wrapper3 {
		// background-color: #8E8E8E;
		// background-image: url('725.jpg');
		background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('https://images.pexels.com/photos/6739231/pexels-photo-6739231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
		background-size: cover;
		height: 155px !important;
		border-top: 2px solid white;

		.row {
			padding-left: 15%;
			padding-right: 15%;
			justify-content: center;

			.myflex {
				display: flex;
				margin-bottom: 8px;
				margin-top: 5px;
			}
		}
		
		.titleRow {
			text-align: center;
			padding-top: 10px;
			padding-bottom: 0px;
			line-height: 30px;
		}

		.text-center.text-light.title {
			font-size: 24px;
		}

		.col-md-4.col-10.line {
			height: 2px !important;
			background-color: white !important;
			margin-bottom: 7px;
		}

		.bottom-flex {
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.col-md-4.col-12 {}
		}

		.row.bottom-flex {
			.text-center.text-light {
				margin-bottom: 3px;
			}

			.text-center.text-light.time {
				padding-left: 0px !important;
			}
		}
	}

	@media (max-width: 992px) {
		.container-fluid.footer-wrapper3 {
			background-color: #8E8E8E;
			height: auto !important;
			position: absolute;
			border-top: 2px solid white;
			padding-left: 0px !important;
			padding-right: 0px !important;
			margin-bottom: 0px;
			overflow-x: hidden;
			height: 160px;
			
			.titleRow {
				text-align: center;
				padding-top: 10px;
				padding-bottom: 0px;
				line-height: 30px;
				.en {
					font-size: 21px !important;
				}
				
				.cn {
					font-size: 18px !important;
				}
			}

			.row {
				padding-left: 0px !important;
				padding-right: 0px !important;

				.col-md-4.col-12 {
					padding-left: 0px !important;
					padding-right: 0px !important;
				}
				
				

				.title {
					margin-top: 8px;
					line-height: 22px;
					margin-bottom: 5px;
				}

				.line {}

				.myflex {
					justify-content: center;

					.line {
						margin-top: 0px;
					}
				}
			}

			.col-md-4.col-10.line {
				height: 2px;
				background-color: white;
				margin-bottom: 7px;
			}

			.text-end.text-light {
				text-align: center !important;
			}

			.text-start.text-light {
				text-align: center !important;
			}

			.row.bottom-flex {
				.text-center.text-light {
					margin-bottom: 5px;
					padding-left: 35px;
					font-family: Heebo;
				}

				.text-center.text-light.address {
					padding-left: 0px !important;
					line-height: 21px;
					font-size: 14px;
				}

				.text-center.text-light.time {
					padding-left: 35px;
					font-family: Heebo;
					line-height: 21px;
				}
			}
		}

	}
</style>
