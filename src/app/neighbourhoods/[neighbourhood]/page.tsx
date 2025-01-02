import { getVenuesByNeighbourhood } from '@/actions';
import VenueTable from '@/components/ui/venue';

export default async function NeighbourhoodPage({ params }: { params: { neighbourhood: string } }) {
  const neighbourhoodUnicode = decodeURI(params.neighbourhood);
  const venues = await getVenuesByNeighbourhood(neighbourhoodUnicode);

  return (
    <div>
      <h1>Remote Working Spots in {neighbourhoodUnicode}</h1>
      <VenueTable
        venues={venues}
        showNeighbourhood={false}
      />
    </div>
  );
}
