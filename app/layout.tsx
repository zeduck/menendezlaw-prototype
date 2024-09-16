import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

const open_Sans = Open_Sans({ weight: '500', subsets: ['latin'] });

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
      
      <body className={open_Sans.className}>
        {children}
      </body>
    </html>
  );
};
