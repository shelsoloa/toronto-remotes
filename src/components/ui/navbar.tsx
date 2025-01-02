import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between bg-amber-300 p-4'>
      <h1 className='text-2xl font-bold'>
        <Link href='/'>TRWSDB</Link>
      </h1>
      <div className='flex items-center gap-4'>
        <Link href='/venues'>Spots</Link>
        <Link href='/neighbourhoods'>By Neighbourhood</Link>
      </div>
    </div>
  );
}
