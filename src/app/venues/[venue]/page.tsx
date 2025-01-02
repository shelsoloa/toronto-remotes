import { getVenueById } from '@/actions';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/header';
import { Button } from '@/components/ui/button';

type Params = Promise<{ venue: string }>;

export default async function VenuePage({ params }: { params: Params }) {
  const { venue: venueId } = await params;
  const venue = await getVenueById(venueId);

  return (
    <div>
      <SectionHeader>{venue.fields.name}</SectionHeader>
      <Button variant='link' asChild>
        <Link href={`/neighbourhoods/${venue.fields.neighbourhood}`}>
          {venue.fields.neighbourhood}
        </Link>
      </Button>
      <p>Address: {venue.fields.address}</p>
      <p>Pros: {venue.fields.pros}</p>
      <p>Cons: {venue.fields.cons}</p>
      <p>Rating: {venue.fields.score}</p>
    </div>
  );
}
