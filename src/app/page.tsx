import { Hero, CustomFilter, SearchBar, CarCard } from "@/components";
import ItemGrid from "@/components/ItemGrid";
import { fuels, yearsOfProduction } from "@/constants/constants";

export default async function Home() {
  // const cars = await getCarDetails("toyota");

  const cars = [
    {
      city_mpg: "this field is for premium subscribers only",
      class: "compact car",
      combination_mpg: "this field is for premium subscribers only",
      cylinders: 4,
      displacement: 1.6,
      drive: "fwd",
      fuel_type: "gas",
      highway_mpg: "this field is for premium subscribers only",
      make: "toyota",
      model: "corolla",
      transmission: "a",
      year: 1993,
    },
  ];

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

        {cars && (
          <section className="mb-10">
            <div className="home__cars-wrapper">
              {cars.map(
                (car: Record<string, string | number>, index: number) => (
                  <CarCard car={car} key={index} />
                ),
              )}
            </div>
          </section>
        )}

        <ItemGrid />
      </div>
    </main>
  );
}
