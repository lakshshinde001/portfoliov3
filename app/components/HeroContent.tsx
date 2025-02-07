"use client";
import React from "react";
import Link from "next/link";
import { LiaShareSolid } from "react-icons/lia";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for contrast */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white space-y-6">
       <p className="font-mono text-xl">DYNAMIC WEB MAGIC WITH NEXT.JS</p>
        <h1 className="text-5xl font-bold sm:text-6xl">
        Transforming Concepts into <br /> Seamless <span className="text-[#CDACF9]"> User Experiences </span> 
        </h1>
        <p className="text-xl sm:text-2xl  mx-auto">
          Hey ! I'm Laxman Full Stack Developer from India
        </p>
        <Link
          href="/get-started"
          className="bg-primary flex flex-row items-center justify-center gap-2 hover:bg-gray-600 text-white border text-lg font-semibold py-3 px-8 rounded-lg hover:bg-primary-dark transition duration-300"
        >
          See my work <LiaShareSolid />
        </Link>
      </div>
    </section>
  );
};
