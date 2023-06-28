<template>
	<div class="container-fluid works">
		<div class="row g-2">
			<div class="col-12 title">
				<p class="text-center text-dark">尋找你的室內設計靈感</p>
			</div>
			<div class="col-12 col-md-4 col-lg-3" v-for="(item, index) in works" :key="index">
				<router-link :to="item.url">
					<div class="card" style="">
						<img :src="item.img" class="card-img-top" alt="..." style="height: 300px;">
						<div class="card-body">
							<p class="card-text">{{ item.text }}</p>
						</div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			works: '',
		}
	},
	mounted() {
		axios.get('./homeInspiration.json').then((res) => {
			this.works = res.data;
		})
	}
}
</script>

<style lang="less">
.container-fluid.works {
	margin-bottom: 50px;

	.col-12.title {
		margin-bottom: 30px;

		.text-center.text-dark {
			margin-top: 60px;
			font-size: 32px;
		}
	}

	a{
		text-decoration: none;
		color: #000;

	}

}
</style>
