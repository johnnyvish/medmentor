"use client";

import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      <nav className="fixed flex justify-between items-center pl-4 pr-4 pb-2 pt-4 md:pl-12 md:pr-12 md:pb-8 md:pt-8 w-full bg-white">
        <Link
          href="/"
          className="flex justify-center items-center space-x-2 text-2xl w-[184px]"
        >
          <Image width={52} height={52} src="/logo.png"></Image>
          <h2>MedMentor</h2>
        </Link>
        <div className="hidden md:flex justify-center items-center space-x-12">
          <button className="text-xl hover:text-blue-400 underline">
            <Link href="/">Home</Link>
          </button>
          <button className="text-xl hover:text-blue-400">
            <Link href="/contact">Contact</Link>
          </button>
          <button className="text-xl hover:text-blue-400">
            <Link href="/dashboard">Dashboard</Link>
          </button>
        </div>
        {isSignedIn ? (
          <div className="flex justify-end items-center space-x-4 w-[184px]">
            <UserButton />
            <p className="md:hidden">
              <svg
                width="24"
                height="30"
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="5" fill="black" />
                <rect y="12.5" width="40" height="5" fill="black" />
                <rect y="25" width="40" height="5" fill="black" />
              </svg>
            </p>
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
      <div className="flex flex-col min-h-screen justify-center items-center w-full">
        <h1 className="text-black text-5xl sm:text-6xl md:text-8xl text-center font-bold w-[90%]">
          Track Your Medical Career Journey
        </h1>
        <p className="text-xl md:text-2xl mt-8 text-gray-800 text-center w-[90%]">
          Seamless mentorship and milestone management for pre-med students.
        </p>
        <button className="text-xl md:text-2xl pt-4 pb-4 pl-8 pr-8 bg-black text-white text-white rounded-2xl mt-8 hover:bg-blue-400">
          <Link href="/dashboard">Get Started</Link>
        </button>
      </div>
      <section className="flex justify-center items-center min-h-screen bg-white px-4 lg:px-8">
        <div className="flex flex-col justify-center items-center space-y-12 lg:space-y-16">
          <div className="text-center px-4">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800">
              What do we do?
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-16">
            <div className="">
              <Image
                className="rounded-full border-4 border-gray-200"
                src="/george.png"
                alt="Dr. George"
                width={280}
                height={280}
              ></Image>
            </div>
            <div className="bg-white shadow-2xl w-full max-w-3xl h-auto rounded-2xl p-8 flex flex-col justify-center">
              <p className="text-lg lg:text-xl text-gray-800">
                &quot;This platform intricately blends career goal
                visualization, detailed requirement tracking, and actionable
                meeting outcomes between mentors and mentees. It&apos;s designed
                to guide students through their entire pre-med path, from
                initial career planning to the application process, ensuring
                every step is aligned with their ultimate goal of
                matriculation.&quot;
              </p>
              <p className="text-right text-xs md:text-sm text-gray-500 mt-4">
                - Dr. Agyapong, Harvard Medical Doctor & Co-Founder
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
