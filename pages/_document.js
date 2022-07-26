import Script from 'next/script'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Saira:wght@400;500;600;700&display=swap" rel="stylesheet" />
      {/* <link href="css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Saira:400,500,600,700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" type="text/css" href="css/main.css?v=1.1" /> */}
        </Head>
      
      <body>
        <Main />
        <NextScript />
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/main.js"></script> */}

        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" strategy="beforeInteractive"></Script>
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive"></Script>
        <Script src="/js/main.js" strategy="beforeInteractive"></Script>
      </body>
    </Html>
  )
}