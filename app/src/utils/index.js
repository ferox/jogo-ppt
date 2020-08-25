export const TAZOS_LIST = {
	PEDRA: 'pedra',
	PAPEL: 'papel',
	TESOURA: 'tesoura',
	REPTIL: 'reptil',
	SPOCK: 'spock',
};

export const randomTazo = () => {
	const tazos = Object.values(TAZOS_LIST);
	const randomIndex = Math.random() * tazos.length;
	return tazos[Math.floor(randomIndex)];
};

const tazoVencedor = (player, computador) => {
	const {
		PEDRA,
		PAPEL,
		TESOURA,
		REPTIL,
		SPOCK,
	} = TAZOS_LIST;

	const vence = {
		[PEDRA]: [REPTIL, TESOURA],
		[PAPEL]: [PEDRA, SPOCK],
		[TESOURA]: [PAPEL, REPTIL],
		[REPTIL]: [SPOCK, PAPEL],
		[SPOCK]: [TESOURA, PEDRA],
	};
	return vence[player].includes(computador);
};

export const getResultado = (player, computador) => {
	if (player === computador) {
		return 0;
	}
	const playerVencedor = tazoVencedor(player, computador);
	return playerVencedor ? 1 : -1
}
