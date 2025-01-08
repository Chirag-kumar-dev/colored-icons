"use client";
import { Navbar } from "@/components/Navbar";
import { Search } from "@/components/Search";
import { Filter } from "../components/Filter";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { Inter, Outfit } from "next/font/google";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["600"] });

export default function Home() {
  const searchRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`relative isolate ${inter.className}`}>
      {/* Gradient Background Elements */}

      <section className="max-w-7xl mx-auto px-6">
        <Navbar />
      </section>

      <section className="mx-auto max-w-2xl py-8 sm:py-14 lg:py-20 text-center px-6">
        <h1
          className={`mt-4 text-balance text-5xl sm:text-7xl ${outfit.className} tracking-tight text-gray-900 font-semibold`}
        >
          Beautiful Icons. <br />
          Endless Possibilities
        </h1>
        <h2 className="mt-6 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8 max-w-md mx-auto">
          Your one-stop destination for stunning colored icons. Find the perfect
          icon to bring your designs to life.
        </h2>

        <div className="mt-6 sm:flex sm:justify-center">
          <Link
            href="https://github.com/dheereshagrwal/colored-icons"
            target="_blank"
            className="relative rounded-full px-4 py-2 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 flex items-center gap-2"
          >
            <FaStar className="text-lg text-amber-500" />
            <span className="font-semibold">Star us on Github</span>
          </Link>
        </div>
      </section>

      <section className="mt-4 mb-[300px] mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 lg:items-center mb-10">
          <h1
            id="popular-icons"
            className={`${outfit.className} text-4xl text-gray-900`}
          >
            Most Popular Colored Icons
          </h1>
          <div id="search-section" className="lg:w-4/12">
            <Search />
          </div>
        </div>
        <Filter />
      </section>
    </div>
  );
}
