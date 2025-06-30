"use client";

import { useState } from "react";
import AutoComplete from "./AutoComplete";
import { Button } from "./ui/button";
import { FaSearch } from "react-icons/fa";
import { SiVolkswagen } from "react-icons/si";
import { manufacturers } from "@/constants/constants";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const router = useRouter();

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (manufacturer) {
      router.push(`/?manufacturer=${encodeURIComponent(manufacturer)}`);
    }
  };

  const handleSelect = (value: string): void => {
    setManufacturer(value);
  };

  return (
    <form onSubmit={handleSearch} className="searchbar pr-[60px] sm:p-0">
      <div className="searchbar__item">
        <AutoComplete
          autocompletePlaceholder="Search manufacturer"
          placeholder="Select Manufacturer"
          iconOnSelect={SiVolkswagen}
          onOptionSelect={handleSelect}
          triggerClassName="w-full sm:rounded-e-none sm:rounded-s-md sm:border-r-0 !bg-transparent shadow-none"
          options={manufacturers}
        />
      </div>

      <div className="searchbar__item">
        <AutoComplete
          autocompletePlaceholder="Search manufacturer"
          placeholder="Select Manufacturer"
          triggerClassName="w-full sm:rounded-s-none sm:rounded-e-md sm:border-s-0 !bg-transparent shadow-none"
          options={manufacturers}
        />
      </div>

      <Button
        type="submit"
        className="absolute right-0 size-fit h-full rounded-md border bg-white text-black shadow-none hover:border-primary-blue hover:bg-primary-blue hover:text-white sm:rounded-e-md sm:rounded-s-none sm:border-l-0"
      >
        <FaSearch />
      </Button>
    </form>
  );
}
