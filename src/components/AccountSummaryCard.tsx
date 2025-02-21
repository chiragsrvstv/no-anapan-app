'use client';
import Image from 'next/image';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import React from 'react';

export function AccountSummaryCard(props: any) {
  const [open, setOpen] = React.useState(false);
  // console.log('accountSummary', accountSummary.accountSummary.logoURL);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <div>
              <a
                href={props.accountSummary.accountURL}
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => setOpen(false)}
              >
                {props.accountSummary.name}
              </a>
            </div>
            {/*<img ref={accountSummary.accountSummary.logoURL} src={accountSummary.accountSummary.logoURL} alt={accountSummary.accountSummary.name} />*/}
            {/*<Image src='/Users/marufshaikh/Desktop/TEMP/next-shadcn-dashboard-starter/src/app/dashboard/overview/cards/Virgin_Media.svg' alt={accountSummary.accountSummary.name} width={100} height={10} />*/}
            <Avatar>
              <AvatarImage src='https://seeklogo.com/images/V/virgin-media-logo-0D19B92264-seeklogo.com.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardTitle>
        </CardHeader>
        <CardContent className='cursor-pointer' onClick={() => setOpen(true)}>
          <div>{props.accountSummary.offeringsShort}</div>
        </CardContent>
      </Card>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className='h-4/5 w-full align-middle'>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <div>
                <a
                  href={props.accountSummary.accountURL}
                  rel='noopener noreferrer'
                >
                  {props.accountSummary.name}
                </a>
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription>
              {/*{accountSummary.accountSummary.offeringsFull}*/}
              <div className='modal-content'>
                <h2>Virgin Media Offerings</h2>

                <h3>Broadband</h3>
                <p>
                  Superfast fiber broadband with speeds up to 2Gb and WiFi
                  guarantees.
                </p>

                <h3>Television</h3>
                <p>Digital TV with 300+ channels and on-demand content.</p>

                <h3>Home Phone & Mobile</h3>
                <p>
                  Landline services and the world’s first virtual mobile
                  network.
                </p>

                <h3>Bundles</h3>
                <p>Combined broadband & TV packages at a single price.</p>

                <h3>Extras</h3>
                <p>
                  Priority from O2, Volt benefits, and Virgin TV Go streaming.
                </p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className='bottom-1'>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default AccountSummaryCard;
