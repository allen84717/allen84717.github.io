<template>
	<div class="container comment">
		<div class="row">
			<div class="col-12">
				<p class="text-center title">關於東喬空間設計</p>
				<p class="text-center content" style="font-weight: 600;">我們相信設計源於生活，細節成就品質</p>
				<p class="text-center content" style="font-weight: 600;">量身打造你的裝潢夢想。</p>
			</div>
			<div class="col-12 commentScope" style="margin-top: 40px;">
				<div class="row g-5">
					<div v-for="(item, index) in commentList" :key="index" class="col-12 col-md-6 col-lg-3"
						@click="go(item.url)">
						<div class="square">
							<div class="row content">
								<div class="col-md-2 col-2">

								</div>
								<div class="col-md-4 col-3 img" style="">
									<div class="circle">
										<p class="text-center name">{{item.name}}</p>
									</div>
								</div>
								<div class="col-6" style="margin-top: 20px; margin-left: -30px;">
									<p class="title text-center" style="color: gray;">評價</p>
									<p class="text-center"><i v-for="(star) in 5" :key="star" class="fa-solid fa-star"
											style="color: #FFD306"></i></p>
								</div>
							</div>
							<div class="row">
								<div class="col-12 bottom">
									<p class="text-start" style="color: gray;">
										{{item.content}}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				commentList: []
			}
		},
		methods: {
			go(url) {
				window.open(url);
			}
		},
		computed: {
			commentTitle: {
				get: function() {
					if (screen.width > 992) {
						return {
							'text-center': true
						};
					}
					return {
						'text-start': true
					};
				}
			}
		},
		mounted() {
			axios.get('./comment.json').then((res) => {
				this.commentList = res.data;
			})
		}
	}
</script>

<style lang="less">
	.container.comment {
		height: auto;
		margin-top: 80px;
		margin-bottom: 80px;

		.text-center.title {
			font-size: 28px;
		}

		.text-center.content {
			margin-bottom: 2px;
			color: gray;
		}

		.col-12.col-md-6.col-lg-3 {
			.square {
				border: 2px solid #9D9D9D;
				height: 250px;
				border-radius: 5%;
				padding: 10px;
				// margin-top: 10px;
				// margin-bottom: 10px;
			}
			
			.img {
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.content {
				margin-top: 20px;

				.title {
					margin-bottom: 1px;
					font-size: 20px;
				}

				.circle {
					border: 1px solid #9D9D9D;
					border-radius: 100%;
					height: 60px;
					width: 60px;
					color: white;
					font-size: 20px;
					padding-top: 12px;
					background-color: #9D9D9D;
				}

				.text-center.name {
					text-align: center !important;
				}
			}
		}

	}

	@media (max-width: 992px) {
		.commentScope {
			overflow-x: hidden;
		}
		.square {
			.bottom {
				padding-left: 10%;
				padding-right: 10%;
			}

			.img {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		.col-12.col-md-6.col-lg-3 {
			.content { 
				.name {
					margin-bottom: 0px;
					margin-top: 4px;
				}
			}
		}
	}
</style>
