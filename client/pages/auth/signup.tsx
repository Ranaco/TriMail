import { Button, Stack, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import Image from "next/image";
import { CustomLink, MuiInput } from "../../components/styled-components";

type FormStateType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confPassword: string;
};

const SignUp: React.FC = () => {
  const theme = useTheme();

  const initState: FormStateType = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confPassword: "",
  };

  const [formState, setFormState] = React.useState<FormStateType>(initState);

  const updateFormState = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((val) => ({
      ...val,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Stack direction={"row"}>
      <Stack
        flex={1}
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
            src={"/images/signup.png"}
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
        <Stack
          direction={"column"}
          width={"85%"}
          height={"80%"}
          justifyContent="start"
        >
          <Stack width={"100%"}>
            <Typography fontSize={"3em"}>Getting Started</Typography>
            <Typography fontSize={"0.9em"}>
              Already have an account?
              <CustomLink href="/auth/login"> Sign in</CustomLink>
            </Typography>
          </Stack>
          <form
            style={{
              paddingTop: "50px",
              height: "100%",
            }}
          >
            <Stack height="100%" gap="50px">
              <Stack direction="row" width={"100%"} gap="50px">
                <MuiInput
                  value={formState.firstName}
                  label={"First name"}
                  name={"firstName"}
                  onChange={updateFormState}
                />
                <MuiInput
                  value={formState.firstName}
                  label={"Last name"}
                  name={"lastName"}
                  onChange={updateFormState}
                />
              </Stack>
              <MuiInput
                label="Email"
                value={formState.email}
                onChange={updateFormState}
              />
              <MuiInput
                label="Password"
                value={formState.password}
                onChange={updateFormState}
              />
              <MuiInput
                label="Confirm password"
                value={formState.confPassword}
                onChange={updateFormState}
                name={"confPassword"}
              />

              <Button
                sx={{
                  alignSelf: "center",
                  bgcolor: theme.palette.secondary.dark,
                  mt: "auto",
                  width: "50%",
                }}
                type="submit"
              >
                Sign up
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Stack>
  );
};

export default SignUp;
