<script lang="ts">
	import { onMount } from 'svelte';
	import CountryCard from '../components/CountryCard/CountryCard.svelte';
	import { reservationsStore } from '$lib/modules/reservations/store.svelte';

	onMount(() => {
		reservationsStore.initialze();
	});
</script>

<CountryCard />

<style>
	:global(*) {
		font-family: Inter;
		box-sizing: border-box;
	}
</style>
