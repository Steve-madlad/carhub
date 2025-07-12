"use client";

import type { Car } from "@/types/types";
import { useEffect, useState } from "react";
import CarCard from "./CarCard";
import { getCarDetails } from "@/actions/carActions";
import { useSearchParams } from "next/navigation";

export default function CarGrid() {
  const [cars, setCars] = useState<Car[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const manufacturer = searchParams.get("manufacturer") ?? "toyota";

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await getCarDetails(manufacturer);
      setCars(data);
      setIsLoading(false);
    };
    void fetchData();
  }, [manufacturer]);

  return (
    <section id="car-grid">
      <div className="home__cars-wrapper">
        {isLoading
          ? Array.from({ length: 8 }, (_, index) => (
              <div
                className="car-card h-[377px] animate-pulse"
                key={index}
              ></div>
            ))
          : cars && (
              <>
                {cars.map((car: Car, index: number) => (
                  <CarCard car={car} key={index} />
                ))}
              </>
            )}
      </div>
    </section>
  );
}
