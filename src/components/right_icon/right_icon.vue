<template>
	<div class="icon-wrapper">
		<div class="icon ig" @click="iconClk('ig')">
			<img class="icon-bt" src="./insgram.png" />
		</div>
		<div class="icon fb" @click="iconClk('fb')">
			<img class="icon-bt" src="./facebook.png" />
		</div>
		<div class="icon line" @click="iconClk('line')">
			<img class="icon-bt" src="./line.png" width="50" height="50" />
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
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

<style>
	.icon-wrapper {
		position: fixed;
		right: 20px;
		width: 50px;
		height: 210px;
		z-index: 20;
		bottom: 160px;
	}

	.icon-wrapper .icon {
		background-color: white;
		width: 50px;
		height: 50px;
		margin-bottom: 15px;
		border-radius: 100px;
		border: 3px solid;
	}

	.icon-wrapper .icon .icon-bt {
		width: 40px;
		height: 40px;
		left: 2px;
		top: 2px;
	}

	.icon-wrapper .icon.ig {
		position: relative;
	}

	.icon-wrapper .icon.ig .icon-bt {
		position: absolute;
	}

	.icon-wrapper .icon.fb {
		position: relative;
	}

	.icon-wrapper .icon.fb .icon-bt {
		position: absolute;
	}

	.icon-wrapper .icon.line {
		position: relative;
	}

	.icon-wrapper .icon.line .icon-bt {
		position: absolute;
	}
</style>
