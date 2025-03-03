'use client';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

dayjs.extend(relativeTime);

import Markdown from 'react-markdown';

interface TrendProps {
  title: any; // Assigning any type to data
  body: any; // Assigning any type to data
  meta: any; // Assigning any type to data
}

export function ReadMore({ title, body, meta, size }: React.FC<TrendProps>) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant='link'
        className='hover:text-primary-4 00 p-0'
        onClick={() => setOpen(true)}
      >
        Read More
        <ArrowRight className='h-4 w-4 pl-1' />
      </Button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent
          className={`flex flex-col p-4 md:p-6 ${
            size === 'lg'
              ? 'h-[90vh] w-[95vw] max-w-[1000px]'
              : 'h-[70vh] w-[85vw] max-w-[700px]'
          }`}
        >
          <AlertDialogHeader className='flex-none'>
            <AlertDialogTitle className='text-lg font-bold md:text-xl'>
              {title}
            </AlertDialogTitle>
            <AlertDialogDescription className='text-sm text-gray-500'>
              {meta}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className='flex-1 overflow-y-auto p-4 py-4'>
            <Markdown className='prose-h3:text-md prose prose-sm prose-slate mt-8 max-w-none prose-headings:font-bold prose-h2:text-lg prose-h4:text-lg prose-p:text-base prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-strong:text-black prose-ul:list-disc prose-li:marker:text-gray-400 dark:prose-strong:text-white'>
              {body}
            </Markdown>
          </div>
          <AlertDialogFooter className='flex-none'>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
