"use client";

import { signOut } from 'next-auth/react';
import React, { useState, useContext, createContext } from 'react';
import { ChevronFirst, ChevronLast } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SidebarItemProps } from '@/types';


const SidebarContext = createContext({ expanded: true });

const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className='h-screen'>
      <nav className={`h-full flex flex-col bg-muted/20 shadow-lg ${expanded ? 'w-64' : 'w-20'} transition-all`}>
        <div className='p-6 pb-2 flex justify-between items-center'>
          <button onClick={() => setExpanded(!expanded)} className='p-1.5 rounded-lg bg-aprov-50 text-aprov-500 hover:bg-aprov-200'>
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className='flex-1 px-3'>{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, alert, caminho }: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);
  const pathname = usePathname();
  const isActive = pathname === caminho;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (text === "Sair") {
      e.preventDefault();
      signOut({ callbackUrl: '/' });
    }
  };

  return (
    <Link href={caminho} legacyBehavior>
      <a onClick={handleClick}>
        <li
          className={`
            relative flex items-center py-2 px-3 my-4 font-medium rounded-md cursor-pointer 
            transition-colors
            ${isActive ? 'bg-primary text-white' : 'hover:bg-accent hover:text-aprov-500'}
          `}
        >
          <div className='flex items-center'>
            <span className={`transition-all ${expanded ? 'w-6' : 'w-6'}`}>{icon}</span>
            <span className={`ml-4 overflow-hidden transition-all ${expanded ? 'inline-block' : 'hidden'}`}>{text}</span>
          </div>
          {alert && (
            <div className={`absolute right-2 w-1.5 h-1.5 rounded-full bg-aprov ${expanded ? '' : 'top-2'}`}></div>
          )}
        </li>
      </a>
    </Link>
  );
}

export default Sidebar;


