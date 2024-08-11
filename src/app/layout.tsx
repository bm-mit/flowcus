import './globals.css';

import type { Metadata } from 'next';
import React from 'react';

import { josefinSans } from '@/utils/fonts';

export const metadata: Metadata = {
  title: 'Flowcus',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark dark:bg-gray-900">
      <body className={josefinSans.className}>{children}</body>
    </html>
  );
}
