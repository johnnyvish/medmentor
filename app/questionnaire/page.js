"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function Questionnaire() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="fixed flex justify-between items-center pl-4 pr-4 pb-2 pt-4 md:pl-12 md:pr-12 md:pb-8 md:pt-8 w-full bg-white">
        <Image width={52} height={52} src="/logo.png"></Image>
      </nav>
      <h1 className="text-3xl text-black font-semibold mt-60">
        Tell us a bit about yourself.
      </h1>
      <h1 className="text-5xl md:text-6xl text-black font-bold mt-12">
        I am a
      </h1>
      <div className="flex justify-center items-center space-x-8 mt-8">
        <div className="flex justify-center items-center pl-4 pr-4 pt-2 pb-2 md:pt-4 md:pb-4 md:pl-8 md:pr-8 bg-blue-500 rounded-2xl">
          <p className="font-semibold text-white ">
            <Link
              href="/dashboard"
              className="text-white text-2xl md:text-4xl text-bold"
            >
              Mentee
            </Link>
          </p>
        </div>
        <div className="flex justify-center items-center pl-4 pr-4 pt-2 pb-2 md:pt-4 md:pb-4 md:pl-8 md:pr-8 bg-green-500 rounded-2xl">
          <p className="font-semibold text-white ">
            <Link
              href="/dashboard"
              className="text-white text-2xl md:text-4xl text-bold"
            >
              Mentor
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
