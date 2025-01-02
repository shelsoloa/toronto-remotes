import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex items-center gap-4 border-b-2 border-amber-300 p-2'>
      <Link
        className='text-2xl font-bold hover:underline'
        href='/'
      >
        TRWSDB
      </Link>
      <Link
        className='hover:underline'
        href='/venues'
      >
        Browse spots
      </Link>
      <Link
        className='hover:underline'
        href='/neighbourhoods'
      >
        Neighbourhood
      </Link>
    </div>
  );
}
