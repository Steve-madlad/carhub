"use client";

import { useState } from "react";
import AutoComplete from "./AutoComplete";
import { Button } from "./ui/button";
import { FaSearch } from "react-icons/fa";
import { SiVolkswagen } from "react-icons/si";
import { manufacturers } from "@/constants/constants";

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(manufacturer || "No manufacturer selected");
  };

  const handleSelect = (value: string): void => {
    setManufacturer(value);
  };

  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="searchbar__item">
        <AutoComplete
          autocompletePlaceholder="Search manufacturer"
          placeholder="Select Manufacturer"
          iconOnSelect={SiVolkswagen}
          onOptionSelect={handleSelect}
          triggerClassName="w-full rounded-e-none rounded-s-md border-r-0 shadow-none hover:bg-transparent"
          options={manufacturers}
        />
      </div>

      <div className="searchbar__item">
        <AutoComplete
          autocompletePlaceholder="Search manufacturer"
          placeholder="Select Manufacturer"
          triggerClassName="w-full rounded-s-none rounded-e-md border-s-0 shadow-none hover:bg-transparent"
          options={manufacturers}
        />
      </div>

      <Button
        type="submit"
        className="absolute right-0 size-fit h-full rounded-e-md rounded-s-none border border-l-0 bg-white text-black shadow-none hover:border-primary-blue hover:bg-primary-blue hover:text-white"
      >
        <FaSearch />
      </Button>
    </form>
  );
}
