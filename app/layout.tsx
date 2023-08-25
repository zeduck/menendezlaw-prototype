import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import GoogleAnalytics from './components/GoogleAnalytics';
import firebase_app from './firebase/config';

const open_Sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Menendez Law',
  // description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      { firebase_app && (<GoogleAnalytics/>) }
      
      <body className={open_Sans.className}>{children}</body>
    </html>
  );
};
