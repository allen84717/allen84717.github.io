<template>
	<div :class="designClass" class="design-item" ref="designItem">
		<div class="row g-2">
			<div class="col-12" style="font-size: 32px;" v-if="screenWidth > 992">
				服務項目
			</div>
			<div class="col-lg-6 col-12">
				<div class="row g-2 h-100">
					<div class="col-lg-6 col-12 area">
						<button class="btn h-100 w-100 a01">
							<div class="h-100">
								<div class="row mt-0 mr-0 ml-0 h-100"
									style="font-size: 26px;margin-left: auto;margin-right: auto; display: flex;align-items: center;justify-content: center;">
									<div class="col-12" style="padding-top: 0px;">
										<p class="text-center mb-0 text" style="letter-spacing:8px">設計</p>
										<p class="text-center mb-0 text" style="letter-spacing:8px">項目</p>
										<div class="row">
											<div class="col-4"></div>
											<div class="col-4 lineDiv">
												<div class="mt-2 mb-2 line">
												</div>
											</div>
											<div class="col-4"></div>
											<div class="col-12 text-center more" style="padding-top: 2px;">
												<button type="button" class="btn btn-outline-light moreBtn"
													style="width: 110px;">
													<router-link to="/Process"
														style="text-decoration:none; color: white;letter-spacing:4px;color: white;">
														<span class="moreSpan">more</span>
													</router-link>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</button>
					</div>
					<div class="col-lg-6 col-12 area" v-for="(item, index) in list" :key="index">
						<button class="btn" :class="item.btnClass">
							<router-link v-if="item.url.indexOf('http') == -1" :to="item.url">
								<div class="h-100">
									<div class="row mt-0 mr-0 ml-0 h-100"
										style="font-size: 26px;margin-left: auto;margin-right: auto; display: flex;align-items: center;justify-content: center;">
										<div class="col-12">
											<div class="text-center icon">
												<i :class="item.class"
													style="width: 40px;height: 40px;color: #6F6E6F;"></i>
											</div>
											<h3 class="mb-0" style="font-size: 24px;">{{item.title}}</h3>
											<div class="row">
												<div class="col-4"></div>
												<div class="col-4 lineDiv">
													<div class="mt-2 mb-2" style="height: 2px;background-color: black;">
													</div>
												</div>
												<div class="col-4"></div>
												<div class="col-3"></div>
												<div class="col-6 col-md-12 text-center itemContentDiv" style="padding-top: 2px;">
													<p class="itemContent" style="font-size: 14px;">{{item.content}}</p>
												</div>
												<div class="col-3"></div>
											</div>
										</div>
									</div>
								</div>
							</router-link>
							<a v-if="item.url.indexOf('http') != -1" :href="item.url" target="_blank">
								<div class="h-100">
									<div class=" row mt-0 mr-0 ml-0 h-100"
										style="font-size: 26px;margin-left: auto;margin-right: auto; display: flex;align-items: center;justify-content: center;">
										<div class="col-12">
											<div class="text-center">
												<i :class="item.class"
													style="width: 40px;height: 40px;color: #6F6E6F;"></i>
												<p class="mb-0" style="font-size: 24px;">{{item.title}}</p>
											</div>
											<div class="row">
												<div class="col-4"></div>
												<div class="col-4 lineDiv">
													<div class="mt-2 mb-2" style="height: 2px;background-color: black;">
													</div>
												</div>
												<div class="col-4"></div>
												<div class="col-3"></div>
												<div class="col-6 col-md-12 text-center itemContentDiv" style="padding-top: 2px;">
													<p class="itemContent" style="font-size: 14px;">{{item.content}}</p>
												</div>
												<div class="col-3"></div>
											</div>
										</div>
									</div>
								</div>
							</a>
						</button>
					</div>
				</div>
			</div>
			<div class="col-lg-6 col-12 img" style="position: relative;">
				<div style="position: absolute;left: -10% top:-10%;border:1px soild coffee"></div>
				<img src="../../../public/img/homepageBk/pexels-cup-of-couple-7657599.jpg" class="img-fluid" alt="...">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					title: '住宅設計',
					content: '你想在家的時間會越來越長 想出去的衝動會越來越少',
					url: '/ProtfolioEnter/Protfolio',
					class: {
						'fa-solid': true, 'fa-house': true
					},
					btnClass: {
						a02: true,
					}
				}, {
					title: '建築設計',
					content: '秉持形塑空間必須內外皆美 創造出使用者的生活藝術',
					url: '/ProtfolioEnter/Protfolio2',
					class: {
						'fa-solid': true, 'fa-briefcase': true
					},
					btnClass: {
						a03: true,
					}
				}, {
					title: '設計諮詢',
					content: '量身打造你的裝潢需求 將工學和美學合而為一',
					url: 'https://docs.google.com/forms/d/e/1FAIpQLSfNbriQ1HnFaY3pL898-uaH8CU2LKURiImxMrTOwHlI2NSX2g/viewform?usp=send_form',
					class: {
						'fa-solid': true, 'fa-comment': true
					},
					btnClass: {
						a04: true,
					}
				}]
			}
		},
		computed: {
			designClass: {
				get: function() {
					if (screen.width > 992)
						return {
							'container': true
						}
					else
						return {
							'container-fluid': true
						}
				}
			},
			screenWidth: {
				get:function () {
					return screen.width;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	a {
		text-decoration: none !important;
	}
	
	.container-fluid.design-item,
	.container.design-item {
		overflow-x: hidden;
		width: 100%;
		position: relative;
		margin-bottom: 80px;

		.row.g-2 {
			.col-12 {
				.row.mt-0.mr-0.ml-0.h-100 {
					// border: 1px solid black;
					box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
					.col-12 {
						padding-top: 20px;
					}

					.more {
						padding-top: 0px;

						a {
							color: white !important
						}
					}
				}
			}

			.img {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		.col-lg-6.col-12 {
			.row.g-2.h-100 {
				.mb-0 {
					font-family: 'Noto Sans TC', '微軟正黑體', sans-serif;
					color: #6F6E6F;
					font-size: 22px !important;
					letter-spacing: 1px;
					font-weight: 700;
				}

				.a01 {
					padding: 0px;
					height: 100% !important;
					background-color: #B0AFAF;

					.text {
						color: white;
					}

					.lineDiv {
						padding-left: 20px;
						padding-right: 30px;
						text-align: center;
						margin-top: 20px;
						margin-bottom: 10px;

						.line {
							height: 2px;
							background-color: white;
						}
					}



					.h-100 {
						height: 100% !important;
					}
				}

				.a02 {
					padding: 0px;
					height: 100% !important;
					border-radius: 10%;

					.h-100 {
						height: 250px !important;
					}


				}

				.a03 {
					padding: 0px;
					height: 100% !important;
					border-radius: 10%;

					.h-100 {
						height: 250px !important;
					}
				}

				.a04 {
					padding: 0px;
					height: 100% !important;
					border-radius: 10%;

					.h-100 {
						height: 250px !important;
					}
				}
			}
		}
		
		.itemContentDiv {
			padding: 14px 55px 14px 55px;
		}
		
		.itemContent {
			margin-bottom: 0px;
			color: #939393;
			font-size: 0.8em;
			letter-spacing: 0.8px;
			word-break: keep-all;
		}
		
		.col-4.lineDiv {
			margin-top: 20px;
			margin-bottom: 10px;
		}
	
	}

	@media (max-width: 992px) {
		.container-fluid.design-item {
			padding: 0px;
			position: relative;
			background-color: #F0F0F0;
			margin-bottom: 0px;
			
			.itemContentDiv {
				padding-left: 0px !important;
				padding-right: 0px !important;
			}

			.moreBtn {
				border-radius: 0%;
				border: 2px solid white;

				.moreSpan {
					font-family: "Roboto", 'Microsoft JhengHei';
					letter-spacing: 1.8px;
				}
			}

			.itemContent {
				margin-bottom: 0px;
				color: #939393;
				font-size: 0.8em;
				letter-spacing: 0.8px;
				word-break: keep-all;
			}


			.row.g-2 {
				.col-6 {
					.row.mt-0.mr-0.ml-0.h-100 {
						border: 0px solid black;
						border-radius: 0%;
					}
				}

				.col-12 {
					.row.mt-0.mr-0.ml-0.h-100 {
						border: 0px solid black;
						border-radius: 0%;
					}
				}

				.img {
					display: none;
				}
			}

			.col-lg-6.col-12 {
				.row.g-2.h-100 {
					.col-lg-6.col-12.area {
						margin-top: 10px !important;


						.icon {
							display: flex;
							justify-content: center;
							align-items: center;
							height: 85px;
							
						}
					}

					.btn.h-100.w-100 {
						.h-100 {
							height: 250px !important;

							.btn.btn-outline-dark {
								width: 28%;
							}
						}
					}

					.mb-0 {
						font-family: 'Noto Sans TC', '微軟正黑體', sans-serif;
						color: #6F6E6F;
						font-size: 22px !important;
						letter-spacing: 1px;
						font-weight: 700;
					}

					.a01 {
						padding: 0px;
						background-color: #B0AFAF;
						border-radius: 0%;

						.lineDiv {
							padding-left: 40px;
							padding-right: 40px;
							text-align: center;
							margin-top: 20px;
							margin-bottom: 20px;

							.line {
								height: 2px;
								background-color: white;
							}
						}

						.text {
							color: white;
						}

						.h-100 {
							height: 250px !important;
						}


					}

					.a02 {
						padding: 0px;
						background-color: white;
						border-radius: 0%;
						.h-100 {
							height: 250px !important;
						}
					}

					.a03 {
						padding: 0px;
						background-color: white;
						border-radius: 0%;
						.h-100 {
							height: 250px !important;
						}
					}

					.a04 {
						padding: 0px;
						background-color: white;
						border-radius: 0%;
						.h-100 {
							height: 250px !important;
						}
						
						
					}
				}
			}
		}
	}
</style>
