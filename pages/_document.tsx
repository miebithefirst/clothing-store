import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta content="minimalist clothing store landing page" name="description" />
        <meta content="#0a0a0a" name="theme-color" />
      </Head>
      <body className="bg-charcoal text-bone antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
