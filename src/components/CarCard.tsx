import { Card } from "@/components/ui/card";
import { getCarImage } from "data/utils";
import Image from "next/image";
import { TbSteeringWheel } from "react-icons/tb";
import { CardModal } from "./";
import type { Car, CarKey } from "@/types/types";

export default function CarCard({ car }: { car: Car }) {
  const { make, model, transmission, fuel_type, drive } = car;

  return (
    <Card className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="mt-6 flex text-[32px] font-extrabold leading-8">
        <span className="font-semi-bold self-start text-sm">$</span>
        <span>{(Math.random() * (65 - 34) + 34).toFixed(0)}</span>
        <span className="self-end text-sm font-medium">/day</span>
      </p>

      <div className="relative my-3 h-40 w-full object-contain">
        <Image
          src={getCarImage(make as CarKey)}
          alt="car model"
          objectFit="contain"
          fill
          priority
        />
      </div>

      <div className="relative mt-2 flex w-full">
        <div className="flex-between text-gray w-full group-hover:invisible">
          <div className="col-center gap-2">
            <TbSteeringWheel size={25} />
            <p className="text-[14px] capitalize">{drive}</p>
          </div>

          <div className="col-center gap-2">
            <div className="relative size-[25px]">
              <Image
                className="!top-0 m-auto !size-[20px]"
                fill
                alt="transmission"
                src="transmission-svgrepo-com.svg"
              />
            </div>

            <p className="text-[14px] capitalize">
              {transmission === "a" ? "automatic" : "manual"}
            </p>
          </div>

          <div className="col-center gap-2">
            <div className="relative size-[25px]">
              <Image
                className="!top-0 m-auto !size-[25px]"
                fill
                alt={fuel_type === "gas" ? "gas" : "electric"}
                src={
                  fuel_type === "gas"
                    ? "gas-station-svgrepo-com.svg"
                    : "electric-refueling-svgrepo-com.svg"
                }
              />
            </div>

            <p className="text-[14px] capitalize">
              {fuel_type === "gas" ? "gas" : "electric"}
            </p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CardModal details={car} />
        </div>
      </div>
    </Card>
  );
}
