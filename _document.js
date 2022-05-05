import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://unpkg.com/splitting/dist/splitting.css" />
          <link rel="stylesheet" href="https://unpkg.com/splitting/dist/splitting-cells.css" />
          <script src="https://unpkg.com/splitting/dist/splitting.min.js"></script>
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
