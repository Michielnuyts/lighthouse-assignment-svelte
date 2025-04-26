<script lang="ts">
	import invariant from '$lib/invariant';
	import { theme } from './theme';

	interface ProgressBarProps {
		/**
		 * The percentage of the progress bar.
		 */
		percentage: number;
		/**
		 * The color of the progress bar.
		 */
		color: string;
	}

	const { percentage, color }: ProgressBarProps = $props();

	invariant(percentage >= 0 && percentage <= 100, 'Percentage must be between 0 and 100');
</script>

<div class="container" style="background-color: {theme.colors.primary.grey};">
	<div class="progress-bar" style="width: {percentage}%; background-color: {color};"></div>
</div>

<style>
	.container {
		position: relative;
		height: 8px;
		border-radius: 4px;
	}

	.progress-bar {
		position: absolute;
		top: 0;
		left: 0;
		height: 8px;
		border-radius: 4px;
	}
</style>
