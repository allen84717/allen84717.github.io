<template>
	<div v-if="index != 0" class="row" style=" text-align:center; margin-top:80px;">
		<h1 class="text-center">{{ myData.title[myId] }}</h1>
		<div class="imgBox col-12" v-for="(item, index) in myData.photo[myId]" :key="index">
			<img style="margin-top: 100px;" class="img-fluid" :src="`/img/${myData.floder[myId]}/${item}`" />
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
				title: ['', '工壹', '晨曦', '純印', '藍圖', '空域', '駝曲', '浸塵', '逆光', '夜日', '疊影', '圓華', '竹境', '寧郅', '優弧', '貓匿'],
				floder: ['', '工業風-工壹/', '日式北歐親子宅-晨曦/', '日式無印小宅-純印/', '北歐小宅-藍圖/', '侘寂風-空域/', '現代北歐-駝曲/', '現代灰階-浸塵/',
					'現代清水模-逆光/', '現代黑白/', '現代輕工業-疊影/', '現代輕奢風-圓華/', '現代藝文-竹境/', '無印風-寧郅/', '輕奢美式風-優弧', '貓匿-日式北歐'
				],
				photo: [
					[''],
					[
						'dwymallpc_159793155890584511219169.png_tu1080.jpg',
						'dwymallpc_159793157721310947892276.png_tu1080.jpg',
						'dwymallpc_159793155574130034789694.png_tu1080.jpg',
						'dwymallpc_159793156203115276547690.png_tu1080.jpg',
						'dwymallpc_159793157358692142859601.png_tu1080.jpg',
						'dwymallpc_159793156933320151108795.png_tu1080.jpg',
						'dwymallpc_159793159123050250232822.png_tu1080.jpg',
						'6ca10424ca934cdde3671ef584875bdf6cb2edde-proper.jfif',
						'8fcecaffc117da4cd0831084e30a3e7b98be4ec8-proper.jfif',
						'dwymallpc_159793182730494615752187.png_tu1080.jpg',
						'dwymallpc_159793174943117654590632.png_tu1080.jpg',
						'dwymallpc_159793178807743119044479.png_tu1080.jpg',
						'dwymallpc_159793179183552423831884.png_tu1080.jpg',
						'dwymallpc_159793179868185098873784.png_tu1080.jpg',
						// 'dwymallpc_159793158670656378643572.png_tu1080.jpg',
						// 'dwymallpc_159793171492986719534181.png_tu1080.jpg',
						// 'dwymallpc_159793172119134073959093.png_tu1080.jpg',
						// 'dwymallpc_159793175512444244362950.png_tu1080.jpg',
						// 'industry01.jpg'
					],
					[
						'062200_6297e688a7c1c9152.jpg',
						'062200_6297e688a7c781997.jpg',
						'062200_6297e688660ed1240.jpg',
						'062200_6297e688a7e781660.jpg',
						'062200_6297e688a7afd5286.jpg',
						'062200_6297e688a7fe71823.jpg',
						'062200_6297e688a82af7728.jpg',
						'062200_6297e688a835e1786.jpg',
						'062200_6297e688a82574340.jpg',
						'062200_6297e688a84702026.jpg',
						// '062200_6297e688a83073330.jpg',

					],
					[
						'dc0a0aa8dc2887c635d00abc3a2709c97445e499-proper.jpg',
						'6bb145bd11c238895ebe04d0e9bb02b90d8ff45c-proper.jpg',
						'c5fa22eefb4e7286282b191afc1624984f1283ba-proper.jpg',
						'db8768350b34897718c9fd252eb0d5b1259122f1-proper.jpg',
						'358170bfd363bacbc21071f28cfed78c3df40d4e-proper.jpg',
						'd27faf048ed7d772e4a4a3009b4580ede10b3504-proper.jpg',
						'39829e482a9d9e3b32a38a5a0cbd558209038e1e-proper.jpg',

						// '7e41e2ba52519a09c84c1cbafe894bebc9d393e2-proper.jpg',
						// '35e6c009228d37b1b89183133b6de54cc67c05e4-proper.jpg',
						// '6371e84e5a21ce8b367839f0e633d4dfcf9be136-proper.jpg',
						// '7886ee2c3f8bc869e3780c3bd430d6e9042e5a10-proper.jpg',
						// '542010bdfa87d6f7fbf60bdf6a43507c5a9f62e0-proper.jpg',
					],
					[
						'3dcdb890-ef68-49c6-ab75-760f8b8507e9-proper.jpg',
						'1e7b7e41-3fbb-4fbd-b73c-f47243561793-proper.jpg',
						'be9b78e9-119e-49dd-9760-66c07a629556-proper.jpg',
						'205ec826-4f45-44a8-bf68-636dc30accc6-proper.jpg',
						'502e3d77-532e-4b6d-8a15-691caabbb9b1-proper.jpg',
						'8aa5b312-501a-4dc7-8329-000b1486e3ca-proper.jpg',
						'4cb684e3-f824-4730-a4f5-1bf30a645ee7-proper.jpg',
						'eed8835b-117b-4f51-b8c1-0523f1894993-proper.jpg',

						// '93e8f567-1ee3-4f7b-8017-9fc7adeb0eb2-proper.jpg',
						// '3290379e-3efe-4803-9002-e87f4ffc706c-proper.jpg',
						// '86025444-f041-4d5e-ae63-73c16cdf03dc-proper.jpg',
						// 'a919646d-f8e2-4643-8a1b-a33f29563577-proper.jpg',
						// 'fdadd517-eced-4a1a-89b9-fbaf76f62c6a-proper.jpg'
					],
					[
						'b1c2d39f5cf988e231c8f2d1fdb27dc78b8c14e8.jpg',
						'bd5809587c7fbcda154a3fa732cb5cbd70d4c878.jpg',
						'd1edb801788269552c6219d028657e664e31080b.jpg',
						'ca72b6a66553ceba264211a1815e2650df790d99.jpg',
						'd582cab219e0dae998c05e3a13d7e0ea0d17340e.jpg',
						'88bb146dddcfb8cc7c6ead604a0138ace95f372b.jpg',
						'10342afc1d15352d8116be4f5a788b028e81021e.jpeg',
						'55ed981ec2eba559cf14924d9a27eaff550fed5b.jpg',
						'522fc6dc6e2b32b7fb52a2cb912bc9dcb9dc6a90.jpg',
						'a97fd0be7e133aa76c20328cc72280480bc62790.jpg',

						// '3e577790facd1ae7c23e028481e849157e7597a5.jpg',
						// '53e49ff3624e467b5dc8a301f81eb0d4086a5191.jpg',
						// '54a216d0f444e567842bb398eef5d38fcb5fa920.jpg',
						// 'b5f78921412100367cdb8f9162b739ff3f883151.jpg',
						// 'bcd62f320e11019ffa0907856889343e50353ce8.jpg',
						// 'c2f8f717a26e52f3d1360094bf8b2ebc51aad6b7.jpg',
						// 'c9d5d34520c959526d9606027bce6fe9d8547b30.jpg',
						// 'c39935f7fdb6641753e09eb64e928411fd9410ab.jpg',
						// 'ccbf4db9ba1fef1fa4da1aad9938d4c397621dfd.jpg',
					],
					[
						'062600_629d2d78d945e2438.png',
						'062600_629d2d78d96a36896.png',
						'062600_629d2d78d93677485.png',
						'062600_629d2d78d95ac3510.png',
						'062600_629d2d78d95593557.png',
						'062600_629d2d78d94b28732.png',
						'062600_629d2d78d96f68463.png',
						'062600_629d2d78d96518368.png',
						'062600_629d2d78d97486427.png',
						'062600_629d2d78d97ea8698.png',
						'062600_629d2d78d97995297.png',

						//  '062600_629d2d78d95042026.png',
					],
					[
						'dwymallpc_160419991656278548771404.png_tu1080.jpg',
						'dwymallpc_160419992374372830389003.png_tu1080.jpg',
						'dwymallpc_160419992794720326723694.png_tu1080.jpg',
						'dwymallpc_160419993151992795567398.png_tu1080.jpg',
						'dwymallpc_160419993852489947333573.png_tu1080.jpg',
						'0194eaac1dad7c42b3d6439aa9689e9c3b02c934-proper.jfif',
						'8c7bfbfab6ece2aaa0f57df13d35b019d39f0121-proper.jfif',
						'c0e807af03657af668f20e14d54328c9a7531030-proper.jfif',
						'487d72bebd3cd1831e35228e496900e97f049e31-proper.jfif',
						'dwymallpc_160419999016629730457795.png_tu1080.jpg'
					],
					[
						'cf2e5c92f447364c7af6bf183f12a9eb.jpg',
						'ba6e3507684608125723149d1f1b904f.jpg',
						'e4af8d29325420306c2859bcb08fab13.jpg',
						'89a8fd5134fef4236e3c7a32e75d2fc1.jpg',
						'f9d6985d75dda3676bfba6e8b7299fe8.jpg',

						// '644b614bb293a8003539f72a092f08ba.jpg',
					],
					[
						'27a91215779517defb8a2af23675b47d8cc1affb-proper.jpg',
						'2ba41071eb2397a3467394533e66d9f9a2e367eb-proper.jpg',
						'8c9ed9aa2507a35129853dc464242ae485515898-proper.jpg',
						'213d9f7fda1526e531c6c926be889f862c029477-proper.jpg',
						'd2b1369b2d98acebacba25a3ad1610da044b5fa3-proper.jpg',
						'1636442ec7bf6b31f5e9e85d15bce35f5e2156b9-proper.jpg',
						'8162291e290254e710f2208e300d17c8fa576b4b-proper.jpg',
						'5f08fe92750adb4c78826534b73f1b15133d597e-proper.jpg',
						'407279458039a19a824d2dbf85bc60d17139006c-proper.jpg',
						'11412cad7bfb5f1d0005753115b8b4c04364a90f-proper.jpg',
						'd8a6d228886420e72f959c9adff20dc721eb2fda-proper.jpg',
						'd0e1c6985af53d0eccbe25b76cb6a6dc38605978-proper.jpg',

						// '7b9816b40c926dc9b1b3c12524cae44c91e27694-proper.jpg',
						// '065d7e094da488f5b112ac2a6a6c40b1350c6400-proper.jpg',
						// 'ebb5b5fafb2145edc512764462da3d3353b80b6e-proper.jpg'
					],
					[
						'31918bbcd29452969c6f274b021dde59b77ac0a2-proper.jpg',
						'7b89392359ff42df0fa738418f1f8a8da2417c4c-proper.gif',
						'06d56caff18878f899bcd76ee7c872d331d96d80-proper.jpg',
						'9a07679b410a1cba283fbb332c6f4f31ae12223a-proper.jpg',
						'562359c852e374ae848a72eaf05a48a30bb5f94c-proper.jpg',
						'e2b35abfab5b7ba16efbe3ab228bb6f3a0d22d28-proper.jpg',
						'd4393f805f42e17adb79661963fedf7843ed0db1-proper.jpg',
						'e2f29ea295a264bc31e0b27fad98ec490b1e2a35-proper.jpg',
						'd59c59c7fb357c63eb56f340d298535a8297c33f-proper.jpg',
						'1f9cc3a0bfedb9a27a262eb9705ed5976800c785-proper.jpg',

						// '6a6a11b0253ea69df5b309d8c158530d1244e83f-proper.jpg',
						// '12ffb69000362d11e2af8538bfca4502610b7b60-proper.jpg',
						// '8859b83a5b274db599ad83a5a1c8df170f4b6173-proper.jpg',
						// 'b7d5a32419dc79f4e8b23c95dbae800527ef0716-proper.jpg',
						// 'ddeb6ea9442a6bf1b24739b66f343de455bc325f-proper.jpg',
					],
					[
						'89c9b79a1f9f8eed1531bcb802ffeea9.jpg',
						'930822c7b768883ce0a9020f41c1a7d4.jpg',
						'a3e19efd2806683131db08f31a8042d9.jpg',
						'85ed92863faf4d78d9761a7bf1b2d96d.jpg',
						'bfa14ab1b80c9cac187ac3fe12a41520.jpg',
						'1b4aa589359650f9cda7f85067bae12c.jpg',
						'8aebb3b379c2e4c5d6b9127684189bc5.jpg',
						'156cca52673e19e334749911962a7940.jpg',

						// 'c5d78fa02e169b2721902378aa6d32fa.jpg'
					],
					[
						'1603872285936170.jpg',
						'1603872286133559.jpg',
						'1603872294726545.jpg',
						'1603872295132135.jpg',
						'1603872295884007.jpg',
						'1603872296157027.jpg',
						'1603872297597230.jpg'
					],
					[
						'1560233062914365.jpg',
						'1560233061343235.jpg',
						'1560233061225032.jpg',
						'1560233061613443.jpg',
						'1560233062866658.jpg',
						'1560233062974033.jpg',

					],
					[
						'50a0ee56762bb7517ade9c1738bfa82eeeb5723a-proper.jpg',
						'1c066f1540c1e8278f2e431bd21d205c1734ac4e-proper.jpg',
						'633fc074fc16759a522aaad118a95ca6de1b6db6-proper.jpg',
						'b2df0f07909088fb19a2f9c0c7682ae5e5a92fa4-proper.jpg',
						'9de3ba1b09b6542a2be27c47f65859ba5bbb63c0-proper.jpg',
						'd8b8c1d86cbaac0815b37afb96266487b2c65bf4-proper.jpg',
						'17ef57ec2552641a7743d38fb21c665fd7f641da-proper.jpg',
						'6257af1199f4b7bafa732cc06a2d3dcc1ee59b3f-proper.jpg',
						'540285a8907cf130331e7e1940adb4cb5393cbd1-proper.jpg',
						'b6804a6e7b6708c9a6c3a8831fbf3c3754df2b44-proper.jpg',
						'a6aa3a61121dee0a2b60bf84c4df1b4362d872a9-proper.jpg',

						// '68f48b86e01f24778837d20b0abc19b99aac6921-proper.jpg',
					],
					[
						'客.jpg',
						'be5d481c9af613bd7c7dcd23f1571dce.jpg',
						'0972f0f14cac11581a149d1de4c76edc.jpg',
						'b269172bf867bf3634fb04407f5dc2d3.jpg',
						'9de2ff442cbef7c425b3f32e769f5db1.jpg',
						'a186ae5c95670eef4edc4fe0c74448d3.jpg',

						// '1b1326d8ac0160a4e9ca84baaa83d3c7.jpg',
						// '9bda4d6b2c244ae2992952cf7ba1190f.jpg',
						// 'c72048ba5c097e44ad6dba451564465b.jpg',
						// 'e19c0ae6bb226768dbdbc05477c0de4f.jpg',
					]
				]
			},
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

@media (max-width: 992px) {
	box > i {
		position: absolute;
		top: 30%;
		left: 50%;
	}
	
	box > i:::before {
		position: absolute;
		top: 40%;
		left: 50%;
	}
	
	box > i:::after {
		position: absolute;
		top: 50%;
		left: 50%;
	}
}
</style>
