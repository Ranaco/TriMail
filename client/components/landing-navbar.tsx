import * as React from "react";
import { Stack, useTheme, Button } from "@mui/material";
import Image from "next/image";

interface Props {
  callback: Function;
}

const LandingNavbar: React.FC<Props> = ({ callback }) => {
  const theme = useTheme();

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
      <Button
        onClick={() => callback()}
        sx={{
          bgcolor: theme.palette.primary["100"],
          width: "80px",
          borderRadius: "10px",
          fontWeight: "bold",
        }}
      >
        Log in
      </Button>
    </Stack>
  );
};

export default LandingNavbar;
