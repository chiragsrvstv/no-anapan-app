import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import Modal from '@/app/dashboard/overview/Modal';
// import { getAccountTrends } from '@/constants/mock-api';
import { getAccountTrends } from '@/constants/mock-api';
import { AccountSummaryCard } from './AccountSummaryCard';
import { Priorities } from './PrioritiesOld';
import AccountSum from './AccountSum';

// let accountTrends;
const CardLayout = () => {
  const accountTrends = getAccountTrends('Virgin Media');

  return (
    <div className='flex h-full w-full gap-4 overflow-hidden p-4'>
      {/* Left side - Half screen */}
      <div className='h-full w-1/2'>
        <AccountSum
          title='Identified Opportunities'
          accountSummary={accountTrends.accountSummary}
        />
      </div>

      {/* Right side - Half screen */}
      <div className='flex h-full w-1/2 flex-col'>
        <div className='grid flex-1 grid-cols-2 gap-4'>
          <Priorities
            title='Account Priorities'
            accountSummary={accountTrends.accountSummary}
          />
          <Priorities
            title='Identified Opportunities'
            accountSummary={accountTrends.accountSummary}
            identifiedOpportunities={accountTrends.identifiedOpportunities}
          />
          <Priorities
            title='Financial Summary'
            accountSummary={accountTrends.accountSummary}
          />
          <Priorities
            title='Vendor Contracts'
            accountSummary={accountTrends.accountSummary}
          />
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
