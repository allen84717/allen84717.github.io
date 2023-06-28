<template>
	<div class="protfolioNavWrap">
		<ul>
			<router-link to="Protfolio">
				<li class="active">Space</li>
			</router-link>
			<router-link to="Protfolio2">
				<li>Estate</li>
			</router-link>
		</ul>
	</div>
	<div class="imageContainer d-flex justify-content-center align-items-center flex-column">
		<router-link :to="`/ProtfolioList?id=${item.id}`" v-for="item in protfolioData" :key="item.id"
			class="row d-flex">
			<!-- <div class="leftSide d-flex" v-if="item.id % 2 !== 0 || this.windowHeight < 992"> -->
			<div class="leftSide" v-show="(item.id % 2 != 0 ? true : false) || this.screenWidth < 992">
				<div class="imgBox col-lg-6">
					<img :src="item.image" class="enterPicture" />
					<!-- <div>
              <span>
                VIEW
              </span>
          </div> -->
				</div>
				<div class="textBox col-lg-6 d-flex align-items-center flex-column">
					<div class="enterText"> {{ item.title }} </div>
					<div class="enterIcon d-flex align-items-center ">
						<i class="fa-light fa-plus"></i>
					</div>
				</div>
			</div>
			<!-- <div class="rightSide d-flex" v-else> -->
			<div class="rightSide" v-show="(item.id % 2 == 0 ? true : false) && this.screenWidth >= 991">
				<div class="textBox col-lg-6 d-flex align-items-center flex-column">
					<div class="enterText"> {{ item.title }} </div>
					<div class="enterIcon d-flex align-items-center ">
						<i class="fa-light fa-plus"></i>
					</div>
				</div>
				<div class="imgBox col-lg-6">
					<img :src="item.image" class="enterPicture" />
					<!-- <div>
              <span>
                VIEW
              </span>
          </div> -->
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			protfolioData: '',
			screenWidth: document.body.clientWidth,
		}
	},
	methods: {

	},
	mounted() {
		axios.get('../../protfolio.json').then((res) => {
			this.protfolioData = res.data;
		})

		window.onresize = () => {
			return (() => {
				this.screenWidth = document.body.clientWidth
			})()

		}
	},
	watch: {
		screenWidth(val) {
			this.screenWidth = val
			// console.log('aa', this.screenWidth);
		}
	}
}
</script>

<style scoped>
* {
	font-family: "Manjari", sans-serif, "STHeiti Light", "Heiti TC", "微軟正黑體", "Microsoft JhengHei", sans-serif;
}

li.active {
	color: white !important;
}

.protfolioNavWrap {
	position: fixed;
	top: 30px;
	width: 100%;
	z-index: 98;
	margin-top: 45px;
	background-color: #666;
}

.protfolioNavWrap ul {
	list-style: none;
	text-align: center;
	color: #FFF;
	font-weight: 700;
	padding-left: 0;
	margin-bottom: 0px;
}

.protfolioNavWrap ul a {
	color: #FFF !important;
	text-decoration: none !important;
	line-height: 1.5;
	letter-spacing: 1px;
}

.protfolioNavWrap ul li {
	line-height: 3rem;
	opacity: 0.5;
	cursor: pointer;
}

.protfolioNavWrap ul li.active {
	opacity: 1;
}

.protfolioNavWrap ul li:hover {
	opacity: 1;

}

.imageContainer {
	width: 100%;
	margin-top: 8%;
	position: relative;
}

.imageContainer>a {
	display: block;
	width: 100%;
	position: relative;
	text-decoration: none;
	color: #FFF;
	overflow: hidden;
}

.imageContainer>a:hover .enterPicture {
	filter: grayscale(0);
	transform: scale(1.1);
	transition: all 1s;
}

.imageContainer>a:hover .enterText {
	color: #000;

}

.imageContainer>a:hover .enterIcon {
	border: 1px solid #000;
	color: #000;
	transform: rotate(180deg);
	transform-origin: center;
	transition: all 1s;
}

.imageContainer>a:hover .textBox::before,
.imageContainer>a:hover .textBox::after {
	width: 45%;
	transition: width 1s;
}


.imageContainer>a .enterPicture {
	/* height: 500px; */
	width: 100%;
	filter: grayscale(100%);
	transition: all 1s;
}

.leftSide {
	position: relative;
	display: flex;
}

.rightSide {
	position: relative;
	display: flex;
}

.imgBox {
	overflow: hidden;
}

.imgBox>div {
	height: 100%;
	top: 0;
	position: absolute;
	width: 50%;
	display: table;
}

.imgBox>div>span {
	font-family: 'Playfair Display', serif !important;
	display: table-cell;
	vertical-align: middle;
	text-align: center;
	opacity: 0;
	letter-spacing: 10px;
	transition: opacity 1s
}

.imgBox>div>span:hover {
	opacity: 1;
	transition: opacity 1s
}

.textBox {
	position: relative;
	color: #777;
	height: 100%;
	min-height: 150px;
}

.imageContainer .enterText {
	position: absolute;
	top: 30%;
	width: 100%;
	text-align: center;
	font-weight: 600;
	font-size: 26px;
	letter-spacing: 3px;
	transition: all 1s;
}

.imageContainer .enterIcon {
	position: absolute;
	top: 47%;
	border: 1px solid #777;
	border-radius: 50%;
	width: 32px;
	height: 32px;
	text-decoration: none;
	transition: all 1s;
}

.enterIcon>i {
	font-size: 24px;
	width: 100%;
	height: 100%;
	line-height: 32px;
	text-align: center;
}

.rightSide .textBox::after {
	content: '';
	border-top: 1px solid black;
	position: absolute;
	right: -5%;
	top: 50%;
	width: 30%;
	z-index: -1;
	transition: all 1s;

}

.leftSide .textBox::before {
	content: '';
	border-top: 1px solid black;
	border-right: none;
	position: absolute;
	left: -5%;
	top: 50%;
	width: 30%;
	z-index: -1;
	transition: all 1s;

}

@media (max-width:991px) {
	.imageContainer {
		width: 100%;
		margin-top: 37%;

	}

	.protfolioNavWrap {
		position: fixed;
		top: 30px;
		width: 100%;
		z-index: 98;
		margin-top: 30px;
		background-color: #666;
	}

	.enterIcon>i {
		position: absolute;
	}



	ul {
		margin-bottom: 0px;
	}

	ul a {
		font-family: "Manjari", sans-serif, "STHeiti Light", "Heiti TC", "微軟正黑體", "Microsoft JhengHei", sans-serif;
	}

	a li.active {
		color: white;
	}

	.leftSide {
		flex-direction: column;
		padding-left: 0;
		padding-right: 0;
	}

	.rightSide {
		flex-direction: column;

	}

	.leftSide .textBox::before {
		content: '';
		border-top: none;
		border-right: 1px solid black;
		position: absolute;
		left: 50%;
		top: 0%;
		width: 0%;
		height: 10%;
		z-index: -1;
		transition: all 1s;
	}


	.imageContainer>a:hover .textBox::before {
		width: 0%;
		/* height: 30%;
			transition: height 1s; */
	}


	.textBox {
		height: auto;
	}

	.imageContainer .enterText {
		font-size: 16px;
		top: 15%;
	}
	
	.imageContainer .enterIcon {
		top: 35%;
	}

}

@media (max-width:420px) {
	.enterIcon>i {
		line-height: 28px;
	}
}
</style>
