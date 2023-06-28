<template>
	<div class="container-fluid footer-wrapper3 footer">
		<footer class="row">
			<div class="col-12">
				<p class="text-center text-light title">東喬設計</p>
				<div class="row">
					<div class="col-md-4 col-2"></div>
					<div class="col-md-4 col-8 line"></div>
					<div class="col-md-4 col-2"></div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4 col-12" @click="go('tel:+886-3-287-0178')">
					<p class="text-end text-light">
						<i class="fa-solid fa-phone"></i>+886-3-287-0576
					</p>
				</div>
				<div class="col-md-4 col-12" @click="go('tel:+886-3-287-0576')">
					<p class="text-center text-light">
						<i class="fa-solid fa-fax"></i>+886-3-287-0576
					</p>
				</div>
				<div class="col-md-4 col-12" @click="go('mailto:Dongchiao18@gmail.com')">
					<p class="text-start text-light">
						<i class="fa-solid fa-envelope"></i>Dongchiao18@gmail.com
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4 col-12">
					<p class="text-end text-light">
						<i class="fa-solid fa-location-pin"></i>桃園市大園區春德路130號2樓
					</p>
				</div>
				<div class="col-md-4 col-12">

				</div>
				<div class="col-md-4 col-12">
					<p class="text-start text-light">
						<i class="fa-solid fa-clock"></i>08:00~17:00
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
			}
		}
	}
</script>
<style lang="less">
	.container-fluid.footer-wrapper3 {
		// background-color: #8E8E8E;
		background-image: url('725.jpg');
		background-size: cover;
		height: 130px;
		border-top: 2px solid white;
		.row {
			padding-left: 15%;
			padding-right: 15%;
		}
		
		.text-center.text-light.title {
			font-size: 24px;
			margin-bottom: 2px;
		}
		
		.col-md-4.col-8.line {
			height: 2px;
			background-color: white;
			margin-bottom: 7px;
		}
	}

	@media (max-width: 991px) {
		.container-fluid.footer-wrapper3 {
			background-color: #8E8E8E;
			height: auto;
			position: absolute;
			border-top: 2px solid white;
			.col-md-4.col-8.line {
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
		}
		
	}
</style>
