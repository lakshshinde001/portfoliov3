import React from 'react'
import AnimatedPinDemo from '../components/3d-pin-demo'
import modernJob from '../images/modernJob.png'
import supercarr from '../images/supercarr.png'
import modernestate from '../images/modernestate.png'
import tracker from "../images/tracker.png"

const projectData = [
  {
    title: "Modern Jobs",
    description: "Search, Apply, Get Your Dream Jobs",
    imageSrc: modernJob,  // Replace with actual image path
    href: "https://job-hunt-six-eta.vercel.app/"
  },
  {
    title: "Modern Estate",
    description: "Find most convenient and affordable place.",
    imageSrc: modernestate,  // Replace with actual image path
    href: "https://github.com/lakshshinde001/Modern-estate"
  },
  {
    title: "Supercarr",
    description: "Modern Supercars Landing Page",
    imageSrc: supercarr,  // Replace with actual image path
    href: "https://supercars-eight.vercel.app/"
  },
  {
    title: "Task Trackerr",
    description: "A secure place to track, add, modify and complete your taskss.",
    imageSrc: tracker,  // Replace with actual image path
    href: "https://task-list-alpha-five.vercel.app/"
  }
]

const Projects = () => {
  return (
    <div>
      <h1 className="text-white text-center text-4xl mt-5 mb-10 font-bold">
        A small selection of <span className="text-[#CDACF9]">Recent Projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Rendering AnimatedPinDemo components using map */}
        {projectData.map((project, index) => (
          <AnimatedPinDemo
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            href={project.href}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
