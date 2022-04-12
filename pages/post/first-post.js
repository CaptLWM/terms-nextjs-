/* eslint-disable react/jsx-key */
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import Checkbutton from "../../components/checkbutton";
import terms from "./terms.json";
import Submitbutton from "../../components/submitbutton";

//부모컴포넌트에서 체크한게 어떤건지 관리
//체크한것 값과 set을 자식으로 내려서
//자식 컴포넌트에서 새로운 항목이 체크 될때 부모에서 관리하던 배열과 비교
//filter 활용

const FirstPost = () => {
  const [number, setNumber] = React.useState(0);
  const [clickcounts, setClickcount] = React.useState([]); //check 관리
  console.log("clickcounts", clickcounts);
  const getClickcount = (clickcount) => {
    console.log("result1", clickcount);
    if (
      clickcounts?.some((v) => {
        return v?.id === clickcount?.id;
      })
    ) {
      const result = clickcounts.filter((v) => {
        return v.id !== clickcount.id;
      });
      console.log("result2", result);
      setClickcount(result);
    } else {
      setClickcount(clickcounts.concat(clickcount));
    }

    // console.log("result", result);
  };
  // console.log("post clickcount", clickcounts);

  // const getCount = (number) => {
  //   setNumber(number);
  // };
  // console.log("number", number);
  //부모에서 전체 상태관리하는게 필요함
  console.log("childclickcoutns", clickcounts);
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
        {terms.map((term, id) => {
          return (
            <li>
              <Checkbutton
                id={id}
                value={term}
                // clickcounts={clickcounts}
                getClickcount={getClickcount}
                setClickcount={setClickcount}
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
