'use client';
import Script from "next/script";

export default function GoogleAnalytics({ 
  MEASUREMENT_ID,
}: { 
  MEASUREMENT_ID: string | undefined,
}){
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
      />

      <Script id='google-analytics' strategy="afterInteractive"> {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${MEASUREMENT_ID}', {
          page_path: window.location.pathname,
          });
      `}
      </Script>
    </>
  );
};
