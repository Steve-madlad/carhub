import { cars } from "@/constants/constants";
import type { Car, CarKey } from "@/types/types";

export async function getCarDetails(carBrand: string) {
  if (!carBrand || !process.env.CAR_NINJA_API_KEY) {
    throw new Error("Car brand or API key is missing.");
  }

  const headers = {
    "X-Api-Key": String(process.env.CAR_NINJA_API_KEY),
  };

  const response = await fetch(
    `https://api.api-ninjas.com/v1/cars?make=${carBrand}`,
    {
      method: "GET",
      headers,
    },
  );

  const data = await response.json();
  return data as Car[];
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export function getRandomCityMpg() {
  return Math.floor(Math.random() * (32 - 18 + 1)) + 18;
}

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

export const getCarImage = (car: CarKey) => {
  const formatted = car.toLowerCase().replace(" ", "") as CarKey;
  const image = cars[formatted];

  return image;
};

export const toPascalCase = (text: string) => {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
};
