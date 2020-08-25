<template>
	<header class="header">
		<div class="header--box">
			<h2 class="title">
				<span class="title-item">PEDRA</span>
				<span class="title-item">PAPEL</span>
				<span class="title-item">TESOURA</span>
				<span class="title-item">RÉPTIL</span>
				<span class="title-item">SPOCK</span>
			</h2>
			<Placar />
		</div>
	</header>
</template>

<script>
	import Placar from './Placar.vue';
	export default {
		name: 'Header',
		components: {
			Placar,

		}
	};
</script>

<style lang="scss" scoped>
	.header {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 768px;
		padding: rfs(30px);

		@media (min-width: 768px) {
			margin: 0 auto;
		}

		&--box {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			border: 3px solid $header-outline;
			border-radius: 20px;
			padding: rfs(20px 30px);

			.title {
				display: flex;
				flex-direction: column;
				line-height: 0.8;
				color: $white;
				font-size: 2.0rem;
			}

			.title .title-item {
				padding: 0.3rem;

			}
		}
	}

</style>
