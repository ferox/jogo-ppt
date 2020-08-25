export const SET_PLACAR = 'SET_PLACAR';

export default {
	[SET_PLACAR](state, placar = 0) {
		state.placar += placar;
	},
};
