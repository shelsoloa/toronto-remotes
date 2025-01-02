import { getVenues } from '@/actions';
import VenueTable from '@/components/ui/venue';

export default async function VenuesPage() {
  const venues = await getVenues();

  return (
    <div>
      <h1 className='mb-4 text-2xl font-bold'>Toronto Remote Working Spots</h1>
      <VenueTable venues={venues} />
    </div>
  );
}
