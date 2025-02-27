import { delay, getIntelligence } from '@/constants/mock-api';
import { RecentSales } from '@/features/overview/components/recent-sales';
import PageContainer from '@/components/layout/page-container';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import React from 'react';

import { map } from 'lodash';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { User } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export default async function AccountCard({ accounts }: { accounts: any }) {
  // await delay(3000);

  // Hardcoded
  const INTELLIGENCE = getIntelligence('mock_user_id');
  console.log('INTEL,,,', INTELLIGENCE);

  return (
    <div className='grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 xl:grid-cols-3'>
      {map<any>(accounts, (account: any) => (
        <Link
          key={account.id}
          href={`/dashboard/accounts/${account.id}-${account.name}`}
          className='block transition-all duration-200 hover:-translate-y-1'
        >
          <Card className='border-gray-200 shadow-sm transition-all duration-200 hover:bg-accent/30 hover:shadow-lg dark:border-gray-800'>
            <CardHeader className='pb-2'>
              <div className='flex w-full items-center'>
                <div className='relative h-12 w-12'>
                  <Avatar className='h-full w-full rounded-none'>
                    <AvatarImage
                      src={account?.logoURL}
                      className='object-contain'
                    />
                    <AvatarFallback>{account?.name?.[0]}</AvatarFallback>
                  </Avatar>
                </div>
                <div className='flex-1 text-center'>
                  <CardTitle className='text-xl font-semibold'>
                    {account?.name}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className='mb-6 grid grid-cols-3 gap-4'>
                <Link
                  href={`/dashboard/accounts/${account.id}-${account.name}`}
                  className='flex flex-col items-center hover:underline'
                >
                  <div className='relative mb-2 h-10 w-10'>
                    {account?.intelligence?.opportunities > 0 && (
                      <div className='absolute right-0 top-0 h-2 w-2 rounded-full bg-red-600 shadow-sm ring-[1.5px] ring-background' />
                    )}
                    <div className='absolute inset-0 rounded-full bg-muted/30'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <span className='text-2xl font-bold text-primary'>
                        {account?.intelligence?.opportunities}
                      </span>
                    </div>
                  </div>
                  <span className='text-xs font-medium text-muted-foreground'>
                    Opportunities
                  </span>
                </Link>

                <Link
                  href={`/dashboard/accounts/${account.id}-${account.name}`}
                  className='flex flex-col items-center hover:underline'
                >
                  <div className='relative mb-2 h-10 w-10'>
                    <div className='absolute inset-0 rounded-full bg-muted/30'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <span className='text-2xl font-bold text-primary'>
                        {account?.intelligence?.priorities}
                      </span>
                    </div>
                  </div>
                  <span className='text-xs font-medium text-muted-foreground'>
                    Priorities
                  </span>
                </Link>

                <Link
                  href={`/dashboard/accounts/${account.id}-${account.name}`}
                  className='flex flex-col items-center hover:underline'
                >
                  <div className='relative mb-2 h-10 w-10'>
                    <div className='absolute inset-0 rounded-full bg-muted/30'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <span className='text-2xl font-bold text-primary'>
                        {account?.insights?.events}
                      </span>
                    </div>
                  </div>
                  <span className='text-xs font-medium text-muted-foreground'>
                    Events
                  </span>
                </Link>
              </div>

              <div className='flex items-center justify-between text-xs text-gray-500'>
                <div className='flex items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M12 2v10l4.24 4.24' />
                    <circle cx='12' cy='12' r='10' />
                  </svg>
                  Latest signal: {account?.insights?.created_at}
                </div>
                {/* <Badge variant="secondary" className="text-xs">Active</Badge> */}
              </div>
            </CardContent>

            <CardFooter className='flex justify-center border-t border-gray-100 p-2'>
              <button className='text-xs text-gray-500 hover:text-gray-700'>
                View Details
              </button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
