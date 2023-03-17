import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <Head>
        <title>SnellRun</title>
        <meta name="description" content="2d game escaping Mr Snelling because you are late. Credits: Tristan C, Alexa G, Tom G, Adam L and to everyone who gave suggestions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-end md:justify-center items-center min-h-screen max-h-screen bg-[#DF5644] md:bg-white">
        <div className="absolute h-screen w-screen z-[1] hidden md:block ">
          <Image
              src="/Images/LandingBG.jpg"
              alt="Background Image"
              fill
              className="-z-10 object-contain"
          />
        </div>
        <div className="absolute h-screen w-screen z-[1] md:hidden">
          <Image
              src="/Images/MobileLandingBG.jpg"
              alt="Background Image"
              fill
              className="-z-10 object-contain"
          />
        </div>
        <Link passHref className="z-[2] w-60 mb-32 md:w-60 lg:w-80 p-2 md:p-3 lg:p-5 font-semibold text-[#860C0C] md:text-themeBlue hover:bg-[#FF9800] bg-themeOrange rounded-2xl md:rounded-3xl text-center text-7xl md:text-8xl lg:text-9xl" href="/play">
          <button>Play</button>
        </Link>
      </main>
    </>
  )
}
