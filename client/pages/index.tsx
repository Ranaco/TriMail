import * as React from "react";
import { Box, Stack } from "@mui/system";
import { AppState } from "./_app";
import Image from "next/image";
import { Typography, Button, useTheme } from "@mui/material";
import Navbar from "../components/landing-navbar";
import { useRouter } from "next/router";

const LandingPage: React.FC = () => {
  const theme = useTheme();
  const { state, setState } = React.useContext(AppState);
  const router = useRouter();

  const login = async () => {
    try {
      state.particleService.login().then((address) => {
        if (address) {
          setState((val) => ({ ...val, address }));
          location.reload();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack direction={"row"} height="100%">
      <Navbar callback={login} />
      <Stack
        flex={1}
        alignItems={"center"}
        justifyContent={"center"}
        pl={"60px"}
        pr={"60px"}
      >
        <Typography fontSize={"2em"}>
          Best way for&nbsp;
          <span
            style={{
              fontWeight: "bold",
              color: "#D0BCFF",
            }}
          >
            personalized AI powered newsletter, with the power of blockchain!
          </span>
        </Typography>
        <Typography color={"#EADDFF"}>
          Select your interests and get related papers in your personal inbox
          from sources like IEEE, Research Gate.{" "}
        </Typography>
        <Button
          onClick={login}
          sx={{
            alignSelf: "start",
            bgcolor: theme.palette.primary["100"],
            width: "35%",
            borderRadius: "15px",
            p: "10px",
            mt: "60px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Log in
        </Button>
      </Stack>
      <Stack
        flex={1}
        alignItems={"center"}
        justifyContent={"center"}
        height={"100vh"}
      >
        <Image
          src="/images/landing.svg"
          alt="Landing"
          width={500}
          height={500}
        />
      </Stack>
    </Stack>
  );
};

export default LandingPage;
