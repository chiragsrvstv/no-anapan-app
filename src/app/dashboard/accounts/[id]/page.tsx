//@ts-nocheck
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationLink
} from '@/components/ui/pagination'; //@ts-nocheck

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription
} from '@/components/ui/card';

import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';

import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';
import { searchParamsCache, serialize } from '@/lib/searchparams';
import { cn, parseAccountId } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { SearchParams } from 'nuqs/server';
import { Suspense } from 'react';
import ProductListingPage from '@/features/products/components/product-listing';
import ProductTableAction from '@/features/products/components/product-tables/product-table-action';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';

import dayjs from 'dayjs';
import { getGlobal } from '../../../../../globals';
import { OrgChart } from '../../../../components/orgChart';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable';
import AccountSummaryCard from '@/components/AccountSummaryCard';
import CardLayout from '@/components/CardLayout';
import IndustryTrends from '../../home/@industry_trends/page';
import { NewsTrend } from '@/features/overview/components/newsTrend';
import { Priorities } from '@/features/overview/components/priorities';
import IntelligenceCard from '@/components/IntelligenceCard';
import {
  getAccountDetails,
  getAccountDetailsSummary,
  getAccountDetailsNews,
  getAccountDetailsMovements,
  getAccountDetailsOpportunities,
  getAccountDetailsJobs,
  getAccountDetailsPriorities
} from '@/constants/mock-api';
import { PeopleTrend } from '@/features/overview/components/peopleTrend';
import { insights } from '@/constants/seed';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { Opportunities } from '@/features/overview/components/opportunities';
import { Jobs } from '@/features/overview/components/jobs';
import { notFound } from 'next/navigation';

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
  const accountId = parseAccountId(await props.params?.id);

  const GLOBAL_OBJECT = getGlobal();
  // console.log(GLOBAL_OBJECT);

  console.log('accountId', accountId);

  // const insights = getInsights('mock_user', 'mock_account', 'from', 'to');
  const accountDetails = getAccountDetails(accountId);
  const summary = getAccountDetailsSummary(accountId);
  const news = getAccountDetailsNews(accountId);
  const peopleMovements = getAccountDetailsMovements(accountId);
  const opportunities = getAccountDetailsOpportunities(accountId);
  const jobs = getAccountDetailsJobs(accountId);
  const priorities = getAccountDetailsPriorities(accountId);

  console.log('accountDetails', accountDetails);

  // This key is used for invoke suspense if any of the search params changed (used for filters).
  const key = serialize({ ...searchParams });

  return (
    <PageContainer scrollable>
      <div className='mt-0 flex items-center pb-0 pt-0'>
        <Link href={'/dashboard/home'} className='flex items-center'>
          <div className='h-12 w-12 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md'>
            <img
              src={accountDetails?.logoURL}
              alt={accountDetails?.name}
              className='h-full w-full object-contain p-2'
            />
          </div>
          <h2 className='pl-4 text-xl font-bold hover:underline'>
            {accountDetails?.name}
          </h2>
        </Link>
      </div>
      <Tabs defaultValue='summary' className='flex-1 rounded-lg'>
        <CardHeader>
          <CardTitle>
            <TabsList>
              <TabsTrigger value='summary'>Summary</TabsTrigger>
              <TabsTrigger value='priorities'> Priorities </TabsTrigger>
              <TabsTrigger value='opportunities' className='relative'>
                Opportunities
                {opportunities?.some(
                  (opp) => dayjs().diff(dayjs(opp.date), 'day') <= 7
                ) && (
                  <div className='absolute right-0.5 top-0 h-2 w-2 rounded-full bg-red-600 ring-[1.2px] ring-background' />
                )}
              </TabsTrigger>
              <TabsTrigger value='people'> Movements </TabsTrigger>
              <TabsTrigger value='jobs'> Jobs </TabsTrigger>
              <TabsTrigger value='news'> News </TabsTrigger>
              <TabsTrigger disabled value='conferences'>
                {' '}
                Conferences (Coming Soon){' '}
              </TabsTrigger>
            </TabsList>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TabsContent className='' value='summary'>
            <h3 className='text-md'> About </h3>
            <p className='p-2 pl-0 text-sm text-gray-500'> {summary} </p>
            <OrgChart account={accountId} />
          </TabsContent>
          <TabsContent className='' value='news'>
            <NewsTrend data={news} />
          </TabsContent>
          <TabsContent value='opportunities'>
            {/* <IntelligenceCard /> */}
            <Opportunities data={opportunities} />
          </TabsContent>
          <TabsContent value='people'>
            <PeopleTrend data={peopleMovements} />
          </TabsContent>
          <TabsContent value='priorities'>
            <Priorities data={priorities} />
          </TabsContent>
          <TabsContent value='jobs'>
            <Jobs data={jobs} />
          </TabsContent>
        </CardContent>
        <Pagination className='p-4 text-sm/4 text-muted-foreground'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Tabs>
    </PageContainer>
  );
}
