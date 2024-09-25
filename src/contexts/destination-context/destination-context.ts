import { Destination } from '@/types/destination';
import { createContext } from 'react';

interface DestinationContextType {
  selectedDestination: Destination | null;
  setSelectedDestination: (destination: Destination | null) => void;
}

export const DestinationContext = createContext<DestinationContextType | undefined>(undefined);
