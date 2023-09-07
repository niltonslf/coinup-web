export default function App() {
  return (
    <main className='flex h-screen w-screen items-center justify-center bg-gray-400'>
      <section className='flex w-96 flex-wrap rounded-md bg-white p-5'>
        <h1>Login</h1>
        <form className='flex w-full flex-col gap-5'>
          <input className='border-1 border' />
          <input className='border-1 border' />
          <button type='submit'>Login</button>
        </form>

        <div className='flex w-full flex-col'>
          <div>Login with google</div>
          <div>Login with Apple</div>
        </div>
      </section>
    </main>
  );
}