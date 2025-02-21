import { delay, getTrends } from '@/constants/mock-api';
import { Trends } from '@/features/overview/components/trends';

export default async function IndustryTrends() {
  await delay(3000);

  // Hardcoded Data
  const trendsData = getTrends('mock_user', 'mock_accounnt', 'from', 'to');

  return <Trends data={trendsData} />;
}
