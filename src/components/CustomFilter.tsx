"use client";

import React from "react";
import AutoComplete from "./AutoComplete";
import { LuChevronsUpDown } from "react-icons/lu";

export default function CustomFilter({
  placeholder,
  autocompletePlaceholder,
  options,
  className,
}: {
  placeholder: string;
  autocompletePlaceholder: string;
  options: string[];
  className?: string;
}) {
  return (
    <AutoComplete
      defaultIcon={LuChevronsUpDown}
      autocompletePlaceholder={autocompletePlaceholder}
      placeholder={placeholder}
      options={options}
      triggerClassName={className}
    />
  );
}
