<template>
	<div class="contact-wrapper">
		<div class="top">
			<div class="text">
				<div class="block1">
					<span style="font-size: 28px;color: black;">聯絡我們</span> <br />
					<span style="font-size: 15px;color: black; letter-spacing: 3px;">CONTACT</span>
				</div>
				<div class="line"></div>
				<div class="phone">
					<div class="icon">
						<i class="fa-solid fa-phone" style="width: 16px;height: 16px;"></i>
						<span class="text">| 公司電話：03-3178639</span>
					</div>
				</div>
				<div class="company">
					<div class="icon">
						<i class="fa-regular fa-building" style="width: 16px;height: 16px;"></i>
						<span class="text">| 統一編號：90217439</span>
					</div>
				</div>
				<div class="address">
					<div class="icon">
						<i class="fa-solid fa-location-pin" style="width: 16px;height: 16px;"></i>
						<span class="text">| 地址：桃園市大園區春德路130號2樓</span>
					</div>
				</div>
				<div class="mail">
					<div class="icon">
						<i class="fa-solid fa-envelope" style="width: 16px;height: 16px;"></i>
						<span class="text">| 信箱：Dongchiao18@gmail.com</span>
					</div>
				</div>
			</div>
			<div class="map">
				<iframe class="map-iframe"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3615.5457404497192!2d121.2122299!3d25.0155471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468215aed329a83%3A0xbf30031073996898!2zRC5DIGRlc2lnbiDmnbHllqzoqK3oqIg!5e0!3m2!1szh-TW!2stw!4v1657625579696!5m2!1szh-TW!2stw"
					style="border:0;" allowfullscreen="" loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
		<div class="bottom">
			<div class="text">
				<div class="block1">
					<span style="font-size: 28px;color: black;">臨時停車場</span> <br />
					<span style="font-size: 15px;color: black; letter-spacing: 3px;">PARKING</span>
				</div>
				<div class="line"></div>
				<div class="address">
					<div class="icon">
						<i class="fa-solid fa-square-parking" style="width: 16px;height: 16px;"></i>
						<span class="text">| 大園區春德路188號</span>
					</div>
				</div>
				<div class="parking">
					<div class="icon">
						<i class="fa-solid fa-sack-dollar" style="width: 16px;height: 16px;"></i>
						<span class="text">| 汽車臨停每小時$20</span>
					</div>
				</div>
			</div>
			<div class="picture">
				<img src="./parking.png">
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	@media (min-width:1190px) {
		.contact-wrapper {
			display: flex;
			flex-direction: column;
			height: calc(100vh);
			padding-left: 20%;
			padding-right: 20%;
		}

		.contact-wrapper .top {
			display: flex;
			flex: 1;
		}

		.contact-wrapper .top .text {
			flex: 1;
		}

		.contact-wrapper .top .text .block1 {
			display: inline-block;
			width: 100%;
			text-align: center;
		}


		.contact-wrapper .top .text .phone {
			margin-top: 20px;
		}

		.contact-wrapper .top .text .icon {
			display: inline-block;
			width: 30px;
			height: 30px;
			border: 2px solid black;
			border-radius: 100px;
			padding-left: 5px;
			padding-top: 2px;
			white-space: nowrap;
		}

		.contact-wrapper .top .text .icon .text {
			margin-left: 30px;
		}

		.contact-wrapper .top .text .company {
			margin-top: 20px;
		}

		.contact-wrapper .top .text .address {
			margin-top: 20px;
		}

		.contact-wrapper .top .text .mail {
			margin-top: 20px;
		}


		.contact-wrapper .top .map {
			flex: 1;
		}

		.contact-wrapper .top .map .map-iframe {
			flex: 1;
			height: 100%;
			width: 100%;
		}

		.contact-wrapper .bottom {
			flex: 1;
			display: flex;
		}

		.contact-wrapper .bottom .text {
			flex: 1;
		}

		.contact-wrapper .bottom .text .block1 {
			display: inline-block;
			width: 100%;
			text-align: center;
		}

		.contact-wrapper .bottom .picture {
			flex: 1;
		}

		.contact-wrapper .bottom .picture img {
			width: 100%;
			height: 100%;
		}

		.contact-wrapper .bottom .text .icon {
			display: inline-block;
			width: 30px;
			height: 30px;
			border: 2px solid black;
			border-radius: 100px;
			padding-left: 5px;
			padding-top: 2px;
			white-space: nowrap;
		}

		.contact-wrapper .bottom .text .icon .text {
			margin-left: 30px;
		}

		.contact-wrapper .bottom .text .address {
			margin-top: 20px;
		}

		.contact-wrapper .bottom .text .parking {
			margin-top: 20px;
		}

		.contact-wrapper .line {
			background-color: black;
			width: 100%;
			height: 2px;
			margin-top: 10px;
			margin-bottom: 10px;
		}
	}

	@media (max-width:1189px) {
		.contact-wrapper {
			display: flex;
			flex-direction: column;
			height: calc(100vh);
		}

		.contact-wrapper .top {
			display: flex;
			flex-direction: column;
			flex: 1;
		}

		.contact-wrapper .top .text {
			flex: 1;
		}

		.contact-wrapper .top .text .block1 {
			display: inline-block;
			width: 100%;
			text-align: center;
		}


		.contact-wrapper .top .text .phone {
			margin-top: 20px;
		}

		.contact-wrapper .top .text .icon {
			display: inline-block;
			width: 30px;
			height: 30px;
			border: 2px solid black;
			border-radius: 100px;
			padding-left: 5px;
			padding-top: 2px;
			white-space: nowrap;
		}

		.contact-wrapper .top .text .icon .text {
			margin-left: 30px;
		}

		.contact-wrapper .top .text .company {
			margin-top: 20px;
		}

		.contact-wrapper .top .text .address {
			margin-top: 20px;
		}

		.contact-wrapper .top .text .mail {
			margin-top: 20px;
		}


		.contact-wrapper .top .map {
			margin-top: 40px;
			flex: 1;
		}

		.contact-wrapper .top .map .map-iframe {
			flex: 1;
			height: 280px;
			width: 100%;
		}

		.contact-wrapper .bottom {
			flex: 1;
			display: flex;
			flex-direction: column;
			margin-top: 20px;
		}

		.contact-wrapper .bottom .text {
			flex: 1;
		}

		.contact-wrapper .bottom .text .block1 {
			display: inline-block;
			width: 100%;
			text-align: center;
		}

		.contact-wrapper .bottom .picture {
			flex: 1;
			margin-top: 20px;
		}

		.contact-wrapper .bottom .picture img {
			width: 100%;
			height: 280px
		}

		.contact-wrapper .bottom .text .icon {
			display: inline-block;
			width: 30px;
			height: 30px;
			border: 2px solid black;
			border-radius: 100px;
			padding-left: 5px;
			padding-top: 2px;
			white-space: nowrap;
		}

		.contact-wrapper .bottom .text .icon .text {
			margin-left: 30px;
		}

		.contact-wrapper .bottom .text .address {
			margin-top: 20px;
		}

		.contact-wrapper .bottom .text .parking {
			margin-top: 20px;
		}

		.contact-wrapper .line {
			background-color: black;
			width: 100%;
			height: 2px;
			margin-top: 10px;
			margin-bottom: 10px;
		}
	}
</style>
