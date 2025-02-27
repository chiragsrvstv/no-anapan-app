import PageContainer from '@/components/layout/page-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel } from '@/components/ui/carousel';
import React from 'react';

export default function FeedLayout({
  pie_stats,
  bar_stats,
  area_stats,
  // industry_trends,
  top_intelligence,
  accounts_view
}: {
  sales: React.ReactNode;
  pie_stats: React.ReactNode;
  bar_stats: React.ReactNode;
  area_stats: React.ReactNode;
  // industry_trends: React.ReactNode;
  top_intelligence: React.ReactNode;
  accounts_view: React.ReactNode;
}) {
  return (
    <PageContainer scrollable>
      <div className='flex flex-1 flex-col gap-6'>
        <h3 className='text-lg font-bold tracking-tight'>Welcome back</h3>

        <div className='rounded-lg bg-muted/50 p-4'>
          {accounts_view}

          <div className='grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1'>
            {/* <div className='col-span-4 px-8 pb-4 md:col-span-3'>
              {industry_trends}
            </div> */}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
