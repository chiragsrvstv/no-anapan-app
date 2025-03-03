'use client';
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

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Target } from 'lucide-react';
import { useState } from 'react';
import { map, truncate } from 'lodash';

dayjs.extend(relativeTime);

import { ReadMore } from '@/components/ReadMore';
import { truncateText } from '@/lib/utils';

interface TrendProps {
  data: any; // Assigning any type to data
}

export function Priorities({ data }: React.FC<TrendProps>) {
  return (
    <div>
      {map(data, (priority, index) => (
        <Card key={index} className='mb-4'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <div className='flex items-center'>
              <Avatar className='mr-2 h-8 w-8'>
                <AvatarFallback>
                  <Target />
                </AvatarFallback>
              </Avatar>
              <CardTitle>{priority.title}</CardTitle>
            </div>
            <CardDescription>few days ago</CardDescription>
          </CardHeader>
          <CardContent className='text-gray-600'>
            <p>{truncateText(priority.body)}</p>
          </CardContent>
          <CardFooter className='pb-1'>
            <ReadMore
              title={priority.title}
              body={priority.body}
              meta={'few days ago'}
            />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
