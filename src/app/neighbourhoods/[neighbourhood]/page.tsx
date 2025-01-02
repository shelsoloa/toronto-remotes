import { getVenuesByNeighbourhood } from '@/actions';

export default async function NeighbourhoodPage({ params }: { params: { neighbourhood: string } }) {
  const neighbourhoodUnicode = decodeURI(params.neighbourhood);
  const venues = await getVenuesByNeighbourhood(neighbourhoodUnicode);

  return (
    <div>
      <h1>{neighbourhoodUnicode} Remote Working Spots</h1>
      <ul>
        {venues.map((venue) => <li key={venue.id}>{venue.fields.name}</li>)}
      </ul>
    </div>
  );
}
