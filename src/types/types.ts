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

export type IconProp = IconType | LucideIcon;
