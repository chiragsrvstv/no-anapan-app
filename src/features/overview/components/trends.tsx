import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription
} from '@/components/ui/card';

import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { PeopleTrend } from './peopleTrend';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationLink
} from '@/components/ui/pagination';

import { NewsTrend } from './newsTrend';

interface TrendsProps {
  data: any; // Assigning any type to data
}

export function Trends({ data }: TrendsProps) {
  return (
    <div className='max-w-full rounded-xl bg-secondary/25'>
      <Tabs defaultValue='peopleMovements' className=''>
        <CardHeader>
          <CardTitle>
            <TabsList>
              <TabsTrigger value='peopleMovements'>
                People Movements
              </TabsTrigger>
              <TabsTrigger value='news'> Latest Events </TabsTrigger>
              <TabsTrigger disabled value='conferenceTracking'>
                Conference Tracking (Coming Soon)
              </TabsTrigger>
            </TabsList>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TabsContent className='' value='peopleMovements'>
            <PeopleTrend data={data.peopleMovements} />
          </TabsContent>
          <TabsContent value='news'>
            <NewsTrend data={data.news} />
          </TabsContent>
          <TabsContent value='conferenceTracking'></TabsContent>
        </CardContent>
      </Tabs>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href='#' />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href='#'>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href='#' />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
