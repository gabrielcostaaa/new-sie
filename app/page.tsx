import React from 'react'
import LoginPageShad from '../components/LoginPageShad'
import Image from 'next/image'


export default function Home() {

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-2/3 items-center justify-center ">
      <Image
        src="/bg.jpg"
        alt="Background"
        className="h-full w-full object-cover"
        width={1080}
        height={1920}
      />
      </div>
      <div className="w-full lg:w-1/3">
        <LoginPageShad />
      </div>
    </div>
  );
}
