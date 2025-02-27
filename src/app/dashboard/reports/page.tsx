'use client';
import PageContainer from '@/components/layout/page-container';
import { searchParamsCache, serialize } from '@/lib/searchparams';

import { getGlobal } from '../../../../globals';
import Markdown from 'react-markdown';
import data from './data.js';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';

import { SearchParams } from 'nuqs/server';
import { useState } from 'react';

// export const metadata = {
//   title: 'Dashboard: Accounts'
// };

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export default function Page(props: pageProps) {
  const [selectedReport, setSelectedReport] = useState<string>('select-report');

  return (
    <PageContainer>
      <div className='flex flex-1 flex-col'>
        <div className='flex'>
          <Select onValueChange={setSelectedReport}>
            <SelectTrigger className='max-w-[280px]'>
              <SelectValue placeholder='Select a Report [BETA]' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='virgin-2025'>
                Virgin Media Report - Feb 2025
              </SelectItem>
              <SelectItem value='select-report'>
                Select a Report [BETA]
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {selectedReport && (
          <div className='mt-4'>
            {selectedReport === 'virgin-2025' && (
              <div className='grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1'>
                <div className='col-span-4 px-8 pb-4 md:col-span-3'>
                  <Markdown className='prose-h3:text-md prose prose-sm prose-slate mt-8 max-w-none prose-headings:font-bold prose-h2:text-lg prose-h4:text-lg prose-p:text-base prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-strong:text-black prose-ul:list-disc prose-li:marker:text-gray-400 dark:prose-strong:text-white'>
                    {data.data}
                  </Markdown>
                </div>
              </div>
            )}
            {selectedReport === 'select-report' && (
              <div className='text-md flex min-h-[50vh] min-w-[100vh] flex-col items-center justify-center p-4 text-gray-400'>
                <p className='p-4'>
                  Step 1: Select an account from the filter above.
                </p>
                <p className='p-4'>
                  Step 2: Select a report you want to export.
                </p>
                <p className='p-4'>Step 3: Export as PDF or Presentation</p>
              </div>
            )}
          </div>
        )}
      </div>
    </PageContainer>
  );
}
