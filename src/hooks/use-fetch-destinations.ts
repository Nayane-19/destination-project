import { useQuery } from '@tanstack/react-query';
import { Destination } from '../types/destination';
import { fetchDestinations } from '@/services/fetch-destination';
import { fetchDestinationById } from '@/services/fetch-destination-by-id';

export const useFetchDestinations = (query: string) => {
  return useQuery<Destination[], Error>({ queryKey: ['destinations', query], queryFn: () => fetchDestinations(query)});
};

export const useFetchDestinationById = (id: number) => {
  return useQuery<Destination | undefined, Error>({ queryKey: [`destinations-${id}`], queryFn: () => fetchDestinationById(id) });
};
