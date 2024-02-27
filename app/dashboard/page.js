"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchQuery);
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="fixed flex justify-between items-center pl-4 pr-4 pb-2 pt-4 md:pl-12 md:pr-12 md:pb-8 md:pt-8 w-full bg-white z-10">
        <Link
          href="/"
          className="flex justify-left md:justify-center items-center space-x-2 text-2xl w-[184px]"
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
            <button className="text-xl">
              <Link href="/sign-in">Sign In</Link>
            </button>
            <button className="text-xl pt-2 pb-2 pl-4 pr-4 bg-gray-800 text-white rounded-2xl">
              <Link href="/sign-up">Sign Up</Link>
            </button>
          </div>
        )}
      </nav>
      {/* Search Bar */}
      <div className="flex flex-col justify-center items-center space-y-8 md:space-y-16 mt-48 md:mt-60 w-[90%] md:w-[50%]">
        <h1 className="text-black text-5xl md:text-6xl font-bold text-center">
          Find your mentor.
        </h1>

        <form className="w-full relative" onSubmit={handleSearch}>
          <input
            type="text"
            className="w-full pl-4 pr-10 py-4 border border-gray-300 rounded-2xl"
            placeholder="Search for mentors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          >
            <img src="/search.svg" alt="Search" className="w-8 h-8" />{" "}
          </button>
        </form>
      </div>
    </main>
  );
}
