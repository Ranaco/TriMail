import * as React from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { NextRouter } from "next/router";
import Image from "next/image";
import NavbarButtonGroup from "../lib/navbar-button-group";
import { AppState } from "../pages/_app";
import { FaUserCircle } from "react-icons/fa";

interface NavbarProps {
  router: NextRouter;
}

const Navbar: React.FC<NavbarProps> = ({ router }) => {
  const theme = useTheme();
  const { state, setState } = React.useContext(AppState);
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
      <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />
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
