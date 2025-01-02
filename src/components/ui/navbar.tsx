import { Button } from './button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex items-center gap-4 border-b-2 border-primary px-4 py-2'>
      <Button
        size='lg'
        className='border border-black text-2xl font-bold hover:underline hover:bg-white hover:text-primary'
        asChild
      >
        <Link href='/'>TRWSDB</Link>
      </Button>

      <Button
        variant='link'
        size='sm'
        className='hover:underline'
        asChild
      >
        <Link href='/venues'>browse spots</Link>
      </Button>

      <Button
        variant='link'
        size='sm'
        className='hover:underline'
        asChild
      >
        <Link href='/neighbourhoods'>neighbourhoods</Link>
      </Button>
    </div>
  );
}
