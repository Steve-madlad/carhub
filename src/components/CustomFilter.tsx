"use client";

import AutoComplete from "./AutoComplete";
import { LuChevronsUpDown } from "react-icons/lu";
import { useRouter, useSearchParams } from "next/navigation";

export default function CustomFilter({
  placeholder,
  autocompletePlaceholder,
  options,
  query,
  className,
}: {
  placeholder: string;
  autocompletePlaceholder: string;
  options: Record<string, string>[];
  query: string;
  className?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramValue = searchParams.get(query) ?? "";
  const manufacturer = searchParams.get("manufacturer");

  const validOption = options.find((option) => option.value === paramValue);
  const selectedValue = validOption ? validOption.value : "";

  const handleFilter = (value: string) => {
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set(query, value);

    const queryString = currentParams.toString();
    const newUrl = queryString ? `/?${queryString}` : "/";

    router.push(newUrl, { scroll: false });
  };

  return (
    <AutoComplete
      defaultIcon={LuChevronsUpDown}
      disabled={manufacturer ? false : true}
      autocompletePlaceholder={autocompletePlaceholder}
      placeholder={placeholder}
      options={options}
      triggerClassName={className}
      onOptionSelect={handleFilter}
      value={selectedValue}
    />
  );
}
