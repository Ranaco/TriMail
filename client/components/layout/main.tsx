import * as React from "react";
import Head from "next/head";
import Navbar from "../navbar";

export interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ranaco" />
        <meta name="description" content="TriMail! Newsletter the right way" />
        <title>TriMail</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <div
          style={{
            paddingLeft: "40px",
            paddingTop: "90px",
            paddingRight: "40px",
            maxHeight: "calc(100% - 20px)",
            height: "calc(100vh - 20px)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Main;
