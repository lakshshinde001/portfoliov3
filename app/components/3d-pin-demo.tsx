"use client"
import { PinContainer } from './ui/3d-pin'
import { StaticImageData } from 'next/image';

interface AnimatedPinDemoProps {
  title: string
  description: string
  imageSrc: string | StaticImageData;
  href: string
}

export default function AnimatedPinDemo({
  title,
  description,
  imageSrc,
  href
}: AnimatedPinDemoProps) {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center">
      <PinContainer title={title} href={href}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          {/* Image */}
          <img src={typeof imageSrc === 'string' ? imageSrc : imageSrc.src} alt={title} className="w-full h-full object-cover rounded-lg" />
          {/* Title */}
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {title}
          </h3>
          {/* Description */}
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">{description}</span>
          </div>
          {/* Gradient Background */}
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  )
}
