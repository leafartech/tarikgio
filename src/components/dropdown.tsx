'use client'

import { PlusSmallIcon } from '@heroicons/react/24/solid';
import { useState, ReactNode } from 'react';
import { MagicMotion } from 'react-magic-motion';

interface DropdownProps {
  children: ReactNode;
  title: string;
  module?: string;
}

export default function Dropdown({ children, title, module }: DropdownProps) {
  const [isDropdownActived, setIsDropdownActived] = useState<boolean>(false);

  function toggleDropdown() {
    setIsDropdownActived(!isDropdownActived);
  }

  return (
    <MagicMotion
      transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}
    >
      <div className="overflow-hidden">
        <button
          onClick={() => toggleDropdown()}
          className={`relative cursor-pointer p-2 sm:p-4 bg-[#101010] text-left w-full bg-client-pallet-2 font-medium rounded-xl ${isDropdownActived && 'rounded-b-none'} flex flex-col gap-2 items-start`}
        >
          <p className={`text-white flex items-center justify-between text-lg sm:text-2xl font-medium pe-8`}>
            <span>{title}</span>
          </p>
          <PlusSmallIcon className={`absolute top-4 right-6 sm:h-8 sm:w-8 h-6 w-6 transition text-white  ${isDropdownActived ? "rotate-45" : "rotate-0"}`} />
        </button>
        {isDropdownActived && (
          <div className={`bg-[#101010] text-zinc-100 bg-client-pallet-2 rounded-b-xl p-4 sm:p-6`} >
            {children}
          </div>
        )}
      </div>
    </MagicMotion>
  );
}
