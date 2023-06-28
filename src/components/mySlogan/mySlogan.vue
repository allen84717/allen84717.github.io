<template>
	<div class="container slogan-wrapper">
		<div class="row align-items-center">
			<div class="col-12">
				<p class="text-center fs-1 cn">東喬空間設計</p>
				<p class="text-center fs-4 en">DONGCIO SPACE DESIGN</p>
				<div class="line"></div>
				<p class="text-center fs-5 slogan">有限空間，無限設計</p>
				<div class="text-center introBtn">
					<router-link to="/ProtfolioEnter/Protfolio"><button type="button"
							class="btn btn-primary">案例介紹</button></router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {

	},

}
</script>

<style lang="less" scoped>
.container.slogan-wrapper {
	.row {
		height: calc(100vh);
		color: white;

		.col-12 {
			justify-content: center;
			z-index: 2;

			.text-center.fs-1 {
				letter-spacing: 15px;
			}

			.text-center.fs-4 {
				letter-spacing: 10px;
			}
		}

		.line {
			background-color: white;
			height: 2px;
			margin-bottom: 20px;
		}
	}
}

.btn-primary {
	background-color: #9D9D9D;
	border: 1px solid #9D9D9D;
}

// @media (max-width: 992px) {
	.container.slogan-wrapper {
		.row.align-items-center {
			.cn {
				letter-spacing: 10px;
				margin-top: 54px;
				margin-bottom: 4px;
				line-height: 32px;
				padding-left: 10px;
			}

			.en {
				padding-left: 10px;
			}

			.introBtn {
				padding-top: 7px
			}

			.col-12 {
				padding-top: 10px;
				margin-top: 34px;

				.text-center.fs-4 {
					font-size: 2px !important;
				}

				.text-center.fs-1.cn {
					letter-spacing: 10px;
					margin-top: 58px;
					margin-bottom: 2px;
					line-height: 32px;
				}

				.text-center.fs-4.en {
					letter-spacing: 5px;
					font-size: 13px !important;
				}

				.text-center.fs-5.slogan {
					font-size: 15px !important;
					margin-bottom: 30px;
				}


			}

			.line {
				background-color: white;
				height: 2px;
				margin-bottom: 10px;
			}
		}
	}
// }
</style>
