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
import { Target, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { map, truncate } from 'lodash';

dayjs.extend(relativeTime);

import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import Markdown from 'react-markdown';

interface TrendProps {
  data: any; // Assigning any type to data
}

export function Priorities({ data }: React.FC<TrendProps>) {
  const [open, setOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState<any>(null);

  const handleReadMore = (priority: any) => {
    setSelectedPriority(priority);
    setOpen(true);
  };

  const truncateText = (text: string) => {
    return truncate(text, {
      length: 300,
      separator: /[.]? +/
    });
  };

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
              <CardTitle>
                {/* <a
                  className='text-inherit hover:underline'
                  href={priority.url}
                  target='_blank'
                > */}
                {priority.title}
                {/* </a> */}
              </CardTitle>
            </div>
            <CardDescription>few days ago</CardDescription>
          </CardHeader>
          <CardContent className='text-gray-600'>
            <p>{truncateText(priority.body)}</p>
          </CardContent>
          <CardFooter className='pb-1'>
            <Button
              variant='link'
              className='hover:text-primary-4 00 p-0'
              onClick={() => handleReadMore(priority)}
            >
              Read More
              <ArrowRight className='h-4 w-4 pl-1' />
            </Button>
          </CardFooter>
        </Card>
      ))}

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className='flex h-[70vh] w-[85vw] max-w-[700px] flex-col p-4 md:h-[60vh] md:w-[80vw] md:p-6'>
          <AlertDialogHeader className='flex-none'>
            <AlertDialogTitle className='text-lg font-bold md:text-xl'>
              {selectedPriority?.title}
            </AlertDialogTitle>
            <AlertDialogDescription className='text-sm text-gray-500'>
              few days ago
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className='flex-1 overflow-y-auto p-4 py-4'>
            <Markdown className='prose-h3:text-md prose prose-sm prose-slate mt-8 max-w-none prose-headings:font-bold prose-h2:text-lg prose-h4:text-lg prose-p:text-base prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-strong:text-black prose-ul:list-disc prose-li:marker:text-gray-400 dark:prose-strong:text-white'>
              {selectedPriority?.body}
            </Markdown>
          </div>
          <AlertDialogFooter className='flex-none'>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
