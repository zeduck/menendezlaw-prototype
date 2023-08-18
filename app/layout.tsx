import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import GoogleAnalytics from './components/GoogleAnalytics';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: { [id: string]: string | undefined } = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

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
  // Initialize Firebase
  const firebase_app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(firebase_app);

  return (
    <html lang="en">
      { firebaseConfig.measurementId && (<GoogleAnalytics MEASUREMENT_ID={firebaseConfig.measurementId}/>) }
      
      <body className={open_Sans.className}>{children}</body>
    </html>
  );
};
