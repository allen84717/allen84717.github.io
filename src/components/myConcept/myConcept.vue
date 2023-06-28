<template>
	<div class="container-fluid concept-wrapper">
		<div class="row first">
			<div class="col-md-4"></div>
			<div class="col-12 col-md-4 border-bottom border-dark">
				<p class="text-center fs-4">
					設計理念
				</p>
			</div>
			<div class="col-md-4"></div>
		</div>
		<div class="row second">
			<div class="col-md-4"></div>
			<div class="col-12 col-md-4">
				<p class="text-center fs-6">
					構築完美細膩居宅質感
				</p>
				<p class="text-center fs-6">
					賦予空間嶄新生命力
				</p>
			</div>
			<div class="col-md-4"></div>
		</div>
		<div class="row third">
			<div class="col-lg-4 col-6">
				<p class="text-end fs-4 text-warning">傾聽</p>
				<p class="text-end fs-6">您的需求為設計靈感之動因</p>
				<div class="line"></div>
				<p class="text-end fs-4 text-warning">空間</p>
				<p class="text-end fs-6">注重空間流暢、動線規劃</p>
				<div class="line"></div>
				<p class="text-end fs-4 text-warning">機能</p>
				<p class="text-end fs-6">收納、使用機能注入空間完美結合</p>
				<div class="line"></div>
			</div>
			<div class="col-lg-4 middle">
			</div>
			<div class="col-lg-4 col-6">
				<!-- <img src="./menuLogo.png" /> -->
				<div class="height100"></div>
				<p class="text-start fs-4 text-warning">美感</p>
				<p class="text-start fs-6">比例、線條精準分析，再利用質感、色彩、光影共構完美且舒適的創意空間</p>
				<div class="line"></div>
				<p class="text-start fs-4 text-warning">生活</p>
				<p class="text-start fs-6">對未來生活的期待與滿足體現</p>
				<div class="line"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="less">
	.container-fluid.concept-wrapper {
		background-image: url('./background.jpg');
		position: relative;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-position: center;
		background-size: cover;
		
		.row.first {
			padding-top: 100px;
			margin-bottom: 50px;
		}
		
		.row.second {
			margin-top: 20px;
		}
		
		.row.third {
			height: 600px;
			padding-left: 10%;
			padding-right: 10%;
			.col-lg-4.middle {
				background-image: url('./middleImg.png');
				position: relative;
				background-repeat: no-repeat;
				background-position: center;
				background-size: 300px 80% ;
			}
			
			.line {
				background-color: black;
				height: 1px;
				margin-top: 10px;
				margin-bottom: 70px;;
			}
			
			.col-lg-4.col-6 {
				.height100 {
					width: 120px;
					height: 100px;
					margin-bottom: 60px;
				}
			}
		}
	}
	
	@media (max-width: 992px) {
		.container-fluid.concept-wrapper {
			.row.third {
				.col-lg-4.middle {
					display: none;
				}
				.col-md-4.col-6 {
					.text-end {
						text-align: left !important;
					}
			
				}
			}
		}
	}
</style>
