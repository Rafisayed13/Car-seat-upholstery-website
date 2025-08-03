import Script from 'next/script';

export default function ExternalScripts() {
  return (
    <>
      {/* Example: Google Analytics or other third-party scripts */}
      {/* <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" /> */}
      {/* <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script> */}
    </>
  );
}
