import * as React from "react";
import Head from "next/head";
import { NextRouter } from "next/router";
import Navbar from "../navbar";
import { height } from "@mui/system";

export interface MainProps {
  children: React.ReactNode;
  router?: NextRouter;
}

const Main: React.FC<MainProps> = ({ children, router }) => {
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
        <Navbar router={router} />
        <div
          style={{
            paddingLeft: "40px",
            paddingTop: "90px",
            paddingRight: "40px",
            maxHeight: "calc(100vh - 90px)",
            height: "calc(100vh - 90px)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Main;
