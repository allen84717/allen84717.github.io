<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light navbar-wrapper mobile-menu">
		<div class="navbar-logo container-fluid text-center">
			<a class="navbar-brand" href="#">
				<img src="./menuLogo.png" alt="" width="85" height="64" class="d-inline-block align-text-top">
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="navbar-item-collection collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item navbar-item">
						<a class="nav-link" @click="goPage(0)" :class="[index == 0? activeClass : '']"
							aria-current="page" href="#">首頁</a>
					</li>
					<li class="nav-item dropdown navbar-item">
						<a class="nav-link dropdown-toggle" :class="[index == 1? activeClass : '']" href="#"
							id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
							@click="aboutMeListShow = true">
							關於我們
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown" v-show="aboutMeListShow">
							<li><a class="dropdown-item" @click="aboutMeClk" href="#">關於東喬</a></li>
							<li><a class="dropdown-item" @click="aboutMeClk" href="#">經營理念</a></li>
							<li><a class="dropdown-item" @click="aboutMeClk" href="#">服務項目</a></li>
						</ul>
					</li>
					<li class="nav-item navbar-item">
						<a class="nav-link" :class="[index == 2? activeClass : '']" @click="goPage(2)" href="#">服務流程</a>
					</li>
					<li class="nav-item navbar-item">
						<a class="nav-link" :class="[index == 3? activeClass : '']" @click="goPage(3)" href="#">作品集</a>
					</li>
					<li class="nav-item dropdown navbar-item">
						<a class="nav-link dropdown-toggle" :class="[index == 4? activeClass : '']" href="#"
							id="navbarDropdown_consult" role="button" data-bs-toggle="dropdown" aria-expanded="false"
							@click="consultListShow = true">
							預約諮詢
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown_consult" v-show="consultListShow">
							<li><a class="dropdown-item" target="_blank" href="https://is.gd/3NtF3m">線上預約</a></li>
							<li><a class="dropdown-item" @click="consultClk">聯絡資訊</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				activeClass: 'active',
				aboutMeListShow: false,
				consultListShow: false,
				index: 0,
			}
		},
		props: {
			goPage: Function
		},
		methods: {
			aboutMeClk() {
				this.goPage(1)
				this.aboutMeListShow = false;
			},
			consultClk() {
				this.goPage(4)
				this.consultListShow = false;
			}
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

	}
</style>
