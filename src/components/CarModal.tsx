import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import type { Car, CarKey } from "@/types/types";
import { getCarImage, toPascalCase } from "data/utils";

export function CardModal({ details }: { details: Car }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="flex-center group w-full rounded-full border-2 !border-primary-blue bg-primary-blue text-white hover:bg-none hover:text-primary-blue hover:shadow-lg"
        >
          See More
          <MoveRight className="absolute right-8 duration-300 group-hover:animate-bounce-x" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto p-4 sm:max-w-2xl">
        <DialogTitle>Car Details</DialogTitle>
        <div className="space-y-6">
          <div className="flex-center relative h-48 overflow-hidden rounded-md">
            <Image fill src="/pattern.png" alt="pattern" />
            <div className="relative aspect-[16/10] w-48 sm:w-64">
              <Image
                fill
                src={getCarImage(details.make as CarKey)}
                alt="hero"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="relative flex h-24 flex-1 rounded-md bg-accent sm:h-32">
              <Image
                fill
                alt="car sides"
                className="m-auto !h-4/6 !w-3/4"
                src={getCarImage(details.make as CarKey)}
              />
            </div>
            <div className="relative flex h-24 flex-1 rounded-md bg-accent sm:h-32">
              <Image
                fill
                alt="car sides"
                className="m-auto !h-4/6 !w-3/4"
                src={getCarImage(details.make as CarKey)}
              />
            </div>
            <div className="relative flex h-24 flex-1 rounded-md bg-accent sm:h-32">
              <Image
                fill
                alt="car sides"
                className="m-auto !h-4/6 !w-3/4"
                src={getCarImage(details.make as CarKey)}
              />
            </div>
          </div>

          <div>
            <p className="mb-4 text-lg font-bold">
              {toPascalCase(details.make)} {toPascalCase(details.model)}
            </p>
            <div className="space-y-4">
              <div className="flex-between">
                <p>Year</p>
                <p>{details.year}</p>
              </div>
              <div className="flex-between">
                <p>Cylinders</p>
                <p>{details.cylinders}</p>
              </div>
              <div className="flex-between">
                <p>Transmission</p>
                <p>{details.transmission === "a" ? "Automatic" : "Manual"}</p>
              </div>
              <div className="flex-between">
                <p>Drive</p>
                <p>{details.drive.toUpperCase()}</p>
              </div>
              <div className="flex-between">
                <p>Fuel Type</p>
                <p>{details.fuel_type.toUpperCase()}</p>
              </div>
              <div className="flex-between">
                <p>Displacement</p>
                <p>{details.displacement}</p>
              </div>
              <div className="flex-between">
                <p>City MPG</p>
                <p>14</p>
              </div>
              <div className="flex-between">
                <p>Highway MPG</p>
                <p>18</p>
              </div>
              <div className="flex-between">
                <p>Horsepower</p>
                <p>{(Math.random() * (342 - 53) + 53).toFixed(0)} hp</p>
              </div>
              <div className="flex-between">
                <p>Torque</p>
                <p>{(Math.random() * (500 - 250) + 250).toFixed(0)} Nm</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
