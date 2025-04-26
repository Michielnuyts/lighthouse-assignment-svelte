<script lang="ts">
	import { theme } from '$designSystem/theme';
	import Typography from '$designSystem/Typography.svelte';

	interface CardHeaderProps {
		/**
		 * The title of the card.
		 */
		title: string;
	}

	const props: CardHeaderProps = $props();
</script>

<div class="card-title">
	<Typography size="sm" weight="extrabold" color={theme.colors.primary.blueDark}>
		{props.title}
	</Typography>
</div>

<style>
	.card-title {
		display: flex;
		align-items: center;

		padding: 4px 8px;
		border-bottom: 1px solid #e1e5ec;
		height: 44px;
	}
</style>
