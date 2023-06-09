import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <Head>
        <title>SnellRun</title>
        <meta name="description" content="2d game escaping Mr Snelling because you are late. Credits: Tristan C, Tom G, Adam L and to everyone who gave suggestions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/HeaderIcon.png" />
      </Head>
      <main className="flex flex-col justify-between md:justify-center items-center h-full bg-[#DF5644] md:bg-white">
        <div className="absolute h-full w-screen z-[1] hidden md:block ">
          <Image
              src="/Images/LandingBG.jpg"
              alt="Background Image"
              fill
              className="-z-10 object-contain"
              priority={true}
          />
        </div>
        <div className="absolute h-full w-screen z-[1] md:hidden">
          <Image
              src="/Images/MobileLandingBG.jpg"
              alt="Background Image"
              fill
              className="-z-10 object-contain"
              priority={true}
          />
        </div>
        <p className="md:hidden z-[2] mt-[20%] font-bold text-white text-7xl">SnellRun</p>
        <Link passHref className="z-[2] w-60 mb-[-75%] md:mb-0 md:mt-36 lg:w-60 p-2 md:p-3 lg:p-4 font-semibold text-[#860C0C] md:text-themeBlue hover:bg-[#D6973A] bg-themeOrange rounded-2xl md:rounded-3xl text-center text-6xl md:text-7xl lg:text-8xl" href="/play">
          <button>Play</button>
        </Link>
        <Link passHref className="z-[2] w-60 mb-[15%] md:mb-0 md:mt-10 lg:w-64 p-2 md:p-3 lg:p-4 font-semibold text-[#07223C] hover:bg-[#295983] bg-[#55748F] rounded-2xl md:rounded-3xl text-center text-6xl md:text-7xl lg:text-8xl" href="/leaderboard">
          <button>Stats</button>
        </Link>
      </main>
    </>
  )
}
