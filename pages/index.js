import Image from 'next/image'

import LandingHeader from '@/components/header/landingHeader'

export default function Home() {
  return (
    <>
      <main className='bg-gray-900'>
        <LandingHeader />
      </main>
    </>
  )
}
