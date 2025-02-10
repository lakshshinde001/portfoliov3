"use client";
import React from "react";
import { ThreeDCard } from "./ThreeDCard";
import { CardSpotlight } from "./ui/card-spotlight";
import timezone from "./../images/timezone.png";
import techstack from "./../images/techstack.png";
import Image from "next/image";
import AnimatedModalDemo from "./animated-modal-demo";
import CarouselDemo from "./corousel-demo";

export default function Overview() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* First Column */}
      <div className="flex flex-col justify-between h-full bg-black p-4">
        <ThreeDCard />
      </div>

      {/* <CardSpotlight/> */}
      {/* Second Column */}
      <div className="grid grid-rows-2 grid-cols-1 gap-4 h-screen p-4">
  <div>
    <CardSpotlight>
      <Image
        src={timezone}
        height={1000}
        width={1000}
        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardSpotlight>
  </div>
  <div className="flex flex-col justify-between bg-black p-4 border h-[300px]">
    <div className="flex-1 overflow-auto">
      <CarouselDemo />
    </div>
  </div>
</div>


     
       
      
    </div>
  );
}
