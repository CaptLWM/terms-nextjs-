/* eslint-disable react/jsx-key */
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import Checkbutton from "../../components/checkbutton";
import terms from "./terms.json";
import Submitbutton from "../../components/submitbutton";

const FirstPost = () => {
  const [number, setNumber] = React.useState(0);
  const getCount = (number) => {
    setNumber(number);
  };
  console.log("number", number);
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
      <ul>
        {console.log(terms)}
        {terms.map((term, id) => {
          console.log("2222", id);
          return (
            <li>
              <Checkbutton
                id={id}
                value={term}
                getCount={getCount}
                number={number}
              />
            </li>
          );
        })}
      </ul>

      <h3>
        <Submitbutton number={number} />
      </h3>

      <h5>
        <Link href="/">
          <a>back to home</a>
        </Link>
      </h5>
    </Layout>
  );
};

export default FirstPost;
