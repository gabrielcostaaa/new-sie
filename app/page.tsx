import React from 'react'
import LoginPageShad from '../components/LoginPageShad'


export default function Home() {

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-2/3 items-center justify-center ">
        <img src="bg.jpg" alt="Background" className="h-full w-full object-cover" />
      </div>
      <div className="w-full lg:w-1/3">
        <LoginPageShad />
      </div>
    </div>
  );
}
