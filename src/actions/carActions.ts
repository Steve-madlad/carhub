"use server";

import type { Car } from "@/types/types";

export async function getCarDetails(
  carBrand: string,
  model?: string | null,
  year?: string | null,
  fuelType?: string | null,
): Promise<Car[]> {
  const apiKey = process.env.CAR_NINJA_API_KEY;
  if (!carBrand || !apiKey) throw new Error("Missing car brand or API key");

  const params = new URLSearchParams({ make: carBrand });
  if (model) params.append("model", model);
  if (year) params.append("year", year);
  if (fuelType) params.append("fuel_type", fuelType);

  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/cars?${params.toString()}`,
      {
        headers: { "X-Api-Key": apiKey },
      },
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as Car[];

    return data;
  } catch (error) {
    console.error("Failed to fetch car details:", error);
    throw new Error("Failed to fetch car details.");
  }
}
