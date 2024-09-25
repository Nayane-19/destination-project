import { useEffect, useState } from 'react';
import { useDestination } from '@/contexts/destination-context/use-destination';
import { Destination } from '@/types/destination';
import { useFetchDestinations } from '@/hooks/use-fetch-destinations';
import { Button } from '../ui/button';

export const DestinationSuggestions = () => {
  const { selectedDestination, setSelectedDestination } = useDestination();
  const { data: results } = useFetchDestinations("");

  const [suggestions, setSuggestions] = useState<Destination[]>([]);

  useEffect(() => {
    if (!selectedDestination) return;

    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
      const toRad = (value: number) => (value * Math.PI) / 180;
      const R = 6371; // km
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    };

    const sortedDestinations = results?.filter(dest => dest.id !== selectedDestination.id)
      .map(dest => ({
        ...dest,
        distance: calculateDistance(selectedDestination.latitude, selectedDestination.longitude, dest.latitude, dest.longitude),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5);

    if (sortedDestinations) {
      setSuggestions(sortedDestinations);
    }

  }, [selectedDestination, results]);

  if (!selectedDestination || !suggestions.length) return null;

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-lg w-full md:w-96">
      <h3 className="text-lg font-semibold mb-3">Nearby Destinations</h3>
      <ul className="space-y-2">
        {suggestions.map(suggestion => (
          <li key={suggestion.id}>
            <Button
              variant={selectedDestination === suggestion ? "secondary" : "outline"}
              className={`w-full py-2 ${
                selectedDestination === suggestion
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-900"
              }`}
              onClick={() => setSelectedDestination(suggestion)}
            >
              {suggestion.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
