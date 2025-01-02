import { getVenuesByNeighbourhood } from '@/actions';
import Link from 'next/link';

export default async function NeighbourhoodPage({ params }: { params: { neighbourhood: string } }) {
  const neighbourhoodUnicode = decodeURI(params.neighbourhood);
  const venues = await getVenuesByNeighbourhood(neighbourhoodUnicode);

  return (
    <div>
      <h1>Remote Working Spots in {neighbourhoodUnicode}</h1>
      <ul>
        {venues.map((venue) => (
          <li key={venue.id}>
            <Link href={`/venues/${venue.id}`}>{venue.fields.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
