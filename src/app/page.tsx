import { Hero, CustomFilter, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants/constants";
import CarGrid from "@/components/CarGrid";
import { Suspense } from "react";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";
export default async function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="padding-x padding-y max-width mt-12" id="discover">
        <div className="home__text-container" id="catalogue">
          <Link href={"#car-grid"} className="flex-center group gap-3">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <FaLink
              size={24}
              className="opacity-0 duration-300 group-hover:opacity-100 group-focus:opacity-100"
            />
          </Link>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters mb-20">
          <Suspense>
            <SearchBar />
          </Suspense>

          <div className="home__filter-container">
            <Suspense>
              <CustomFilter
                autocompletePlaceholder="Search Fuel type"
                placeholder="Fuel"
                query="fuel_type"
                options={fuels}
                className="max-sm:w-full"
              />
              <CustomFilter
                autocompletePlaceholder="Search By Year"
                placeholder="Year"
                query="year"
                options={yearsOfProduction}
                className="max-sm:w-full"
              />
            </Suspense>
          </div>
        </div>

        <Suspense>
          <CarGrid />
        </Suspense>
      </div>
    </main>
  );
}
