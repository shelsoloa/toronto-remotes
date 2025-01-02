import { getNeighbourhoods } from '@/actions';
import Link from 'next/link';

export default async function NeighbourhoodIndexPage() {
  const neighbourhoods = await getNeighbourhoods();

  return (
    <div>
      <h1>Toronto Remote Working Spots by Neighbourhood</h1>
      <ul>
        {neighbourhoods.map((neighbourhood) => (
          <li key={neighbourhood}>
            <Link href={`/neighbourhoods/${neighbourhood}`}>{neighbourhood}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
