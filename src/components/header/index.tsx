import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = {
  any?: any;
};

export const Header = ({}: HeaderProps) => {
  return (
    <header className='bg-primary'>
      <div className='container mx-auto grid grid-cols-[200px,1fr,200px] items-center text-white '>
        <Link href='/app' title='Go to main page'>
          <Image src='/logo.svg' alt='coinup logo' width={200} height={100} />
        </Link>
        <nav className='flex flex-1 justify-center'>
          <ul className='flex flex-row gap-5'>
            <Link href='#'>
              <li className='flex h-16 flex-1 items-center  border-b-4  border-white'>
                Dashboard
              </li>
            </Link>
            <Link href='#'>
              <li className='flex h-16 flex-1 items-center  border-b-4 border-transparent'>
                Entries
              </li>
            </Link>
          </ul>
        </nav>
        <div className='flex justify-end'>
          <Image
            src='https://i.pravatar.cc/300'
            alt='Profile picture'
            width={40}
            height={40}
            className='rounded-full object-cover'
          />
        </div>
      </div>
    </header>
  );
};
