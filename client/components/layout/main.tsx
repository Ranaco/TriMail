import * as React from "react";
import Head from "next/head";
import { Box } from "@mui/material";
import { Router } from "next/router";

export interface MainProps {
  children: React.ReactNode;
  router?: Router;
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
      <div>{children}</div>
    </div>
  );
};

export default Main;
