import mutations from './mutations';
export default {
	namespaced: true,
	state() {
		return {
			placar: 0,
		};
	},
	mutations,
};
