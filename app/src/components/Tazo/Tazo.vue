<template>
	<button class="tazo" :class="name" @click="$emit('click', name)">
		<img :src="src" :alt="name" class="tazo--image">
	</button>
</template>

<script>
	import VueTypes from 'vue-types';
	export default {
		name: 'Tazo',
		props: {
			name: VueTypes.string.isRequired,
			src: VueTypes.string.isRequired,
		}
	}
</script>

<style lang="scss" scoped>
	.tazo {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 120px;
		border: none;
		border-radius: 50%;
		background-color: $white;
		cursor: pointer;
		transition: transform 0.3s linear;

		&:hover, &:focus {
			outline: none;
			transform: scale(1.15);
		}

		@media (max-width: 430px) {
			width: 80px;
			height: 80px;
		}

		&--image {
			width: 45px;
			height: 50px;
			z-index: 2;

			@media (max-width: 430px) {
				width: 25px;
				height: 30px;
			}
		}
		@each $name, $from, $to in $tazo-colors {
			&.#{$name} {
				background: linear-gradient(to bottom, $from 50%, $to);
				box-shadow: 0 6px darken($to, 15);
			}
		}

		&::after {
			content: '';
			position: absolute;
			background: $white;
			width: 100px;
			height: 100px;
			border-radius: 50%;
			z-index: 1;
			box-shadow: inset 0 6px 0 0 darken($white, 15);

			@media (max-width: 430px) {
				width: 65px;
				height: 65px;
			}
		}

		&.pedra {
			grid-area: pedra;
		}

		&.papel {
			grid-area: papel;
		}

		&.tesoura {
			grid-area: tesoura;
		}

		&.reptil {
			grid-area: reptil;
		}

		&.spock {
			grid-area: spock;
		}

	}
</style>
