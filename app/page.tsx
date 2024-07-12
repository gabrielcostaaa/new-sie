import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from 'react'
import LoginPage from '../components/LoginPage'

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <LoginPage />
      </div>
  );
}
