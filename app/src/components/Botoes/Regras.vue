<template>
	<RouterLink to="/regras" class="regras">
			REGRAS
	</RouterLink>
</template>

<
<script>
export default {
	name: 'BotaoRegras',
}
</script>

<style lang="scss" scoped>
	.regras {
		font-size: rfs(1.5rem);
		text-align: center;
		text-decoration: none;
		border: 3px solid $header-outline;
		border-radius: 10px;
		padding: rfs(5px 10px);
		width: 150px;
		color: $white;
		font-weight: 500;
		margin-top: rfs(50px);
		transition: background .3s linear;

		&:hover, &:focus {
			outline: none;
			background: $header-outline;
		}
	}
</style>
