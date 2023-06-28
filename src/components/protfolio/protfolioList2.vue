<template>
	<div v-if="myId != 0" class="protfolioWrap" style=" text-align:center;">
		<h1 class="text-center">{{ myData.title[myId] }}</h1>
		<div class="imgBox col-12" v-for="(item, index) in myData.photo[myId]" :key="index">
			<img style="margin-top: 100px;" class="img-fluid" :src="`/img/建築作品/${myData.floder[myId]}/${item}`" />
		</div>
	</div>
	<div @click="back" class="container"
		style="margin-top: 20px; margin-bottom: 20px;display: flex;justify-content: center;align-items: center;">
		<div class="box"
			style="position: relative;font-size: 20px; border-radius: 100%; height: 30px; width: 30px; text-align: center;: auto;border: 1px solid black;display:flex;justify-content: center;align-items: center;">
			<span style="position: absolute;top:-2px">x</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			myData: {
				title: ['', '中正段劉宅', '中埔段林宅', '中華郵政股份有限公司', '苗栗警察局', '國立玉里高級中學', '國立澎湖高級海事水產職業學校'],
				floder: ['', '中正段劉宅', '中埔段林宅', '中華郵政股份有限公司', '苗栗警察局', '國立玉里高級中學', '國立澎湖高級海事水產職業學校'],
				photo: [
					[''],
					['1.jpg', '2.jpg'],
					['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
					['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
						'11.jpg', '12.jpg', '13.jpg'
					],
					['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
					['1.png', '2.png', '3.png', '4.png'],
					['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'],
				]
			}
		}
	},
	props: {
		myId: {
			type: Number,
			default: 0
		}
	},
	computed: {
		list: function () {
			return '';
		}
	},
	methods: {
		back() {
			window.history.go(-1);
		}
	},
}
</script>

<style scoped>
* {
	font-family: "Manjari", sans-serif, "STHeiti Light", "Heiti TC", "微軟正黑體", "Microsoft JhengHei", sans-serif;
}

.protfolioWrap {
	margin-top: 80px;
	overflow-x: hidden;
}
</style>
