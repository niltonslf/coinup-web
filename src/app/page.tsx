import {LinkButton} from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='relative flex h-screen w-screen  flex-col items-center'>
      <header className='container z-10 flex items-center justify-between py-5  md:px-10'>
        <div>
          <Image src='/logo.svg' width={150} height={80} alt='Coinup logo' />
        </div>
        <nav className='flex flex-row items-center gap-10'>
          <span>Sign Up</span>
          <LinkButton href='/login'>Sign In</LinkButton>
        </nav>
      </header>

      <main className='container z-10  flex h-full w-full flex-row items-center md:px-10'>
        <article className='flex max-w-2xl flex-col items-start gap-10'>
          <h1 className='10 text-[70px] font-bold  leading-none'>
            Take full control of your financial life!
          </h1>
          <p className='text-lg text-gray-800'>
            Control your money anywhere with a practical and secure solution,
            and guarantee full control of your finances.
          </p>

          <LinkButton href='/login'>Try for free</LinkButton>
        </article>
      </main>
      <div className="absolute right-0 top-0 z-0 h-full w-7/12 flex-1  bg-[url('/home-bg.png')] bg-cover bg-[right_top_10%] bg-no-repeat "></div>
    </div>
  );
}
