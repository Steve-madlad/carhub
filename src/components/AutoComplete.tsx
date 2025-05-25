"use client";

import * as React from "react";
import { Check, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { AutoCompleteProps } from "@/types/types";

export default function AutoComplete({
  placeholder,
  autocompletePlaceholder,
  triggerClassName,
  onOptionSelect,
  popoverClassName,
  iconOnSelect: IconOnSelect,
  defaultIcon: DefaultIcon,
  options,
}: AutoCompleteProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-[200px] justify-start outline-none ${!value && "text-muted-foreground"} ${triggerClassName}`}
        >
          {value && IconOnSelect ? (
            <IconOnSelect />
          ) : DefaultIcon ? (
            <DefaultIcon />
          ) : (
            <Search />
          )}

          {value ? options.find((option) => option === value) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={`w-[var(--radix-popover-trigger-width)] p-0 ${popoverClassName}`}
      >
        <Command>
          <CommandInput placeholder={autocompletePlaceholder} className="h-9" />
          <CommandList>
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option}
                  value={option}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    onOptionSelect &&
                      onOptionSelect(
                        currentValue === value ? "" : currentValue,
                      );
                    setOpen(false);
                  }}
                >
                  {option}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
