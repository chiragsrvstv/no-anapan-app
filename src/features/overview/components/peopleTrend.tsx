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

dayjs.extend(relativeTime);

import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { map } from 'lodash';
import { Button } from '@/components/ui/button';

interface TrendProps {
  data: any; // Assigning any type to data
}

export function PeopleTrend({ data }: TrendProps) {
  return (
    <div>
      {map(data, (movement, index) => (
        <Card key={movement.name} className='mb-4'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <div className='flex items-center'>
              <Avatar className='mr-2 h-8 w-8'>
                <AvatarImage src={movement.current_company_logo} />
                <AvatarFallback>{movement.name}</AvatarFallback>
              </Avatar>
              <CardTitle>
                {movement.current_company || movement.past_company}
              </CardTitle>
            </div>
            <CardDescription>
              {dayjs().to(dayjs(movement.date))}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              {movement.type === 'joined' ? (
                <>
                  <a
                    href={movement.social_url}
                    className='text-inherit hover:underline'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {movement.name}
                  </a>{' '}
                  was added to the organization as a{' '}
                  <strong>{movement.role}</strong>.
                </>
              ) : (
                <>
                  {movement.name}, <strong>{movement.role}</strong> left the
                  organization.
                </>
              )}
            </p>
          </CardContent>
        </Card>
      ))}{' '}
    </div>
  );
}
