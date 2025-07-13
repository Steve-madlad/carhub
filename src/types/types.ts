import type { cars } from "@/constants/constants";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons/lib";

export interface AutoCompleteProps {
  placeholder: string;
  autocompletePlaceholder: string;
  options: Record<string, string | string[]>[];
  triggerClassName?: string;
  onOptionSelect?: (value: string) => void;
  iconOnSelect?: IconProp;
  disabled?: boolean;
  defaultIcon?: IconProp;
  value?: string;
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
  transmission: "m" | "a";
  year: number;
}

export type IconProp = IconType | LucideIcon;

export type CarKey = keyof typeof cars;
