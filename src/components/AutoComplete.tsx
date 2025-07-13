"use client";

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
import { useEffect, useState } from "react";

export default function AutoComplete({
  placeholder,
  autocompletePlaceholder,
  triggerClassName,
  onOptionSelect,
  iconOnSelect: IconOnSelect,
  defaultIcon: DefaultIcon,
  disabled = false,
  options,
  value: controlledValue,
}: AutoCompleteProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(controlledValue ?? "");

  useEffect(() => {
    setValue(controlledValue ?? "");
  }, [controlledValue]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
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

          {value
            ? options.find((option) => option.value === value)?.title
            : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={`w-[var(--radix-popover-trigger-width)] p-0`}>
        <Command>
          <CommandInput placeholder={autocompletePlaceholder} className="h-9" />
          <CommandList>
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              {options.map((option, index) => (
                <CommandItem
                  key={index}
                  value={option.value as string}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    onOptionSelect &&
                      onOptionSelect(
                        currentValue === value ? "" : currentValue,
                      );
                    setOpen(false);
                  }}
                >
                  {option.title}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0",
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
