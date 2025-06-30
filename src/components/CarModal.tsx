import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  // DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export function CardModal() {
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
      <DialogContent className="p-4 sm:max-w-2xl">
        <div className="space-y-6">
          <div className="flex-center relative h-48 overflow-hidden rounded-md">
            <Image fill src="/pattern.png" alt="pattern" />
            <div className="relative aspect-video w-48 sm:w-64">
              <Image fill src="/hero.png" alt="hero" />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="relative flex h-24 flex-1 rounded-md bg-accent sm:h-32">
              <Image
                fill
                alt="car sides"
                className="m-auto !h-4/6 !w-3/4"
                src="/hero.png"
              />
            </div>
            <div className="relative flex h-24 flex-1 rounded-md bg-accent sm:h-32">
              <Image
                fill
                alt="car sides"
                className="m-auto !h-4/6 !w-3/4"
                src="/hero.png"
              />
            </div>
            <div className="relative flex h-24 flex-1 rounded-md bg-accent sm:h-32">
              <Image
                fill
                alt="car sides"
                className="m-auto !h-4/6 !w-3/4"
                src="/hero.png"
              />
            </div>
          </div>

          <div>
            <p className="mb-4 text-lg font-bold">Toyota Fortuner</p>
            <div className="space-y-4">
              <div className="flex-between">
                <p>Year</p>
                <p>2022</p>
              </div>
              <div className="flex-between">
                <p>Engine</p>
                <p>2.8L Diesel</p>
              </div>
              <div className="flex-between">
                <p>Transmission</p>
                <p>Automatic</p>
              </div>
              <div className="flex-between">
                <p>Drive</p>
                <p>4WD</p>
              </div>
              <div className="flex-between">
                <p>Fuel Type</p>
                <p>Diesel</p>
              </div>
              <div className="flex-between">
                <p>Seats</p>
                <p>7</p>
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
                <p>201 hp</p>
              </div>
              <div className="flex-between">
                <p>Torque</p>
                <p>500 Nm</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
