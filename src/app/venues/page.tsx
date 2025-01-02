import { getVenues } from '@/actions';
import { Venue } from '@/schema';
import Link from 'next/link';

export default async function VenuesPage() {
  const venues = await getVenues();

  return (
    <div>
      <h1>Toronto Remote Working Spots</h1>
      <div className='grid grid-cols-3 gap-2'>
        <p>Name</p>
        <p>WFHScore</p>
        <p>Neighbourhood</p>
      </div>
      {venues.map((venue: Venue) => (
        <div
          key={venue.id}
          className='grid grid-cols-3 gap-2'
        >
          <p>
            <Link href={`/venues/${venue.id}`}>{venue.fields.name}</Link>
          </p>
          <p>{venue.fields.score}</p>
          <p>
            <Link href={`/neighbourhoods/${venue.fields.neighbourhood}`}>
              {venue.fields.neighbourhood}
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
}
