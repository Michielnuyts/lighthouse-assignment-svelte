import { describe, expect, test } from 'vitest';
import { getReservationDelta } from './delta';
import { theme } from '$designSystem/theme';
import { reservationData } from './fixture';
import { compareReservations } from './utils';

describe('Reservations module', () => {
	test.each([
		{ delta: 1, expectedColor: theme.colors.delta.positive, expectedSign: '+' },
		{ delta: -30, expectedColor: theme.colors.delta.negative, expectedSign: '' },
		{ delta: 0, expectedColor: theme.colors.primary.mediumBlue, expectedSign: '+' }
	])('Reservation Deltas', ({ delta, expectedColor, expectedSign }) => {
		const { color, sign } = getReservationDelta(delta);

		expect(color).toBe(expectedColor);
		expect(sign).toBe(expectedSign);
	});
	test('Reservation data is sorted based on requirements', () => {
		const sortedReservations = reservationData.toSorted(compareReservations);

		expect(sortedReservations).toMatchSnapshot();
	});
});
