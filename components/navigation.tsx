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

const baseNavigationMenuLink = 'group inline-flex h-10 w-max items-center justify-center rounded-full bg-[#abd6b7] text-[12px] font-semibold text-white transition-colors hover:bg-[#92c19f] focus:bg-[#92c19f] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 disabled:pointer-events-none disabled:opacity-50'

const additionalHomeClassName="px-2 py-2"
const additionalProductsAndServicesClassName="px-1 py-2 ml-1 mr-1"
const additionalWorkshopClassName="px-1 py-2"

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Flower2 className="h-6 w-6" />
          <Shirt className="h-6 w-6" />
          <span className="font-bold flex flex-col items-center sm:flex-row sm:justify-center">
            <span className="sm:hidden">Hana Moyo</span>
            <span className="hidden sm:inline">Hana Moyo</span> {/* Show on larger screens */}
          </span>
        </Link>
        <NavigationMenu className='md:ml-[-150px]'>
          <NavigationMenuList className='w-full gap-x-4'>
          {/*
+           NOTE: 「商品・サービス」ページを再度表示する際は、gap-x-4は削除してください。
+           現在はホームとワークスペースの間隔を広げるために追加しています。
+         */}
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    baseNavigationMenuLink,
                    additionalHomeClassName,
                  )}
                >
                  ホーム
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* 商品説明がまだできてないため、非表示 <NavigationMenuItem>
              <Link href="/products" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(baseNavigationMenuLink,
                    additionalProductsAndServicesClassName)}
                >
                  商品・サービス
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link href="/workshop" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    baseNavigationMenuLink,
                    additionalWorkshopClassName
                  )}
                >
                  ワークスペース
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}