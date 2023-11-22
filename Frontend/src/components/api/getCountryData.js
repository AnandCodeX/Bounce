/** @format */

import axios from "axios";

//Fetching Data From Backend API
export const getCountryData = async (country) => {
	const response = await axios.get(`http://localhost:6000/country/${country}`);
	return response;
};
