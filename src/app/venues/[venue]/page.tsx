import { getVenueById } from '@/actions';
import Link from 'next/link';

type Params = Promise<{ venue: string }>;

export default async function VenuePage({ params }: { params: Params }) {
  const { venue: venueId } = await params;
  const venue = await getVenueById(venueId);

  return (
    <div>
      <h1>Name: {venue.fields.name}</h1>
      <p>
        Neighbourhood:{' '}
        <Link href={`/neighbourhoods/${venue.fields.neighbourhood}`}>
          {venue.fields.neighbourhood}
        </Link>
      </p>
      <p>Address: {venue.fields.address}</p>
      <p>Pros: {venue.fields.pros}</p>
      <p>Cons: {venue.fields.cons}</p>
      <p>Score: {venue.fields.score}</p>
    </div>
  );
}
