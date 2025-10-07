'use client';

import { Geist, Geist_Mono, Gabarito } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const gabarito = Gabarito({
  variable: '--font-gabarito',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={`${geistSans.variable} ${geistMono.variable} ${gabarito.variable} antialiased`}
      >
        {children}
      </div>
    </QueryClientProvider>
  );
}
