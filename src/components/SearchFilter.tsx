"use client";

import { useEffect, useState } from "react";
import AutoComplete from "./AutoComplete";
import { Button } from "./ui/button";
import { FaSearch } from "react-icons/fa";
import { SiVolkswagen } from "react-icons/si";
import { manufacturers } from "@/constants/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { toPascalCase } from "data/utils";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const manufacturerParam = searchParams.get("manufacturer");
  const modelParam = searchParams.get("model");

  const [manufacturer, setManufacturer] = useState(manufacturerParam ?? "");
  const [model, setModel] = useState(modelParam ?? "");

  const isValidManufacturer = manufacturers.some(
    (option) => option.value === manufacturer,
  );

  const selectedManufacturerValue = isValidManufacturer ? manufacturer : "";

  const validManufacturerModels = manufacturers.find(
    (option) => option.value === manufacturer,
  );

  const modelOptions = validManufacturerModels
    ? validManufacturerModels.models.map((model) => ({
        title: toPascalCase(model),
        value: toPascalCase(model),
      }))
    : [];

  const isValidModel = modelOptions.find((option) => option.value === model);
  const selectedModelValue = isValidModel ? isValidModel.value : "";

  useEffect(() => {
    setManufacturer(manufacturerParam ?? "");
  }, [manufacturerParam]);
  useEffect(() => {
    setModel(modelParam ?? "");
  }, [modelParam]);

  const router = useRouter();

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (manufacturer) {
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.set("manufacturer", manufacturer);
      model ? currentParams.set("model", model) : currentParams.delete("model");

      const queryString = currentParams.toString();
      router.push(`/?${queryString}`, { scroll: false });
    }
  };

  const handleSelect = (
    value: string,
    type: "manufacturer" | "model",
  ): void => {
    type === "manufacturer"
      ? (setManufacturer(value), setModel(""))
      : setModel(value);
  };

  return (
    <form onSubmit={handleSearch} className="searchbar pr-[60px] sm:p-0">
      <div className="searchbar__item">
        <AutoComplete
          autocompletePlaceholder="Search Manufacturer"
          placeholder="Select Manufacturer"
          iconOnSelect={SiVolkswagen}
          onOptionSelect={(value) => handleSelect(value, "manufacturer")}
          triggerClassName="w-full sm:rounded-e-none sm:rounded-s-md sm:border-r-0 !bg-transparent shadow-none"
          options={manufacturers}
          value={selectedManufacturerValue}
        />
      </div>

      <div className="searchbar__item">
        <AutoComplete
          autocompletePlaceholder="Search Model"
          placeholder="Select Model"
          triggerClassName="w-full sm:rounded-s-none sm:rounded-e-md sm:border-s-0 !bg-transparent shadow-none"
          onOptionSelect={(value) => handleSelect(value, "model")}
          options={modelOptions}
          disabled={!validManufacturerModels}
          value={selectedModelValue}
        />
      </div>

      <Button
        type="submit"
        className="absolute right-0 size-fit h-full rounded-md border bg-white text-black shadow-none hover:border-primary-blue hover:bg-primary-blue hover:text-white focus:border-primary-blue focus:bg-primary-blue focus:text-white focus:!outline-none sm:rounded-e-md sm:rounded-s-none sm:border-l-0"
      >
        <FaSearch />
      </Button>
    </form>
  );
}
