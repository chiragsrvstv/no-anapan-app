'use client';
import Image from 'next/image';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Target,
  TrendingUp,
  ChartNoAxesCombined,
  BriefcaseBusiness
} from 'lucide-react';

import React from 'react';
import { MarkdownRenderer } from './MarkdownRenderer';
import Markdown from 'react-markdown';

const priorityIcons = {
  'Account Priorities': Target,
  'Identified Opportunities': TrendingUp,
  'Vendor Contracts': BriefcaseBusiness,
  'Financial Summary': ChartNoAxesCombined
};

export function AccountSum(props: any) {
  const [open, setOpen] = React.useState(false);
  const Icon = priorityIcons[props.title];
  // console.log('accountSummary', accountSummary.accountSummary.logoURL);
  return (
    <>
      <Card className='h-full min-w-[100px] transition-all duration-200 hover:-translate-y-1 hover:bg-accent/50 hover:shadow-lg'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-lg'>Account Summary</CardTitle>
          <CardTitle className='flex flex-row items-center justify-end space-y-0 p-2'>
            <Icon size={16} />
          </CardTitle>
        </CardHeader>
        <CardContent
          className='justify-left h-[calc(100%-40px)]] flex flex-1 cursor-pointer items-center'
          onClick={() => setOpen(true)}
        >
          <p className='text-primary-800 md:text-lg lg:text-2xl'>
            {props.accountSummary.offeringsShort}
          </p>
        </CardContent>
      </Card>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className='flex h-4/5 w-[90vw] max-w-[1000px] flex-col'>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <div>
                <a
                  href={props.accountSummary.accountURL}
                  rel='noopener noreferrer'
                >
                  {props.accountSummary.name}
                </a>
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription className='flex-grow'></AlertDialogDescription>
          </AlertDialogHeader>
          <div className='flex-1 overflow-y-auto'>
            <Markdown className='prose prose-sm prose-slate mt-8 max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-p:text-base prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-strong:text-black prose-ul:list-disc prose-li:marker:text-gray-400 dark:prose-strong:text-white'>
              {props.accountSummary.offeringsFull}
            </Markdown>
          </div>

          <AlertDialogFooter className='mt-auto'>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default AccountSum;
