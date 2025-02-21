import { ChevronDown, ChevronUp, User } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { EmployeeCardProps } from '../types/';

export function EmployeeCard({
  employee,
  isExpanded,
  onToggle,
  reportCount = 0
}: EmployeeCardProps) {
  const { node, section } = employee;
  const { fullName, role, profileImage } = node.position;

  return (
    <Card
      className={cn(
        'w-[200px]',
        section === 'board' && 'border-primary/20 bg-primary/5'
      )}
    >
      <CardContent className='flex flex-col justify-between px-4 py-4 text-center text-xs'>
        <div className='flex items-center'>
          <Avatar className='h-14 w-14'>
            {profileImage ? (
              <AvatarImage
                src={`${profileImage.endpoint}/${profileImage.uri}.${profileImage.ext}`}
                alt={fullName}
              />
            ) : (
              <AvatarFallback>
                <User className='h-8 w-8' />
              </AvatarFallback>
            )}
          </Avatar>
          <div className='space-2 ml-2 text-center text-xs'>
            <h3 className='p-1 font-semibold'>{fullName}</h3>
            <p className='text-gray-400'>{role}</p>
          </div>
          {/* <div className="text-xs text-muted-foreground uppercase tracking-wider">{section}</div> */}
        </div>
      </CardContent>
      {reportCount > 0 && (
        <div className='text-center'>
          <Button
            variant='ghost'
            size='sm'
            className='w-half'
            onClick={onToggle}
          >
            <p className='text-[10px]'> {reportCount} </p>
            {isExpanded ? (
              <ChevronUp className='ml-2 h-4 w-4' />
            ) : (
              <ChevronDown className='ml-2 h-4 w-4' />
            )}
          </Button>
        </div>
      )}
    </Card>
  );
}
