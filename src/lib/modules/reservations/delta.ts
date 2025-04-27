import { theme } from '$designSystem/theme';

/**
 * @param delta The delta value to be formatted
 * @returns a color and sign for the delta value
 */
export const getReservationDelta = (delta: number): { color: string; sign: string } => {
	const isNegative = delta < 0;
	const isExactlyZero = delta === 0;

	const color = isExactlyZero
		? theme.colors.primary.mediumBlue
		: isNegative
			? theme.colors.delta.negative
			: theme.colors.delta.positive;

	const sign = isNegative ? '' : '+';

	return { color, sign };
};
