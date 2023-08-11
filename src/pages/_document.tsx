import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Discover the Perfect Gift through AI"
          />
          <link rel="icon" href="/favicon.svg" />

          <meta
            property="og:url"
            content="https://giftstorming-ai.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Giftstorming Ai" />
          <meta
            property="og:description"
            content="Discover the Perfect Gift through AI"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dhwxnbnaj/image/upload/v1691210624/Giftstorming_Ai_Thumbnail_fftdav.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:domain"
            content="giftstorming-ai.vercel.app"
          />
          <meta
            property="twitter:url"
            content="https://giftstorming-ai.vercel.app/"
          />
          <meta name="twitter:title" content="Giftstorming Ai" />
          <meta
            name="twitter:description"
            content="Discover the Perfect Gift through AI"
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dhwxnbnaj/image/upload/v1691210624/Giftstorming_Ai_Thumbnail_fftdav.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
