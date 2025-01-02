import { getVenues } from '@/actions';
import Link from 'next/link';

export default async function Home() {
  const venues = await getVenues();

  return (
    <div>
      <h1>Venues</h1>
      <div className='grid grid-cols-3 gap-2'>
        <p>Name</p>
        <p>WFHScore</p>
        <p>Neighbourhood</p>
      </div>
      {venues.map((venue) => (
        <div
          key={venue.id}
          className='grid grid-cols-3 gap-2'
        >
          <p>{venue.fields.name}</p>
          <p>{venue.fields.score}</p>
          <p>
            <Link href={`/neighbourhoods/${venue.fields.neighbourhood}`}>{venue.fields.neighbourhood}</Link>
          </p>
        </div>
      ))}
    </div>
  );
}
