'use client';

import { useSearchParams } from 'next/navigation';

export default function NameDisplay() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Friend';

  return <p className="text-lg mt-2">Hey {name}! 👋</p>;
}
