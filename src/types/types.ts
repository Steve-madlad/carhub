import type { cars } from "@/constants/constants";
import type { LucideIcon } from "lucide-react";
import type { MouseEventHandler } from "react";
import type { IconType } from "react-icons/lib";

export interface CustomButtonProps {
  title: string;
  containerStyles: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface AutoCompleteProps {
  placeholder: string;
  autocompletePlaceholder: string;
  options: string[];
  triggerClassName?: string;
  onOptionSelect?: (value: string) => void;
  iconOnSelect?: IconProp;
  defaultIcon?: IconProp;
}

export interface Car {
  city_mpg: string;
  class: string;
  combination_mpg: string;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: string;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export type IconProp = IconType | LucideIcon;

export type CarKey = keyof typeof cars;
