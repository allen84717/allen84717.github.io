<template>
	<header class="d-flex align-items-center">
		<div class="logoWrap">
			<a href="/home">
				<img id="logo" src="./menuLogo.png" />
			</a>
		</div>
		<div class="hambugerWrap" @click="openNav()">
			<img src="../../../public/img/icon/menu.png" />
		</div>
		<div class="closeNav" @click="closeNav()">
			<img src="../../../public/img/icon/close.png" />
		</div>
		<div class="navWrap justify-content-center align-items-center flex-wrap w-100">
			<nav class="mainNav d-flex justify-content-center align-items-center flex-wrap w-100" >
				<ul class="d-flex justify-contenr-between align-items-center flex-column " style="padding-left: 0px;">
					<li>
						<router-link to="/Concept">
							<span class="EN">ABOUT</span>
							<span class="CN">關於東喬</span>
						</router-link>
					</li>
					<li>
						<router-link to="/Process">
							<span class="EN">SERVICE</span>
							<span class="CN">服務流程</span>
						</router-link>
					</li>
					<li>
						<router-link to="/Charges">
							<span class="EN">CHARGE</span>
							<span class="CN">收費標準</span>
						</router-link>
					</li>
					<li>
						<router-link to="/ProtfolioEnter">
							<span class="EN">WORKS</span>
							<span class="CN">作品集</span>
						</router-link>
					</li>
					<li>
						<a href="https://is.gd/3NtF3m" target="_blank">
							<span class="EN">COUNSELING</span>
							<span class="CN">聯絡我們</span>
						</a>
					</li>
				</ul>
			</nav>
			<div class="navFooter w-100">
				<div class="socialWrap d-flex justify-content-center mb-3">
					<!-- <a href="#" class="socialIcon">
						<i class="fab fa-facebook-f"></i>
					</a> -->
					<div class="icon ig" @click="iconClk('ig')" style="margin-left: 10px;margin-right: 10px;">
						<img class="icon-bt" src="./insgram.png" />
					</div>
					<div class="icon fb" @click="iconClk('fb')" style="margin-left: 10px;margin-right: 10px;">
						<img class="icon-bt" src="./facebook.png" />
					</div>
					<div class="icon line" @click="iconClk('line')" style="margin-left: 10px;margin-right: 10px;">
						<img class="icon-bt" src="./line.png" width="50" height="50" />
					</div>
				</div>
				<div class="copyrightWrap">
					<p class="text-center"> &copy; DONGCIO SPACE DESIGN RESERVED.</p>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				navOpen: false,
			}
		},
		watch: {
			$route() {
				if (document.body.offsetWidth < 992)
					document.body.style.overflow = '';

			},
		},
		methods: {
			openNav() {
				document.querySelector('header').classList.add('open');
				document.querySelector('body').style.overflow = 'hidden';
			},
			closeNav() {
				document.querySelector('header').classList.remove('open');
				document.querySelector('body').style.overflow = 'unset';

			},
			iconClk(str) {
				let url = '';
				switch (str) {
					case 'ig':
						url = 'https://www.instagram.com/dongcio_design/';
						break;
					case 'fb':
						url = 'https://www.facebook.com/dongcio.design';
						break;
					case 'line':
						url = 'line://ti/p/~@dongcio';
						break;
				}
				window.open(url, '_blank');
			}
		}
	}
</script>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	header {
		width: 100%;
		height: 60px;
		background-color: rgba(255, 255, 255, 0.95);
		position: fixed;
		top: 0;
		transition: height .5s ease-out;
		z-index: 99;
	}

	header.open {
		height: 100vh;
		transition: height .5s ease-in;
	}

	header a {
		color: #000000 !important;
		text-decoration: none !important;
	}
	
	header a:hover{
		color: #000000 !important;
		text-decoration: none !important;
	}

	.logoWrap {
		width: 72px;
		height: 48px;
		position: fixed;
		top: 6px;
		left: calc(50%);
		//transform: translateX(-50%);
		transform: translateX(-50%);
		transition: all .5s linear;
	}

	.logoWrap #logo {
		opacity: 0.75;
	}

	.logoWrap>a {
		display: block;
	}

	.logoWrap > a > img {
		width: 100%;
	}

	.hambugerWrap {
		width: 26px;
		height: 26px;
		position: fixed;
		top: 17px;
		right: 17px;
		transform: translateX(-50%);
		cursor: pointer;
	}

	.hambugerWrap>img {
		width: 100%;
	}

	.closeNav {
		display: none;
		width: 20px;
		position: fixed;
		top: 17px;
		right: 20px;
		transform: translateX(-50%);
		cursor: pointer;
	}

	.closeNav>img {
		width: 100%;
	}

	.navWrap {
		display: flex;
		position: relative;
		height: calc(100vh - 90px);
		margin-top: 90px;
		visibility: hidden;
		opacity: 0;
	}

	.mainNav {
		width: 50%;
		height: calc(100% - 200px);
	}

	.mainNav ul {
		/* display: none; */
		list-style: none;
		width: 60%;
		height: 100%;
		justify-content: center;
	}

	.mainNav ul li {
		display: flex;
		justify-content: center;
		padding: 1rem;
	}

	.mainNav ul li .CN {
		display: none;
	}

	.mainNav ul li a:hover .CN {
		display: block;
	}

	.mainNav ul li a:hover .EN {
		display: none;
	}

	.CN,
	.EN {
		cursor: pointer;
	}

	.mainNav .CN {
		/* display: ; */
	}

	.navFooter {
		/* position: absolute; */
	}

	.socialIcon {
		text-decoration: none;
		color: #666;
	}

	.socialIcon:hover {
		color: #000;
	}

	.copyrightWrap {
		font-size: 12px;
		font-weight: 700;
		color: #666;
	}

	/* 選單展開 start*/
	.open .hambugerWrap {
		display: none;
	}

	.open .closeNav {
		display: block;
	}

	.open .logoWrap {
		top: 15px;
		width: 90px;
		transition: all .5s linear;
	}

	.open .navWrap {
		visibility: visible;
		opacity: 1;
		transition: opacity .5s linear;
		transition-delay: .8s;
	}

	/* 選單展開 end*/
</style>
