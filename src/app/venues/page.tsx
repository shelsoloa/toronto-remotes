import { getVenues } from '@/actions';
import VenueTable from '@/components/ui/venue';
import { SectionHeader } from '@/components/ui/header';
export default async function VenuesPage() {
  const venues = await getVenues();

  return (
    <div>
      <SectionHeader className='mb-4'>all curated remote working spots in Toronto</SectionHeader>
      <VenueTable venues={venues} />
    </div>
  );
}
