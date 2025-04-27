/**
 * A single reservation data point for a country.
 */
export interface Reservation {
	/**
	 * The ununique identifier for the reservation.
	 */
	id: string;
	/**
	 * The percentage of the reservation compared to the country with most reservations.
	 */
	percentage: number;
	/**
	 * Two letter country code.
	 */
	countryCode: string;
	/**
	 * The name of the country.
	 */
	countryName: string;
	/**
	 * The delta/change in reservations compared to last year.
	 */
	delta: number;
}
