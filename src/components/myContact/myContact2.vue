<template>
	<div class="myContact2 container">
		<div class="row">
			<div class="col-12 col-sm-6">
				<p class="text-dark text-center CN">聯絡我們</p>
				<p class="text-dark text-center EN">CONTACT</p>
				<div class="line"></div>
				<p class="text-dark text-start content"><i class="fa-solid fa-phone"
						style="width: 16px;height: 16px;"></i>| 公司電話：03-2870178</p>
				<p class="text-dark text-start content"><i class="fa-solid fa-receipt"
						style="width: 16px;height: 16px;"></i>| 統一編號：90217439</p>
				<p class="text-dark text-start content"><i class="fa-regular fa-building"
						style="width: 16px;height: 16px;"></i>| 地址：桃園市大園區春德路130號2樓</p>
				<p class="text-dark text-start content"><i class="fa-solid fa-envelope"
						style="width: 16px;height: 16px;"></i>| 信箱：Dongchiao18@gmail.com</p>
			</div>
			<div class="col-12 col-sm-6">
				<iframe class="map-iframe"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3615.5457404497192!2d121.2122299!3d25.0155471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468215aed329a83%3A0xbf30031073996898!2zRC5DIGRlc2lnbiDmnbHllqzoqK3oqIg!5e0!3m2!1szh-TW!2stw!4v1657625579696!5m2!1szh-TW!2stw"
					style="border:0;" allowfullscreen="" loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
			<div class="col-12 col-sm-6">
				<p class="text-dark text-center CN">臨時停車場</p>
				<p class="text-dark text-center EN">PARKING</p>
				<div class="line"></div>
				<p class="text-dark text-start content"><i class="fa-solid fa-square-parking"
						style="width: 16px;height: 16px;"></i>| 大園區春德路188號</p>
				<p class="text-dark text-start content"><i class="fa-solid fa-sack-dollar"
						style="width: 16px;height: 16px;"></i>| 汽車臨停每小時$20</p>
			</div>
			<div class="col-12 col-sm-6">
				<img src="./parking.png" class="img-fluid" alt="...">
			</div>
		</div>

	</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.myContact2.container {
	.row {
		img {
			height: 360px;
		}

		.map-iframe {
			height: 360px;
		}
	}

	.text-dark.text-center.CN {
		margin-bottom: 0px !important;
		font-size: 28px;
	}

	.text-dark.text-center.EN {
		font-size: 15px;
		letter-spacing: 3px;
	}

	.line {
		height: 2px;
		background-color: black;
		margin-bottom: 20px;
	}

	.map-iframe {
		height: 100%;
		width: 100%;
	}
}

@media (max-width:992px) {
	overflow-x: hidden;

	.myContact2.container {
		margin-bottom: 20px;

		.row {
			img {
				height: 280px;
			}

			.map-iframe {
				height: 280px;
			}
		}
	}


}
</style>
