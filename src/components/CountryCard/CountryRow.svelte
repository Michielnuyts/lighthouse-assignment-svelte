<script lang="ts">
	import ProgressBar from '$designSystem/ProgressBar.svelte';
	import { theme } from '$designSystem/theme';
	import Typography from '$designSystem/Typography.svelte';

	interface CountryRowProps {
		/**
		 * The name of the country.
		 */
		name: string;
		/**
		 * The total number of reservations for the country.
		 */
		reservations: number;
		/**
		 * The percentage of total reservations for the country
		 * compared to the total of the country with the highest amount.
		 */
		percentageOfTotal: number;
		/**
		 * The change in reservations compared to a previous period.
		 */
		delta: number;
	}

	const props: CountryRowProps = $props();

	const isNegativeDelta = props.delta < 0;
	const deltaColor = isNegativeDelta ? theme.colors.delta.negative : theme.colors.delta.positive;
	const deltaSign = isNegativeDelta ? '' : '+';
</script>

<div class="row" style="border-color: {theme.colors.borders.primary};">
	<div class="row-left">
		<Typography size="sm" weight="normal">
			{props.name}
		</Typography>
		<ProgressBar percentage={props.percentageOfTotal} color={theme.colors.primary.blue} />
	</div>
	<div class="row-right">
		<Typography size="sm" weight="normal" color={deltaColor}>
			{deltaSign}{props.delta}
		</Typography>
		<Typography size="xs" weight="normal">vs. Last Year</Typography>
	</div>
</div>

<style>
	.row {
		display: flex;
		align-items: center;
		border-bottom: 1px solid;
		padding: 4px 8px;
		height: 52px;
		gap: 8px;
	}

	.row-left {
		display: flex;
		flex-direction: column;
		height: 36px;
		width: 290px;
		gap: 8px;
	}

	.row-right {
		display: flex;
		flex-direction: column;
	}

	.row:last-child {
		border-bottom: none;
	}
</style>
