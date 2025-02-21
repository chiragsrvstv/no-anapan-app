import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { DataTableSkeleton } from '@/components/ui/table/data-table-skeleton';
import { searchParamsCache, serialize } from '@/lib/searchparams';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { SearchParams } from 'nuqs/server';
import { Suspense } from 'react';
import ProductListingPage from '@/features/products/components/product-listing';
import ProductTableAction from '@/features/products/components/product-tables/product-table-action';

import { getGlobal } from 'globals';
import MyOrgChart, {
  OrgChart,
  OrgChartStructureNode
} from '../../../components/orgChart';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/components/ui/resizable';
import AccountSummaryCard from '@/components/AccountSummaryCard';
import CardLayout from '@/components/CardLayout';

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
  console.log(GLOBAL_OBJECT);

  // This key is used for invoke suspense if any of the search params changed (used for filters).
  const key = serialize({ ...searchParams });

  return (
    <PageContainer>
      <div className='flex flex-1 flex-col'>
        <h3 className='text-lg font-bold tracking-tight'>
          Integrations (Coming Soon)
        </h3>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1'>
          <div className='col-span-4 px-8 pb-4 md:col-span-3'>
            <div className='mt-8 flex gap-8'>
              <img
                src='https://www.salesforce.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg'
                alt='Salesforce'
                className='h-16 w-auto cursor-pointer opacity-50 transition-opacity hover:opacity-100'
              />
              <img
                src='https://www.inboundav.com/hubfs/Imported_Blog_Media/Hubspot-Logo-img-1-2.png'
                alt='HubSpot'
                className='h-16 w-auto cursor-pointer opacity-50 transition-opacity hover:opacity-100'
              />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
