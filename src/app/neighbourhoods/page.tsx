import { getNeighbourhoods } from '@/actions';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/header';
import Link from 'next/link';

export default async function NeighbourhoodIndexPage() {
  const neighbourhoods = await getNeighbourhoods();

  return (
    <div>
      <SectionHeader>remote working spots by neighbourhood</SectionHeader>

      <ul className='flex flex-col gap-2 pt-4'>
        {neighbourhoods.map((neighbourhood) => (
          <li key={neighbourhood}>
            <Button variant='link' className='px-0' size='lg' asChild>
              <Link href={`/neighbourhoods/${neighbourhood}`}>{neighbourhood}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
