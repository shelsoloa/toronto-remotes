import { getVenues } from '@/actions';

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
        <div className='grid grid-cols-3 gap-2'>
          <p>{venue.fields.name}</p>
          <p>{venue.fields.score}</p>
          <p>{venue.fields.neighbourhood}</p>
        </div>
      ))}
    </div>
  );
}
