"use server";

import type { Car } from "@/types/types";

export async function getCarDetails(carBrand: string): Promise<Car[]> {
  const apiKey = process.env.CAR_NINJA_API_KEY;
  if (!carBrand || !apiKey) throw new Error("Missing car brand or API key");

  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/cars?make=${carBrand}`,
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
