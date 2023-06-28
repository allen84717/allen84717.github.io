<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light navbar-wrapper mobile-menu">
		<div class="navbar-logo container-fluid text-center">
			<router-link class="navbar-brand" to="/Home">
				<img src="./menuLogo.png" alt="" width="85" height="64" class="d-inline-block align-text-top">
			</router-link>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="navbar-item-collection collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item dropdown navbar-item">
						<router-link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button"
							data-bs-toggle="dropdown" aria-expanded="false" @click="aboutMeListShow = true">
							ABOUT
						</router-link>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown" v-show="aboutMeListShow">
							<li>
								<router-link class="dropdown-item" to="/">關於東喬</router-link>
							</li>
							<li>
								<router-link class="dropdown-item" to="/Concept">設計理念</router-link>
							</li>
							<li>
								<router-link class="dropdown-item" to="/">服務項目</router-link>
							</li>
						</ul>
					</li>
					<li class="nav-item dropdown navbar-item">
						<router-link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button"
							data-bs-toggle="dropdown" aria-expanded="false" @click="processListShow = true">
							SERVICE
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
						<router-link class="nav-link" to="/ProtfolioEnter">WORKS</router-link>
					</li>
					<li class="nav-item dropdown navbar-item">
						<router-link class="nav-link dropdown-toggle" to="/" id="navbarDropdown_consult" role="button"
							data-bs-toggle="dropdown" aria-expanded="false" @click="consultListShow = true">
							COUNSELING
						</router-link>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown_consult" v-show="consultListShow">
							<li><a class="dropdown-item" target="_blank" href="https://is.gd/3NtF3m">線上預約</a></li>
							<li>
								<router-link class="dropdown-item" to="/Contact">聯絡資訊</router-link>
							</li>
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
				processListShow: false,
				aboutMeListShow: false,
				consultListShow: false,
				index: 0,
			}
		},
		props: {},
		methods: {

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

	body {
		font-family: "Manjari", '微軟正黑體';
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

		.navbar.navbar-expand-lg.navbar-light.bg-light.navbar-wrapper.mobile-menu {
			background-color: transparent !important;
		}
	}

	@media (max-width: 992px) {
		.navbar.navbar-expand-lg.navbar-light.bg-light.navbar-wrapper.mobile-menu {
			background-color: transparent !important;
		}
	}
</style>
