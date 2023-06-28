<template>
	<nav :class="navbarClass" ref="navbar">
		<div class="navbar-logo container-fluid text-center">
			<button class="navbar-toggler" ref="navbarBtn" type="button" data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" @click="toggleClk">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
				aria-labelledby="offcanvasNavbarLabel">
				<div class="offcanvas-header">
					<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
						aria-label="Close"></button>
				</div>
				<div class="offcanvas-body">
					<ul class="navbar-nav ms-auto mb-2 mb-lg-0 menuText">
						<router-link class="navbar-brand" to="/Home">
							<img v-if="whiteLogo" src="./menuLogoWhite.png" alt="" width="95" height="64"
								class="d-inline-block align-text-top">
							<img v-if="!whiteLogo" src="./menuLogo.png" alt="" width="85" height="64"
								class="d-inline-block align-text-top">
						</router-link>
						<li class="nav-item navbar-item">
							<router-link :class="routerItem" to="/Concept" @mouseover="abount = '關於東喬'" @mouseout="abount = 'ABOUT'">{{abount}}</router-link>
						</li>
						<li class="nav-item dropdown navbar-item">
							<router-link class="dropdown-toggle" :class="routerItem" to="/" id="navbarDropdown"
								role="button" data-bs-toggle="dropdown" aria-expanded="false"
								@click="processListShow = true"  @mouseover="service = '服務流程'" @mouseout="service = 'SERVICE'">
								{{service}}
							</router-link>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown" v-show="processListShow">
								<li>
									<router-link class="dropdown-item" to="/Process">服務流程</router-link>
								</li>
								<li>
									<router-link class="dropdown-item" to="/Charges">收費標準</router-link>
								</li>
							</ul>
						</li>
						<li class="nav-item navbar-item">
							<router-link :class="routerItem" to="/ProtfolioEnter" @mouseover="works = '作品集'" @mouseout="works = 'WORKS'">{{works}}</router-link>
						</li>
						<li class="nav-item navbar-item">
							<a :class="routerItem" target="_blank" href="https://is.gd/3NtF3m" @mouseover="consuling = '聯絡我們'" @mouseout="consuling = 'COUNSELING'">{{consuling}}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				processListShow: false,
				aboutMeListShow: false,
				consultListShow: false,
				index: 0,
				navbarClass: {
					'navbar': true,
					'navbar-expand-lg': true,
					'navbar-dark': true,
					'navbar-light': false,
					'bg-light': true,
					'navbar-wrapper': true,
					'mobile-menu': true,
					'sticky-top': true,
					'transparent': true
				},
				routerItem: {
					'nav-link': true,
					'black': false,
					'white': true,
				},
				whiteLogo: true,
				abount: 'ABOUT',
				service: 'SERVICE',
				works: 'WORKS',
				consuling: 'COUNSELING'
			}
		},
		props: {},
		methods: {
			scrollFn() {
				if (this.getScrollTop() <= 200) {
					if (document.body.offsetWidth < 992) {
						return;
					}
					if (this.isWhiteBack()) {
						this.navbarClass['transparent'] = false;
						this.routerItem['black'] = true;
						this.routerItem['white'] = false;
						this.whiteLogo = false;
						return;
					}
					this.navbarClass['transparent'] = true;
					this.routerItem['black'] = false;
					this.routerItem['white'] = true;
					this.whiteLogo = true;
				} else {
					this.navbarClass['transparent'] = false;
					this.routerItem['black'] = true;
					this.routerItem['white'] = false;
					this.whiteLogo = false;
				}
			},
			getScrollTop() {
				var scrollTop = 0,
					bodyScrollTop = 0,
					documentScrollTop = 0;
				if (document.body) {
					bodyScrollTop = document.body.scrollTop;
				}
				if (document.documentElement) {
					documentScrollTop = document.documentElement.scrollTop;
				}
				scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
				return scrollTop;
			},
			getWindowHeight() {
				var windowHeight = 0;
				if (document.compatMode == "CSS1Compat") {
					windowHeight = document.documentElement.clientHeight;
				} else {
					windowHeight = document.body.clientHeight;
				}
				return windowHeight;
			},
			getScrollHeight() {
				var scrollHeight = 0,
					bodyScrollHeight = 0,
					documentScrollHeight = 0;
				if (document.body) {
					bodyScrollHeight = document.body.scrollHeight;
				}
				if (document.documentElement) {
					documentScrollHeight = document.documentElement.scrollHeight;
				}
				scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
				return scrollHeight;
			},
			resizeFn() {
				if (document.body.offsetWidth < 992) {
					document.body.style.overflow = '';
					this.navbarClass['navbar-dark'] = false;
					this.navbarClass['navbar-light'] = true;
					this.routerItem['black'] = true;
					this.routerItem['white'] = false;
					this.whiteLogo = false;
				} else {
					if (this.isWhiteBack()) {
						this.navbarClass['navbar-dark'] = false;
						this.navbarClass['navbar-light'] = true;
						this.routerItem['black'] = true;
						this.routerItem['white'] = false;
						this.whiteLogo = false;
						return;
					}
					this.navbarClass['navbar-dark'] = true;
					this.navbarClass['navbar-light'] = false;
					this.routerItem['white'] = true;
					this.routerItem['black'] = false;
					this.whiteLogo = true;
				}
			},
			isWhiteBack() {
				let list = ['PROCESS', 'CHARGES', 'PROTFOLIOENTER', 'PROTFOLIOLIST', 'PROTFOLIOLIST2']
				let url = window.document.location.href.split('//')[1].split('/')[1].toUpperCase();
				if(url.indexOf('?') != -1) {
					url = url.split('?')[0];
				}
				return list.includes(url);
			}
		},
		watch: {
			$route() {
				if (document.body.offsetWidth < 992) {
					document.body.style.overflow = '';
					document.body.style.paddingRight = '';
					this.navbarClass['navbar-dark'] = true;
					this.navbarClass['navbar-light'] = false;
					this.routerItem['black'] = true;
					this.routerItem['white'] = false;
					this.whiteLogo = false;
				} else {
					this.navbarClass['navbar-dark'] = false;
					this.navbarClass['navbar-light'] = true;
					this.routerItem['white'] = true;
					this.routerItem['black'] = false;
					this.whiteLogo = true;
				}
			},
		},
		mounted() {
			window.addEventListener('scroll', this.scrollFn);
			window.addEventListener('resize', this.resizeFn);
			this.scrollFn();
			this.resizeFn();
		},
		unmounted() {
			window.removeEventListener('scroll', this.scrollFn); // 销毁监听
		}
	}
</script>

<style>
	.active {
		color: #adadad !important;
	}

	.mobile-menu {
		z-index: 20;
	}

	.menuText {
		font-weight: 400;
		font-size: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	body {
		font-family: "Manjari", '微軟正黑體';
	}

	.navbar.navbar-expand-lg.navbar-dark.bg-light.navbar-wrapper.mobile-menu.transparent {
		background-color: transparent !important;
	}

	.navbar.navbar-expand-lg.navbar-dark.bg-light.navbar-wrapper.mobile-menu {
		color: black !important;
	}

	.nav-link.black {
		color: black !important;
	}

	.nav-link.white {
		color: white !important;
	}
	
	.nav-item.navbar-item {
		width: 120px;
	}

	@media (min-width:991px) {
		.navbar-wrapper {
			padding: 0px !important;
		}

		.navbar-wrapper .navbar-logo {
			margin-left: 8% !important;
		}

		.navbar-wrapper .navbar-item-collection {
			margin-right: 8% !important;
			color: black !important;
		}

		.navbar-wrapper .navbar-item-collection .navbar-item {
			margin-right: 10px !important;
		}

		#navbarSupportedContent ul li a {
			/* color: #6C6C6C !important; */
			font-weight: 600;
		}


	}

	@media (max-width: 992px) {}

	@media (max-width: 1400px) {}
</style>
