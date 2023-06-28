<template>
	<footer class="footer-wrapper">
		<div class="footer-left">
			<div class="logo">
				<img src="./menuLogo.png" alt="" width="150" height="113"
					class="d-inline-block align-text-top">
			</div>
		</div>
		<div class="footer-middle">
			<div class="address">
				桃園市大園區春德路130號2樓
			</div>
			<div class="author">
				Copyright © 2022 | 東喬 空間設計
			</div>
		</div>
		<div class="footer-right">
			<div class="phone">
				TEL：03-2870178
			</div>
			<div class="mail">
				MAIL：Dongchiao18@gmail.com
			</div>
		</div>
	</footer> 
</template>
<script>
	export default {
		
	}
</script>
<style>
	.footer-wrapper {
		background-color: #8E8E8E;
		height: 120px;
		position: absolute;
		width: 100%;
		border-top: 2px solid white;
		display: flex;
	}
	
	.footer-wrapper .footer-left {
		flex: 1;
	}
	
	.footer-wrapper .footer-left .logo {
		text-align: center;
		font-size: 20px;
	}
	
	.footer-wrapper .footer-middle {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.footer-wrapper .footer-middle .address {
		flex: 1;
		color: white;
		text-align: center;
		padding-top: 20px;
	}
	
	.footer-wrapper .footer-middle .author {
		flex: 1;
		color: white;
		text-align: center;
	}
	
	.footer-wrapper .footer-right {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.footer-wrapper .footer-right .phone {
		flex: 1;
		color: white;
		text-align: left;
		padding-top: 20px;
		padding-left: 20%
	}
	
	.footer-wrapper .footer-right .mail {
		flex: 1;
		color: white;
		text-align: left;
		padding-left: 20%
	}
	
	@media  (max-width: 800px) and (min-width:360px) {
		.footer-wrapper {
			display: flex;
			flex-direction: column;
			height: auto;
		}
		
		.footer-wrapper .footer-middle {
			flex: 1;
			display: flex;
			flex-direction: column;
		}
		
		.footer-wrapper .footer-middle .address {
			flex: 1;
			color: white;
			text-align: center;
			padding-top: 5px;
		}
		
		.footer-wrapper .footer-middle .author {
			flex: 1;
			color: white;
			text-align: center;
			padding-top: 5px;
		}
		
		.footer-wrapper .footer-right .phone {
			flex: 1;
			color: white;
			text-align: center;
			padding-left: 0px;
			padding-top: 5px;
		}
		
		.footer-wrapper .footer-right .mail {
			flex: 1;
			color: white;
			text-align: center;
			padding-left: 0px;
			padding-top: 5px;
		}
	}
</style>