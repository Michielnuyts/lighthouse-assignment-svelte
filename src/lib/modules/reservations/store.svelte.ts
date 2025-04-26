import { COUNTRY_CODE_MAPPING, type CountryCode } from '$lib/countryCodes';
import invariant from '$lib/invariant';
import { reservationData } from './fixture';
import type { Reservation } from './types';

const reservationState = $state<Reservation[]>([]);

const initialze = () => {
	/**
	 * Getting CORS errors on the fetch request, so to make sure you can run the app,
	 * I'll use a local copy of the data.
	 */
	const sortedByMostReservationsDesc = reservationData.sort((a, b) => {
		return b.value.nr_of_rooms - a.value.nr_of_rooms;
	});
	const mostReservations = sortedByMostReservationsDesc[0];

	reservationState.push(
		...reservationData.map((reservation) => {
			const countryCode = reservation.display_code as CountryCode;
			const countryName = COUNTRY_CODE_MAPPING[countryCode];

			invariant(countryName, `Country code ${countryCode} not found`);

			return {
				id: reservation.id,
				percentage: Math.round(
					(reservation.value.nr_of_rooms / mostReservations.value.nr_of_rooms) * 100
				),
				countryCode: reservation.display_code,
				countryName,
				delta: reservation.value.nr_of_rooms - reservation.reference_value.nr_of_rooms
			};
		})
	);
};

const getReservations = () => {
	return reservationState;
};

export const reservationsStore = {
	initialze,
	getReservations
};
