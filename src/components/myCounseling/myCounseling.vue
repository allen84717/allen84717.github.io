<template>
	<div class="container-fluid counseling">
		<div class="row">
			<div class="col-12 bg">
				<h2 class="text-light text-center CN">美好的生活 從設計開始</h2>
				<h2 class="text-light text-center EN">“Begin a good life with DC”</h2>
				<div class="text-center">
					<button type="button" @click="go('https://is.gd/3NtF3m')" class="btn btn-lg btn-outline-light">諮詢去<i
							aria-hidden="true" class="fa-fw fas fa-caret-right"></i></button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			go(url) {
				window.open(url)
			}
		}
	}
</script>

<style lang="less">
	.container-fluid.counseling {
		overflow: hidden;
		height: 650px;
		margin-bottom: 20px;
		padding: 0px 40px 150px 40px;
		padding-top: 0px;
		padding-right: 40px;
		padding-bottom: 150px;
		padding-left: 40px;

		.bg {
			position: relative;
			background: url('./pexels-karolina-grabowska-6276044.jpg');
			
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			// 透明度 0.6 的黑色半透明遮罩
			background-color: rgba(0, 0, 0, .2);
			// 設置背景混和模式為相乘模式
			background-blend-mode: multiply;
			height: 650px;
		}

		.CN {
			font-size: 3.5em;
			margin-top: 200px;
			margin-bottom: 60px;
			font-family: Heebo;
		}

		.EN {
			font-size: 40px;
			font-family: Heebo;
			line-height: 1;
			font-size: 2em;
			font-weight: 300;
			margin-bottom: 120px;
		}

		.btn.btn-lg.btn-outline-light {
			font-style: inherit;
			vertical-align: baseline;
			text-align: center;
			padding: 10px 22px 10px 40px;
			font-size: 1.5em;
			font-weight: 600;
			font-family: "Roboto", 'Microsoft JhengHei';
			letter-spacing: 1.8px;
			border-radius: 31px 31px 31px 31px;
			border-style: solid;
			border-width: 3px 3px 3px 3px;
			transform: scale(1, 1);
			transition: all .4s ease-out;
		}

		.btn.btn-lg.btn-outline-light:hover {
			transform: scale(1.1, 1.1);
			background-color: transparent;
			color: white;
		}
	}

	@media (max-width:992px) {
		.container-fluid.counseling {
			height: 370px;
			margin-bottom: 5px;
			padding-left: 0px;
			padding-right: 0px;


			.bg {
				position: relative;
				background: url('./pexels-karolina-grabowska-6276044.jpg');
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
				// 透明度 0.6 的黑色半透明遮罩
				background-color: rgba(0, 0, 0, .2);
				// 設置背景混和模式為相乘模式
				background-blend-mode: multiply;
				height: 370px;
			}

			.CN {
				font-size: 26px;
				margin-top: 125px;
				margin-bottom: 20px;
			}

			.EN {
				font-size: 22px;
				margin-bottom: 40px;
			}

			.btn.btn-lg.btn-outline-light {
				font-style: inherit;
				vertical-align: baseline;
				text-align: center;
				padding: 10px 22px 10px 40px;
				font-size: 1.5em;
				font-weight: 600;
				font-family: "Roboto", 'Microsoft JhengHei';
				letter-spacing: 1.8px;
				border-radius: 31px 31px 31px 31px;
				border-style: solid;
				border-width: 2px 2px 2px 2px;
			}


		}
	}
</style>
