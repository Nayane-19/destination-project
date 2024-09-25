import { DestinationDetails } from "@/components/destination-details/destination-details";
import { DestinationSearch } from "@/components/destination-search/destination-search";
import { DestinationSuggestions } from "@/components/destination-suggestion/destination-sugestion";
import illustration from "@/assets/illustration.svg";
import { DestinationProvider } from "@/contexts/destination-context/destination-provider";

export const Home = () => {
  
  return (
    <DestinationProvider>
      <div className="py-24 flex items-center justify-center flex-col gap-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <img src={illustration} className="w-3/5 object-cover"/>
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl">Destinations</h1>
            <DestinationSearch />
            <DestinationDetails />
            <DestinationSuggestions />         
          </div>
        </div>
      </div>
    </DestinationProvider>
  );
};
