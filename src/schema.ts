export type Venue = {
  id: string;
  fields: {
    name: string;
    address: string;
    score: number;
    pros: string;
    cons: string;
    neighbourhood: string;
    categories: string[];
  };
};
