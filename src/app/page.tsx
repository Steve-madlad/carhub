import { Hero, CustomFilter, SearchBar } from "@/components";
import ItemGrid from "@/components/ItemGrid";
import { fuels, yearsOfProduction } from "@/constants/constants";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="padding-x padding-y max-width mt-12" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters mb-20">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter
              autocompletePlaceholder="Search Fuel type"
              placeholder="Fuel"
              options={fuels.map((fuelType) => fuelType.value)}
              className="max-sm:w-full"
            />
            <CustomFilter
              autocompletePlaceholder="Search By Year"
              placeholder="Year"
              options={yearsOfProduction.map((fuelType) => fuelType.value)}
              className="max-sm:w-full"
            />
          </div>
        </div>

        <ItemGrid />
      </div>
    </main>
  );
}
