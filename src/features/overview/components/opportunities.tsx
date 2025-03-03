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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Target, ArrowRight, Asterisk } from 'lucide-react';
import { useState } from 'react';
import { map, truncate } from 'lodash';
import Markdown from 'react-markdown';
import { ReadMore } from '@/components/ReadMore';
import { truncateText } from '@/lib/utils';

dayjs.extend(relativeTime);

export function Opportunities({ data }: any) {
  return (
    <div>
      {map(data, (opportunity, index) => (
        <Card key={index} className='mb-4'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <div className='flex items-center gap-2'>
              <Avatar className='mr-2 h-6 w-6 bg-transparent'>
                <AvatarFallback>
                  <Asterisk />
                </AvatarFallback>
              </Avatar>
              <CardTitle className='text-md'>{opportunity.title}</CardTitle>
              {dayjs(opportunity.date).isAfter(dayjs().subtract(7, 'day')) && (
                <span className='rounded-sm border-primary bg-red-600 px-2 py-0.5 text-[8px] font-medium text-white'>
                  New
                </span>
              )}
            </div>
            <CardDescription>
              {dayjs().to(dayjs(opportunity.date))}
            </CardDescription>
          </CardHeader>
          <CardContent className='pt-2 text-gray-600'>
            <p>{truncateText(opportunity.preview)}</p>
          </CardContent>
          <CardFooter className='pb-1'>
            <ReadMore
              title={opportunity.title}
              body={opportunity.body}
              meta={dayjs().to(dayjs(opportunity?.date))}
              size='lg'
            />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
