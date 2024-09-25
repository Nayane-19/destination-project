import { Destination } from "../types/destination";
import { destinations } from "./fake-api";

export const fetchDestinations = async (query: string): Promise<Destination[]> => {
  console.log(`Fetching destinations with query: ${query}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (query.toLowerCase() === 'fail') {
        reject('Failed to fetch destinations');
      } else {
        const results = destinations.filter(destination =>
          destination.name.toLowerCase().includes(query.toLowerCase())
        );
        resolve(results);
      }
    }, 500);
  });
};