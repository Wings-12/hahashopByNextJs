'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Flower2, Shirt } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Flower2 className="h-6 w-6" />
          <Shirt className="h-6 w-6" />
          <span className="font-bold flex flex-col items-center sm:flex-row sm:justify-center">
            <span className="sm:hidden">Bloom</span>
            <span className="sm:hidden text-sm sm:text-base leading-none sm:mx-1"> {/* Adjust font size and add horizontal margin */}
              &amp;
            </span>
            <span className="sm:hidden">Stitch</span>
            <span className="hidden sm:inline">Bloom &amp; Stitch</span> {/* Show on larger screens */}
          </span>
        </Link>
        <NavigationMenu className='md:ml-[-150px]'>
          <NavigationMenuList className='w-full'>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    'group inline-flex h-10 w-max items-center justify-center rounded-full bg-[#abd6b7] px-2 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-[#92c19f] focus:bg-[#92c19f] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 disabled:pointer-events-none disabled:opacity-50',
                    pathname === '/' && 'bg-[#abd6b7]'
                  )}
                >
                  ホーム
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/products" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    'group inline-flex h-10 w-max items-center justify-center rounded-full bg-[#abd6b7] px-1 py-2 ml-1 mr-1 text-[12px] font-semibold text-white transition-colors hover:bg-[#92c19f] focus:bg-[#92c19f] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 disabled:pointer-events-none disabled:opacity-50',
                    pathname === '/' && 'bg-[#abd6b7]'
                  )}
                >
                  商品・サービス
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/workshop" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    'group inline-flex h-10 w-max items-center justify-center rounded-full bg-[#abd6b7] px-1 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-[#92c19f] focus:bg-[#92c19f] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 disabled:pointer-events-none disabled:opacity-50',
                    pathname === '/' && 'bg-[#abd6b7]'
                  )}
                >
                  ワークショップ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}