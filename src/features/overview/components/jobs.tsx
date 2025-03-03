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
import { Target, ArrowRight, Asterisk, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { map, truncate } from 'lodash';
import Markdown from 'react-markdown';
import { ReadMore } from '@/components/ReadMore';

dayjs.extend(relativeTime);

export function Jobs({ data }: any) {
  return (
    <div>
      {map(data, (job, index) => (
        <Card key={index} className='mb-4'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <div className='flex items-center gap-2'>
              <Avatar className='mr-2 h-6 w-6 bg-transparent'>
                <AvatarFallback>
                  <Briefcase />
                </AvatarFallback>
              </Avatar>
              <CardTitle className='text-md'>{job.title}</CardTitle>
            </div>
          </CardHeader>
          <CardFooter className='pb-1'>
            <ReadMore
              title={job.title}
              body={job.body}
              meta={'few days ago'}
              size={'sm'}
            />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
