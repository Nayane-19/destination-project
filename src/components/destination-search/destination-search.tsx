import { useFetchDestinations } from "@/hooks/use-fetch-destinations";
import { useDestination } from "@/contexts/destination-context/use-destination";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Destination } from "@/types/destination";

export const DestinationSearch = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { data: results, isLoading, isError, error } = useFetchDestinations(query);
  const { setSelectedDestination } = useDestination();

  const handleChangeValue = (value: string) => {
    if (value === 'fail') {
      setQuery('fail');
      setOpen(false);
      throw error;
    }
    setQuery('');
  }

  const handleSelect = (destination: Destination) => {
    setValue(destination.name === value ? "" : destination.name);
    setOpen(false);
    setSelectedDestination(destination);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[270px] justify-between"
        >
          {value
            ? results?.find((dest) => dest.name === value)?.name
            : "Select Country..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[270px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." onValueChange={(value) => handleChangeValue(value)}/>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {results?.map((dest) => (
                <CommandItem
                  key={dest.id}
                  value={dest.name}
                  onSelect={() => handleSelect(dest)}
                  className="cursor-pointer"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === dest.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {dest.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
      {isError && <div className="text-lg font-bold mb-4 text-red-600">Something went wrong!</div>}
    </Popover>
  );
};
