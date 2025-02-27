import AccountCard from '@/components/AccountCard';
import { delay, getAccounts, getInsights } from '@/constants/mock-api';
import { Trends } from '@/features/overview/components/trends';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export default async function AccountsView() {
  await delay(3000);

  // Hardcoded Data
  // const trendsData = getInsights('mock_user', 'mock_accounnt', 'from', 'to');
  const accounts = getAccounts('mock_user');

  return (
    <div>
      <div className='flex justify-end'>
        <Select>
          <SelectTrigger className='max-w-[160px] text-xs'>
            <SelectValue placeholder='Last 7 days' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='week'>Last 7 days</SelectItem>
            <SelectItem disabled value='month'>
              Last 30 days
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <AccountCard accounts={accounts} />
    </div>
  );
}
