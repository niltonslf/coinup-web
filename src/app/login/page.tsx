import {Button, Input} from '@/components';
import Image from 'next/image';

export default function App() {
  return (
    <main className='flex h-screen w-screen items-center justify-center bg-gray-100'>
      <section className='flex w-4/12 flex-wrap rounded-md bg-white px-5 py-14'>
        <div className='mb-10 flex  w-full justify-center'>
          <Image src='/logo.svg' alt='coinup logo' width={200} height={100} />
        </div>
        <h1 className=' mb-5 w-full text-center text-2xl font-semibold'>
          Access your account
        </h1>
        <form className='flex w-full flex-col gap-3'>
          <label className='flex flex-col gap-2'>
            <span className='font-semibold'>Your email</span>
            <Input name='email' />
          </label>

          <label className='mb-5 flex flex-col gap-2'>
            <span className='font-semibold'>Your password</span>
            <Input name='password' />
          </label>

          <Button href='/'>Login</Button>
        </form>

        <div className='relative w-full py-10'>
          <div className='h-[1px]  border-t-[1px]'></div>
          <span className='absolute left-[calc(50%-20px)] top-[calc(50%-12px)] w-[40px] bg-white text-center text-gray-400 '>
            OR
          </span>
        </div>

        <div className='mt-5 flex w-full flex-col gap-3'>
          <div className='border-1 relative cursor-pointer rounded-md border p-2 text-center font-semibold hover:bg-gray-100'>
            <Image
              src='/google.svg'
              width={30}
              height={30}
              alt='Google logo'
              className='absolute left-3 top-[calc(50%-15px)]'
            />
            Login with google
          </div>
        </div>
      </section>
    </main>
  );
}
