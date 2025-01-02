import { getRecentlyAddedVenues } from '@/actions';
import VenueTable from '@/components/ui/venue';

export default async function Home() {
  const recentlyAddedVenues = await getRecentlyAddedVenues();

  return (
    <div>
      <h1 className='text-4xl font-bold'>
        Toronto <span className='rounded bg-amber-300 px-1'>Remote Working Spots</span> Database
      </h1>

      <h2 className='pb-2 pt-8 text-2xl font-bold'>recently added</h2>
      <VenueTable venues={recentlyAddedVenues} />
    </div>
  );
}
