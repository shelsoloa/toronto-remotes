import { Venue } from '@/schema';
import Link from 'next/link';

type VenueTableProps = {
  venues: Venue[];
  showNeighbourhood?: boolean;
};

export default function VenueTable({ venues, showNeighbourhood = true }: VenueTableProps) {
  const gridCols = showNeighbourhood ? 'grid-cols-3' : 'grid-cols-2';

  return (
    <>
      <div className={`grid gap-2 font-bold ${gridCols}`}>
        <p>Name</p>
        <p>WFHScore</p>
        {showNeighbourhood && <p>Neighbourhood</p>}
      </div>
      {venues.map((venue: Venue) => (
        <div className={`grid gap-2 ${gridCols}`}>
          <p className='font-bold'>
            <Link href={`/venues/${venue.id}`}>{venue.fields.name}</Link>
          </p>
          <p>{venue.fields.score}</p>

          {showNeighbourhood && (
            <p>
              <Link href={`/neighbourhoods/${venue.fields.neighbourhood}`}>
                {venue.fields.neighbourhood}
              </Link>
            </p>
          )}
        </div>
      ))}
    </>
  );
}
