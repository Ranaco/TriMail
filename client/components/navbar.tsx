import * as React from "react";
import { Button, Stack, useTheme } from "@mui/material";
import Image from "next/image";
import NavbarButtonGroup from "../components/navbar-button-group";
import { AppState } from "../pages/_app";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const { state } = React.useContext(AppState);
  const router = useRouter();

  return (
    <Stack
      bgcolor={theme.palette.secondary.dark}
      position={"fixed"}
      top={"20px"}
      width={"95vw"}
      height={"50px"}
      left={"35px"}
      borderRadius={"10px"}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      pl={"20px"}
      pr={"20px"}
    >
      <Image
        onClick={() => router.push("/home")}
        style={{
          cursor: "pointer",
        }}
        src="/images/logo.svg"
        alt="Logo"
        width={100}
        height={100}
      />
      <NavbarButtonGroup />
      <Button
        onClick={() => {
          state.particleService.logOut();
        }}
      >
        Log out
      </Button>
    </Stack>
  );
};

export default Navbar;
