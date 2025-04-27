<script lang="ts">
	import ProgressBar from '$designSystem/ProgressBar.svelte';
	import { theme } from '$designSystem/theme';
	import Typography from '$designSystem/Typography.svelte';
	import { getReservationDelta } from '$lib/modules/reservations/delta';

	interface CountryRowProps {
		/**
		 * The name of the country.
		 */
		name: string;
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
	const { color, sign } = getReservationDelta(props.delta);
</script>

<div class="row" style="border-color: {theme.colors.borders.primary};">
	<div class="row-left">
		<Typography size="sm" weight="normal">
			{props.name}
		</Typography>
		<ProgressBar percentage={props.percentageOfTotal} color={theme.colors.primary.brightBlue} />
	</div>
	<div class="row-right">
		<Typography size="sm" weight="normal" {color}>
			{sign}{props.delta}
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
