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
import { Link, User } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

export default async function TopIntelligence() {
  // await delay(3000);

  // Hardcoded
  const INTELLIGENCE = getIntelligence('mock_user_id');
  console.log('INTEL,,,', INTELLIGENCE);

  return (
    <div className='p-8'>
      <Carousel>
        <CarouselContent>
          {map<any>(INTELLIGENCE, (intel: any) => (
            <CarouselItem
              key={intel.data.id}
              className='basis-full md:basis-1/2 lg:basis-1/3'
            >
              <Link
                href={`/dashboard/accounts/${intel?.account?.id}-${intel?.account?.name}`}
                className='block w-full transition-all duration-200 hover:-translate-y-1'
              >
                <Card className='w-full transition-all duration-200 hover:bg-accent/50 hover:shadow-lg'>
                  <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                      {intel?.account?.name}
                    </CardTitle>
                    <Avatar className='h-10 w-10'>
                      <AvatarImage src='https://prod.ctassets.virginmedia.com/uploads/virgin_media_o_2_logo_2x_be9f212742.png' />
                    </Avatar>
                  </CardHeader>
                  <CardContent>
                    <div className='text-lg font-bold'>{intel.data.title}</div>
                  </CardContent>
                  <CardFooter className='pt-4 text-xs text-muted-foreground'>
                    {intel.data.stakeholders.map((stakeholder: any) => (
                      <Avatar key={stakeholder.id} className='h-4 w-6'>
                        <AvatarImage
                          src={`https://ui-avatars.com/api/?name=${stakeholder.name}&rounded=true&background=random`}
                        />
                        <AvatarFallback>
                          {' '}
                          <User name={stakeholder.name} />{' '}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </CardFooter>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
