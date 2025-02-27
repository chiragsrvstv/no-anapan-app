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

dayjs.extend(relativeTime);

export function Jobs({ data }: any) {
  const [open, setOpen] = useState(false);
  const [opportunity, setOpportunity] = useState<any>(null);

  const handleReadMore = (priority: any) => {
    setOpportunity(priority);
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
            <Button
              variant='link'
              className='hover:text-primary-4 00 p-0'
              onClick={() => handleReadMore(job)}
            >
              Read More
              <ArrowRight className='h-4 w-4 pl-1' />
            </Button>
          </CardFooter>
        </Card>
      ))}

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className='flex h-[90vh] w-[95vw] max-w-[1000px] flex-col p-4 md:h-[70vh] md:w-[80vw] md:p-4'>
          <AlertDialogHeader className='flex-none'>
            <AlertDialogTitle className='text-lg font-bold md:text-xl'>
              {opportunity?.title}
            </AlertDialogTitle>
            <AlertDialogDescription className='text-sm text-gray-500'>
              a few days ago
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className='flex-1 overflow-y-auto p-2'>
            <Markdown className='prose-h3:text-md prose prose-sm prose-slate mt-8 max-w-none prose-headings:font-bold prose-h2:text-lg prose-h4:text-lg prose-p:text-base prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-strong:text-black prose-ul:list-disc prose-li:marker:text-gray-400 dark:prose-strong:text-white'>
              {opportunity?.body}
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
