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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';

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
    <ResizablePanelGroup direction='vertical'>
      <div className='flex p-2'>
        <Select>
          <SelectTrigger className='max-w-[280px]'>
            <SelectValue placeholder='Virgin Media' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>Virgin Media O2</SelectItem>
            <SelectItem value='light'>Anthesis</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ResizablePanel>
        <Suspense
          key={key}
          fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}
        >
          <div className='h-full overflow-y-auto'>
            <OrgChart
              data={GLOBAL_OBJECT.orgChart as OrgChartStructureNode[]}
            />
          </div>
        </Suspense>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40}>
        <div className='h-full'>
          <CardLayout />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
