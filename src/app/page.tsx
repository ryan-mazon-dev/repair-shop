import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-black bg-home-img bg-cover bg-center'>
      <main className='mx-auto flex h-dvh max-w-5xl flex-col justify-center text-center'>
        <div className='mx-auto flex w-4/5 flex-col gap-6 rounded-xl bg-black/90 p-12 text-white sm:max-w-96 sm:text-2xl'>
          <h1 className='text-4xl font-bold'>
            Dan&apos;s Computer
            <br />
            Repair Shop
          </h1>
          <address>
            555 Gateway Lane
            <br />
            Kansas City, KS 55555
          </address>
          <p>Open Daily: 9am - 5pm</p>
          <Link href='tel:+18005555555' className='hover:underline'>
            (800) 555-5555
          </Link>
        </div>
      </main>
    </div>
  )
}
