import { Card, CardHeader, CardContent } from "@/components/ui/card";

const cars = [
  {
    name: "Toyota Camry",
    created: "2 days ago",
  },
  {
    name: "Honda Accord",
    created: "1 day ago",
  },
  {
    name: "Tesla Model 3",
    created: "3 days ago",
  },
  {
    name: "BMW 3 Series",
    created: "4 days ago",
  },
  {
    name: "Audi A4",
    created: "5 days ago",
  },
  {
    name: "Mercedes-Benz C-Class",
    created: "6 days ago",
  },
  {
    name: "Ford Mustang",
    created: "7 days ago",
  },
  {
    name: "Volkswagen Golf",
    created: "8 days ago",
  },
];

export default function ItemGrid() {
  return (
    <div className="mx-auto grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cars.map((car, index) => (
        <Card
          key={car.name}
          className="relative cursor-pointer overflow-hidden duration-300 hover:shadow-lg xl:min-h-[300px] xl:min-w-[270px]"
        >
          <CardHeader className="h-full p-0">
            <img
              src={
                (index + 1) % 2 === 0
                  ? "https://picsum.photos/id/133/400/400.webp"
                  : "https://picsum.photos/id/376/400/400.webp"
              }
              alt={car.name}
              width={400}
              height={225}
              className="aspect-square size-full object-cover"
            />
          </CardHeader>
          <CardContent className="absolute bottom-0 w-full bg-[#e8f2fb70] p-2 text-white backdrop-blur-md">
            <div className="text-xl font-bold">{car.name}</div>
            <div className="text-sm text-gray-100 dark:text-gray-400">
              Added {car.created}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
