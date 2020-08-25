<template>
	<div class="regras">
		<h1 class="title">REGRAS</h1>
		<img src="@/assets/image-rules-bonus.svg" alt="Regras do Jogo" class="image">
		<BotaoVoltar />
	</div>
</template>

<script>
	import BotaoVoltar from '../components/Botoes/Voltar.vue';
	export default {
		name: 'Regras',
		components: {
    	BotaoVoltar,
  	},
	};
</script>

<style lang="scss" scoped>
	.regras {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;

		.title {
			color: $white;
			letter-spacing: 2px;
		}

		.image {
			width: 55%;
			margin-top: rfs(50px);

			@media (max-width: 768px) {
				width: 80%;
			}
		}
	}
</style>
