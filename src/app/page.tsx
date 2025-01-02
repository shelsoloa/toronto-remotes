import { getRecentlyAddedVenues } from '@/actions';
import { SectionHeader } from '@/components/ui/header';
import VenueTable from '@/components/ui/venue';

export default async function Home() {
  const recentlyAddedVenues = await getRecentlyAddedVenues();

  return (
    <div>
      <h1 className='text-4xl mb-8 font-bold'>
        Toronto <span className='rounded bg-primary px-1'>Remote Working Spots</span> Database
      </h1>

      <SectionHeader className='mb-4'>recently added</SectionHeader>
      <VenueTable venues={recentlyAddedVenues} />
    </div>
  );
}
