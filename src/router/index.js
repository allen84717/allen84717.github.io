import {
	createRouter,
	createWebHistory
} from "vue-router";

import HomePage from '../view/HomePage.vue';
import ProcessPage from '../view/ProcessPage.vue';
import ProtfolioEnterPage from '../view/ProtfolioEnterPage.vue';
import ProtfolioPage from '../view/ProtfolioPage.vue';
import ProtfolioPage2 from '../view/ProtfolioPage2.vue';
import ContactPage from '../view/ContactPage.vue';
import ChargesPage from '../view/ChargesPage.vue';
import ConceptPage from '../view/ConceptPage.vue';
import ProtfolioList from '../view/ProtfolioList.vue';
import ProtfolioList2 from '../view/ProtfolioList2.vue';

const router = createRouter({
	// mode: 'history', //默認hash
	history: createWebHistory(),
	routes: [{
		path: '/',
		component: HomePage
	},
	{
		path: '/home',
		component: HomePage
	},
	{
		path: '/Process',
		component: ProcessPage
	},
	{
		path: '/ProtfolioEnter',
		component: ProtfolioEnterPage
	},
	{
		path: '/ProtfolioEnter/Protfolio',
		component: ProtfolioPage
	},
	{
		path: '/ProtfolioEnter/Protfolio2',
		component: ProtfolioPage2
	},
	{
		path: '/Contact',
		component: ContactPage
	},
	{
		path: '/Charges',
		component: ChargesPage
	},
	{
		path: '/Concept',
		component: ConceptPage
	},
	{
		path: '/ProtfolioList',
		component: ProtfolioList
	},
	{
		path: '/ProtfolioList2',
		component: ProtfolioList2
	},
	]
});

export default router;
