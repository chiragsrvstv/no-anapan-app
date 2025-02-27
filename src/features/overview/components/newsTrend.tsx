//@ts-nocheck
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ArrowRight, Newspaper } from 'lucide-react';

dayjs.extend(relativeTime);

import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { map } from 'lodash';
import { Button } from '@/components/ui/button';

interface TrendProps {
  data: any; // Assigning any type to data
}

export function NewsTrend({ data }: React.FC<TrendProps>) {
  return (
    <div>
      {map(data, (news, index) => (
        <Card key={index} className='mb-4'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <div className='flex items-center'>
              <Avatar className='mr-2 h-8 w-8'>
                <AvatarFallback>
                  <Newspaper />
                </AvatarFallback>
              </Avatar>
              <CardTitle>{news.title}</CardTitle>
            </div>
            <CardDescription>{dayjs().to(dayjs(news.date))}</CardDescription>
          </CardHeader>
          <CardContent className='text-gray-600'>
            <p>{news.body}</p>
          </CardContent>
          <CardFooter className='pb-1'>
            <a href={news.url} target='_blank' rel='noopener noreferrer'>
              <Button variant='link' className='hover:text-primary-4 00 p-0'>
                Read More
                <ArrowRight className='h-4 w-4 pl-1' />
              </Button>
            </a>
          </CardFooter>
        </Card>
      ))}{' '}
    </div>
  );
}
