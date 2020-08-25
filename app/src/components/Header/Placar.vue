<template>
	<div class="placar">
		<h3 class="placar-label">
			<span class="placar-label--text">
				PLACAR
			</span>
			<span class="placar-label--number">
				{{ placar }}
			</span>
		</h3>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		name: 'Placar',
		computed: {
			...mapState('Placar', {
				placar: ({ placar }) => placar,
			}),
		},
	};
</script>

<style lang="scss">
	.placar {
		background: $white;
		border-radius: 10px;
		padding: rfs(20px 50px);

		@media (max-width: 400px) {
			padding: 20px;

		}

		&-label{
			display: flex;
			flex-direction: column;
			align-items: center;
			line-height: 1;

			&--text {
				font-size: rfs(1rem);
				letter-spacing: 2.5px;
				color: $score-text;
			}

			&--number {
				font-size: rfs(5rem);
				color: $dark-text;
			}
		}

	}

</style>
