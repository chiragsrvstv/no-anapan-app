import PageContainer from '@/components/layout/page-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel } from '@/components/ui/carousel';
import React from 'react';

export default function FeedLayout({
  pie_stats,
  bar_stats,
  area_stats,
  industry_trends,
  top_intelligence
}: {
  sales: React.ReactNode;
  pie_stats: React.ReactNode;
  bar_stats: React.ReactNode;
  area_stats: React.ReactNode;
  industry_trends: React.ReactNode;
  top_intelligence: React.ReactNode;
}) {
  return (
    <PageContainer>
      <div className='flex flex-1 flex-col'>
        <h3 className='text-lg font-bold tracking-tight'>Opportunities</h3>

        {top_intelligence}

        <div className='grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1'>
          <div className='col-span-4 px-8 pb-4 md:col-span-3'>
            {industry_trends}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
