//@ts-nocheck
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Reports() {
  const session = await auth();

  if (!session?.user) {
    return redirect('/');
  } else {
    redirect('/dashboard/home');
  }
}
