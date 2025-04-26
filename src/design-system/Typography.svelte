<script lang="ts">
	import type { Snippet } from 'svelte';

	const sizeMap = {
		xs: '10px',
		sm: '12px',
		md: '14px',
		lg: '16px',
		xl: '18px'
	};

	const weightMap = {
		light: 300,
		normal: 400,
		medium: 500,
		bold: 600,
		extrabold: 700
	};

	interface TypographyProps {
		/**
		 * The text to be displayed.
		 */
		children: Snippet;
		/**
		 * The font size of the text.
		 */
		size: keyof typeof sizeMap;
		/**
		 * The font weight of the text.
		 */
		weight: keyof typeof weightMap;
		/**
		 * The color of the text.
		 */
		color?: string;
	}

	const { children, size, weight, color = '#4E6477' }: TypographyProps = $props();
</script>

<div style="font-size: {sizeMap[size]}; font-weight: {weightMap[weight]}; color: {color};">
	{@render children()}
</div>
