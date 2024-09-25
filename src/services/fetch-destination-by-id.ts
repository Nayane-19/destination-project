import { Destination } from "@/types/destination";
import { destinations } from "./fake-api";

export const fetchDestinationById = async (id: number): Promise<Destination | undefined> => {
  console.log(`Fetching destination with ID: ${id}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      const destination = destinations.find(dest => dest.id === id);
      resolve(destination);
    }, 500);
  });
};
