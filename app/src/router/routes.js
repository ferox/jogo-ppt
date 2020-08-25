const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "Home" */ '../pages/Home.vue'),
	},
	{
		path: '/jogar',
		name: 'Jogo',
		component: () => import(/* webpackChunkName: "Jogo" */ '../pages/Jogo.vue')
	},
	{
		path: '/regras',
		name: 'Regras',
		component: () => import(/* webpackChunkName: "Regras" */ '../pages/Regras.vue')
	},

	{
		path: '*',
		name: 'notFound',
		redirect: '/',
	},
];

export default routes;
