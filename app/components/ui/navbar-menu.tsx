"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const MenuItem = ({ item, href }: { item: string; href: string }) => {
  return (
    <Link href={href} className="text-black dark:text-white hover:opacity-80">
      {item}
    </Link>
  );
};

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="relative flex justify-center space-x-6 px-8 py-4 bg-white dark:bg-black shadow-md rounded-full">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
        unoptimized
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = (props: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      {...props}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    />
  );
};
