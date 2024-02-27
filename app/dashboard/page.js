"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="fixed flex justify-between items-center pl-4 pr-4 pb-2 pt-4 md:pl-12 md:pr-12 md:pb-8 md:pt-8 w-full bg-white">
        <Link
          href="/"
          className="flex justify-center items-center space-x-2 text-2xl w-[184px]"
        >
          <Image width={52} height={52} src="/logo.png"></Image>
          <h2>MedMentor</h2>
        </Link>
        <div className="hidden md:flex justify-center items-center space-x-12">
          <button className="text-xl hover:text-blue-400">
            <Link href="/">Home</Link>
          </button>
          <button className="text-xl hover:text-blue-400 underline">
            <Link href="/dashboard">Dashboard</Link>
          </button>
        </div>
        {isSignedIn ? (
          <div className="flex justify-end items-center space-x-4 w-[184px]">
            <UserButton />
          </div>
        ) : (
          <div className="hidden md:flex justify-center items-center space-x-4 w-[184px]">
            <button className="text-xl rounded-2xl">
              <Link href="/sign-in">Sign In</Link>
            </button>
            <button className="text-xl pt-2 pb-2 pl-4 pr-4 bg-gray-800 text-white rounded-2xl bg-black">
              <Link href="/sign-up">Sign Up</Link>
            </button>
          </div>
        )}
      </nav>
      <div className="flex flex-col justify-center items-center w-[80%] mt-52">
        <h1 className="text-black text-4xl md:text-6xl text-center font-bold">
          Coming Soon
        </h1>
      </div>
    </main>
  );
}
