<template>
	<button class="voltar" @click="$router.back()">
		Voltar
	</button>
</template>

<script>
	export default {
		name: 'BotaoVoltar',
	};
</script>


<style lang="scss" scoped>
	.voltar {
		color: $white;
		letter-spacing: 2px;
		text-decoration: none;
		font-size: rfs(1.25rem);
		background: none;
		border: none;
		cursor: pointer;
		margin-top: rfs(50px);

		&:hover, &:focus {
			outline: none;
			text-decoration: underline;
		}
	}
</style>

