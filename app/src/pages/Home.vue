<template>
  <div class="home">
		<RouterLink to="/jogar" class="iniciar">
			INICIAR JOGO
		</RouterLink>
		<BotaoRegras />
  </div>
</template>

<script>
	import BotaoRegras from '../components/Botoes/Regras.vue';
	export default {
		name: 'Home',
		components: {
    	BotaoRegras,
  	},
	};
</script>

<style lang="scss" scoped>
	.home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.iniciar {
			font-size: rfs(4rem);
			font-weight: bold;
			text-decoration: none;
			color: $white;
			transition: transform .3s linear, letter-spacing .3s linear;

			&:visited {
				color: $white;
			}

			&:hover, &:focus {
				outline: none;
				transform: scale(1.25);
				letter-spacing: 5px;
				text-decoration: underline;
			}
		}
	}
</style>
