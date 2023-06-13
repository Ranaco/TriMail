import * as React from "react";
import Head from "next/head";
import { Router } from "next/router";
import { MainProps } from "./main";

interface SecondaryProps extends MainProps {
  title: string;
}

const Secondary: React.FC<SecondaryProps> = ({ children, router, title }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Ranaco" />
        <meta name="description" content="TriMail! Newsletter the right way" />
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </div>
  );
};

export default Secondary;
