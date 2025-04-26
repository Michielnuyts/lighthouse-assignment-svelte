<script lang="ts">
	import { theme } from '$designSystem/theme';
	import CardHeader from './CardHeader.svelte';
	import CountryRow from './CountryRow.svelte';
</script>

<div class="card-container" style="border-color: {theme.colors.borders.primary};">
	<CardHeader title="Guest Country" />

	<div class="scroll-container">
		<CountryRow name="United Kingdom" reservations={100} percentageOfTotal={57} delta={39} />
		<CountryRow name="Germany" reservations={100} percentageOfTotal={49} delta={17} />
		<CountryRow name="France" reservations={100} percentageOfTotal={30} delta={-2} />
		<CountryRow name="Spain" reservations={100} percentageOfTotal={16} delta={4} />
		<CountryRow name="Italy" reservations={100} percentageOfTotal={6} delta={-9} />
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
