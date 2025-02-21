'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function StatsError({ error }: { error: Error }) {
  return (
    <Alert variant='destructive'>
      <AlertCircle className='h-4 w-4' />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Failed to load intelligence: {error.message}
      </AlertDescription>
    </Alert>
  );
}
