"use client";

import type { Car } from "@/types/types";
import { useEffect, useState } from "react";
import CarCard from "./CarCard";
import { getCarDetails } from "@/actions/carActions";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function CarGrid() {
  const [cars, setCars] = useState<Car[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const manufacturer = searchParams.get("manufacturer") ?? "toyota";
  const year = searchParams.get("year");
  const fuelType = searchParams.get("fuel_type");
  const model = searchParams.get("model");

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await getCarDetails(manufacturer, model, year, fuelType);
        setCars(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error("Error fetching Cars.");
        setCars(undefined);
      }
    };

    void fetchData();
  }, [manufacturer, year, fuelType, model]);

  return (
    <section id="car-grid" className="min-h-[30vh]">
      <div
        className={`home__cars-wrapper ${!isLoading && !cars?.length && "!flex"}`}
      >
        {isLoading ? (
          Array.from({ length: 8 }, (_, index) => (
            <div className="car-card h-[377px] animate-pulse" key={index}></div>
          ))
        ) : cars?.length ? (
          <>
            {cars.map((car: Car, index: number) => (
              <CarCard car={car} key={index} />
            ))}
          </>
        ) : (
          <h1 className="w-full text-center text-xl font-bold">
            Sorry we couldn&apos;t find any cars :(
          </h1>
        )}
      </div>
    </section>
  );
}
