import Link from 'next/link';

export default function Footer() {
  return (
    <div className='flex p-2'>
      <div className='flex w-full items-center justify-between gap-2 rounded border border-amber-100 bg-amber-200 p-2'>
        <div>
          <p>
            <Link href='/about'>about</Link>
          </p>
          <p>
            <a href='mailto:shel@shelsoloa.com'>contact us</a>
          </p>
        </div>
        <p>© 2025 TRWSDB</p>
      </div>
    </div>
  );
}
