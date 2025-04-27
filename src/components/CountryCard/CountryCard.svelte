<script lang="ts">
	import { theme } from '$designSystem/theme';
	import { reservationsStore } from '$lib/modules/reservations/store.svelte';
	import CardHeader from './CardHeader.svelte';
	import CountryRow from './CountryRow.svelte';

	const reservations = reservationsStore.getReservations();
</script>

<div class="card-container" style="border-color: {theme.colors.borders.primary};">
	<CardHeader title="Guest Country" />

	<div class="scroll-container">
		{#each reservations as reservation (reservation.id)}
			<CountryRow
				name={reservation.countryName}
				percentageOfTotal={reservation.percentage}
				delta={reservation.delta}
			/>
		{/each}
	</div>
</div>

<style>
	.card-container {
		width: 394px;
		height: 308px;
		border: 1px solid;
		border-radius: 4px;
	}

	.scroll-container {
		height: calc(100% - 44px);
		overflow-y: auto;
	}
</style>
