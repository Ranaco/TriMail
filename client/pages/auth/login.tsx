import * as React from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { CustomLink, MuiInput } from "../../components/styled-components";
import ParticleService from "../../lib/utils/particle-hook";
import Layout from "../../components/layout/secondary";

type FormStateType = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const theme = useTheme();
  const [formState, setFormState] = React.useState<FormStateType>({
    email: "",
    password: "",
  });

  const updateFormState = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((val) => ({
      ...val,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <Stack direction={"row"}>
      <Stack
        flex={0.87}
        height={"100vh"}
        direction="column"
        alignItems={"start"}
        justifyContent={"start"}
      >
        <Box p="70px">
          <Image src="/images/logo.png" alt="Logo" height={30} width={150} />
        </Box>
        <Box mb="auto" mr="auto" ml={"auto"} mt={"10%"}>
          <Image
            src={"/images/login.png"}
            alt="Login"
            width={1600 / 4}
            height={1600 / 4}
          />
        </Box>
      </Stack>
      <Box
        flex={1}
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack width={"70%"} height={"80%"} justifyContent="start">
          <Stack width={"100%"}>
            <Typography fontSize={"3em"}>Welcome Aboard</Typography>
            <Typography fontSize={"0.9em"}>
              First time here?
              <CustomLink href="/auth/signup"> Sign up</CustomLink>
            </Typography>
          </Stack>
          <form
            style={{
              paddingTop: "50px",
              height: "100%",
            }}
          >
            <Stack gap={"50px"} height="100%">
              <MuiInput
                label={"Email"}
                onChange={updateFormState}
                value={formState.email}
              />
              <MuiInput
                label={"Password"}
                onChange={updateFormState}
                value={formState.password}
              />
              <Button
                onClick={() => {
                  new ParticleService().login();
                }}
                sx={{
                  alignSelf: "center",
                  bgcolor: theme.palette.secondary.dark,
                  mt: "auto",
                  width: "60%",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Stack>
  );
};

Login.getLayout = (page: JSX.Element) => {
  return <Layout title="Login">{page}</Layout>;
};

export default Login;
