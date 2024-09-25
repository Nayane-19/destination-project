import { useDestination } from "@/contexts/destination-context/use-destination";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge, CurrencyIcon, Locate, Rainbow } from "lucide-react";

export const DestinationDetails = () => {
  const { selectedDestination } = useDestination();

  if (!selectedDestination) {
    return null;
  }

  return (
    <Card className="w-full md:w-96">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{selectedDestination.name}</h2>
          <Badge name="code" size={24} />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 mb-4">{selectedDestination.description}</p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center space-x-2">
            <Locate size={24} />
            <span className="text-purple-400">Country</span>
            <span className="text-gray-500">{selectedDestination.country}</span>
          </li>
          <li className="flex items-center space-x-2">
            <Rainbow size={24} />
            <span className="text-purple-400">Climate</span>
            <span className="text-gray-500">{selectedDestination.climate}</span>
          </li>
          <li className="flex items-center space-x-2">
            <CurrencyIcon size={24} />
            <span className="text-purple-400">Currency</span>
            <span className="text-gray-500">
              {selectedDestination.currency}
            </span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
