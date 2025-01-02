import { Button } from './button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex items-center gap-4 border-b-2 border-primary px-4 py-2'>
      <Button
        variant='ghost'
        size='lg'
        className='px-0 text-2xl font-bold hover:underline'
        asChild
      >
        <Link href='/'>TRWSDB</Link>
      </Button>

      <Button
        variant='ghost'
        size='sm'
        className='hover:underline'
        asChild
      >
        <Link href='/venues'>browse spots</Link>
      </Button>

      <Button
        variant='ghost'
        size='sm'
        className='hover:underline'
        asChild
      >
        <Link href='/neighbourhoods'>neighbourhoods</Link>
      </Button>
    </div>
  );
}
