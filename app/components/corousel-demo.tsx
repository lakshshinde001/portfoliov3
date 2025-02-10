"use client"

import Carousel from "../components/ui/carousel"

export default function CarouselDemo() {
  const slideData = [
    {
      title: "React",
      button: "",
      src: "",  // Removed image source
    },
    {
      title: "Next.Js",
      button: "",
      src: "",  // Removed image source
    },
    {
      title: "React Native",
      button: "",
      src: "",  // Removed image source
    },
    {
      title: "Node.Js",
      button: "",
      src: "",  // Removed image source
    },
    {
        title: "TypeScript",
        button: "",
        src: "",  // Removed image source
      },
      {
        title: "GraphQL",
        button: "",
        src: "",  // Removed image source
      },
  ]

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  )
}
