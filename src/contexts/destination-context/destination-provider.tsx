import { Destination } from "@/types/destination";
import { DestinationContext } from "./destination-context";
import { useState } from "react";

type DestinationProviderProps = {
  children: React.ReactNode;
};

export const DestinationProvider = ({ children }: DestinationProviderProps) => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  return (
    <DestinationContext.Provider value={{ selectedDestination, setSelectedDestination }}>
      {children}
    </DestinationContext.Provider>
  );
};