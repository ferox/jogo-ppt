<template>
	<div class="resultado">
		<template v-if="jogoEncerrado">
			<div class="tazos">
				<div class="player">
					<h2>SUA ESCOLHA</h2>
					<Tazo :name="playerTazo" :src="playerSrc"/>
				</div>
				<div class="player">
					<h2>ESCOLHA DO COMPUTADOR</h2>
					<Tazo :name="computadorTazo" :src="computadorSrc"/>
				</div>
			</div>
			<h2 class="resultado-partida">
				{{ resultadoPartida }}
			</h2>
			<button class="reiniciar" @click="$emit('reset')">
				JOGAR NOVAMENTE
			</button>
		</template>
		<p v-else class="carregando">
			Carregando...
		</p>
	</div>
</template>

<script>
	import VueTypes from 'vue-types';
	import { mapMutations } from 'vuex';
	import { SET_PLACAR } from '@/store/modules/placar/mutations';
	import { randomTazo, getResultado } from '@/utils';
	import Tazo from '@/components/Tazo/Tazo.vue';
	export default {
		name: 'Resultado',
		components: {
			Tazo,
		},
		props: {
			playerTazo: VueTypes.string.isRequired,
		},
		data() {
			return {
				jogoEncerrado: false,
				computadorTazo: '',
				resultado: 0,
			};
		},
		computed: {
			playerSrc() {
				return require(`@/assets/icon-${this.playerTazo}.svg`);

			},
			computadorSrc() {
				return require(`@/assets/icon-${this.computadorTazo}.svg`);
			},
			resultadoPartida() {
				const resultados = {
					0: 'EMPATE',
					1: 'VOCÊ VENCEU',
					'-1': 'VOCÊ PERDEU',
				};
				return resultados[this.resultado];
			}
		},
		created() {
			this.computadorTazo = randomTazo();
			setTimeout(() => {
				this.jogoEncerrado = true;
				this.resultado = getResultado(this.playerTazo, this.computadorTazo);
				this.atualizaPlacar(this.resultado);
			}, 750);
		},
		methods: {
			...mapMutations('Placar', {
				atualizaPlacar: SET_PLACAR,
			}),
		},
	};
</script>

<style lang="scss" scoped>
	.resultado {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;

		.tazos {
			display: flex;
			justify-content: space-between;
			width: 100%;

			.player {
				display: flex;
				flex-direction: column;
				align-items: center;

				h2 {
					font-size: rfs(1.25rem);
					margin-bottom: rfs(30px);
					color: $white;
				}

				/deep/ .tazo {
					width: 280px;
					height: 280px;

					&:hover, &:focus {
						transform: unset;
						cursor: default;
					}

					&::after {
						width: 230px;
						height: 230px;
					}

					&--image {
						width: 90px;
						height: 95px;
					}

					@media (max-width: 768px) {
						width: 200px;
						height: 200px;

						&::after {
							width: 160px;
							height: 160px;
						}

						&--image {
							width: 70px;
							height: 75px;
						}
					}

					@media (max-width: 460px) {
						width: 130px;
						height: 130px;

						&::after {
							width: 100px;
							height: 100px;
						}

						&--image {
							width: 40px;
							height: 45px;
						}
					}
				}

			}
		}

		.resultado-partida {
			font-size: rfs(5rem);
			color: $white;
			margin-top: rfs(50px);
		}

		.reiniciar {
			font-size: rfs(1.25rem);
			font-weight: 500;
			background-color: $white;
			color: $dark-text;
			border: none;
			padding: rfs(10px 25px);
			width: 180px;
			border: 2px solid transparent;
			border-radius: 10px;
			cursor: pointer;
			transition: background-color 0.3s linear, color 0.3s linear;

			&:hover, &:focus {
				outline: none;
				background-color: transparent;
				color: $white;
				border-color: $white;
			}
		}
		.carregando {
			text-align: center;
			font-size: rfs(1.55rem);
			color: $white;
			font-weight: bold;
		}
	}
</style>
