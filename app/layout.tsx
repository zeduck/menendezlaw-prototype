import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import GoogleAnalytics from './components/GoogleAnalytics';
import firebase_app from './firebase/config';

const open_Sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Menendez Law',
  description: 'Full service immigration and refugee law firm',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        { firebase_app && (<GoogleAnalytics/>) }
        <link rel="canonical" href="https://www.menendezlaw.ca/" />
      </head>
      
      <body className={open_Sans.className}>
        {children}
      </body>
    </html>
  );
};
