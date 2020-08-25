<template>
<div class="jogo">
	<template v-if="!inicioPartida">
		<div class="tazos">
			<Tazo v-for="tazoInfo in tazos" :key="tazoInfo.name" v-bind="tazoInfo" @click="inicioJogo($event)"/>
		</div>
		<BotaoRegras />
		<BotaoVoltar />
	</template>
	<Resultado v-else :player-tazo="playerTazo" @reset="inicioPartida = false"/>
</div>
</template>

<script>
	import Tazo from '@/components/Tazo/Tazo.vue';
	import BotaoRegras from '@/components/Botoes/Regras.vue';
	import BotaoVoltar from '@/components/Botoes/Voltar.vue';
	import Resultado from '@/components/Resultado/Resultado.vue';
	import { TAZOS_LIST } from '@/utils';

	const {
		PEDRA,
		PAPEL,
		TESOURA,
		REPTIL,
		SPOCK,
	} = TAZOS_LIST;

	export default {
		name: 'Jogo',
		components: {
			Tazo,
			BotaoRegras,
			BotaoVoltar,
			Resultado,
		},
		data() {
			return {
				tazos: [
					{
						name: PEDRA,
						src: require('@/assets/icon-pedra.svg'),
						//tabIndex: 1,
					},
					{
						name: PAPEL,
						src: require('@/assets/icon-papel.svg'),
						//tabIndex: 2,
					},
					{
						name: TESOURA,
						src: require('@/assets/icon-tesoura.svg'),
						//tabIndex: 3,
					},
					{
						name: REPTIL,
						src: require('@/assets/icon-reptil.svg'),
						//tabIndex: 4,
					},
					{
						name: SPOCK,
						src: require('@/assets/icon-spock.svg'),
						//tabIndex: 5,
					},
				],
				playerTazo: '',
				inicioPartida: false,
			};
		},
		methods: {
			inicioJogo(tazo) {
				this.playerTazo = tazo;
				this.inicioPartida = true;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.jogo {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: rfs(-50px);
		width: 100%;

		.tazos {
			display: grid;
			grid-template-areas:
				". . . pedra pedra pedra . . ."
				"spock spock spock . . . papel papel papel"
				". reptil reptil reptil . tesoura tesoura tesoura .";
			grid-template-columns: repeat(auto-fit, minmax(30px, auto));
			grid-template-rows: 120px 120px 120px;
			grid-column-gap: 15px;
			background: url('~@/assets/bg-pentagon.svg') no-repeat 50% 50%/90%;

			@media (max-width: 430px) {
				grid-template-rows: 75px 105px 85px;
				grid-column-gap: unset;
				grid-row-gap: 10px;

			}
		}
	}
</style>
