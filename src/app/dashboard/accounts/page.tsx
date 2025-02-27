// Rename file to page.tsx and update imports
import { getAccounts } from '@/constants/mock-api';
import { notFound, redirect } from 'next/navigation';

// Remove NextPage - not needed in App Router
async function AccountsPage() {
  const accounts = await getAccounts('mock_id');

  if (!accounts || accounts.length === 0) {
    notFound();
  }

  // URL encode the name to handle spaces and special characters
  const encodedName = encodeURIComponent(accounts[0].name);
  redirect(`/dashboard/accounts/${accounts[0].id}-${encodedName}`);
}

export default AccountsPage;
