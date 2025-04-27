import type { reservationData } from './fixture';

type RawReservation = (typeof reservationData)[number];

export const compareReservations = (a: RawReservation, b: RawReservation): number => {
	/**
	 * First, sort by the number of reservations.
	 */
	const amountOfReservationsComparison = b.value.nr_of_rooms - a.value.nr_of_rooms;

	if (amountOfReservationsComparison !== 0) {
		return amountOfReservationsComparison;
	}

	/**
	 * If reservations are the same, sort by last year's reservations.
	 * In this case I went for the country that had the higher change since last year.
	 */
	const prevAmountOfReservationsComparison =
		a.reference_value.nr_of_rooms - b.reference_value.nr_of_rooms;

	if (prevAmountOfReservationsComparison !== 0) {
		return prevAmountOfReservationsComparison;
	}

	/**
	 * If even those are the same, sort by the country code.
	 */
	const countryCodeComparison = a.display_code.localeCompare(b.display_code);

	return countryCodeComparison;
};
