import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Newspaper } from 'lucide-react';

dayjs.extend(relativeTime);

import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { map } from 'lodash';

interface TrendProps {
  data: any; // Assigning any type to data
}

export function NewsTrend({ data }: React.FC<TrendProps>) {
  return (
    <div>
      {map(data, (news, index) => (
        <Card key={index} className='mb-4'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <div className='flex items-center'>
              <Avatar className='mr-2 h-6 w-6'>
                <AvatarFallback>
                  <Newspaper />
                </AvatarFallback>
              </Avatar>
              <CardTitle>{news.title}</CardTitle>
            </div>
            <CardDescription>{dayjs().to(dayjs(news.date))}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{news.body}</p>
          </CardContent>
        </Card>
      ))}{' '}
    </div>
  );
}
