import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between bg-amber-300 p-4'>
      <h1 className='text-2xl font-bold'>Remotes</h1>
      <div className='flex items-center gap-4'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
  );
}
