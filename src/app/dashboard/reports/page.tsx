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
export const metadata = {
  title: 'Dashboard: Accounts'
};

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Page(props: pageProps) {
  const searchParams = await props.searchParams;
  // Allow nested RSCs to access the search params (in a type-safe way)
  searchParamsCache.parse(searchParams);

  const GLOBAL_OBJECT = getGlobal();

  // This key is used for invoke suspense if any of the search params changed (used for filters).

  return (
    <PageContainer>
      <div className='flex flex-1 flex-col'>
        <div className='flex'>
          <Select>
            <SelectTrigger className='max-w-[280px]'>
              <SelectValue placeholder='Virgin Media v2' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='light'>Virgin Media Report v2</SelectItem>
              <SelectItem value='dark'>Virgin Media Report v1</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1'>
          <div className='col-span-4 px-8 pb-4 md:col-span-3'>
            <Markdown className='prose-h3:text-md prose prose-sm prose-slate mt-8 max-w-none prose-headings:font-bold prose-h2:text-lg prose-h4:text-lg prose-p:text-base prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-strong:text-black prose-ul:list-disc prose-li:marker:text-gray-400 dark:prose-strong:text-white'>
              {data.data}
            </Markdown>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
