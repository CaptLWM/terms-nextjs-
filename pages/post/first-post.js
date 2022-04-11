import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import Checkbutton from "../../components/checkbutton";
import terms from "../../terms.json";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>이용 약관</h1>
      <ul>{terms.map}</ul>

      <h2>
        <Link href="/">
          <a>back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
