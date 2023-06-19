import * as React from "react";
import { Box, Stack, Typography, Grid, Button, useTheme } from "@mui/material";
import Image from "next/image";
import Layout from "../../components/layout/secondary";
import Capsule from "../../lib/capsule";
import { useRouter, NextRouter } from "next/router";
import { AppState } from "../_app";
import { usePolybase } from "@polybase/react";

const Interests: React.FC = () => {
  const { state, setState } = React.useContext(AppState);
  const filters: string[] = [
    "Data Science",
    "Innovation",
    "Future of Technology",
    "Blockchain",
    "VR",
    "Big Data",
    "Machine Learning",
    "IoT",
    "AR",
    "Fintech",
    "Healthcare",
    "User Experience",
    "Productivity",
  ];

  const polyDB = usePolybase();

  const router: NextRouter = useRouter();
  const theme = useTheme();
  const [activeFilter, setActiveFilter] = React.useState<string[]>([]);

  const submit = () => {
    console.log(activeFilter);
    polyDB
      .collection("UserSBT")
      .record(String(state.user.id))
      .call("updateInterests", [activeFilter])
      .then((e) => {
        router.push("/home");
      });
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
            src={"/images/interests.png"}
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
        <Stack gap={"50px"} width={"85%"} height={"80%"}>
          <Stack width={"100%"}>
            <Typography fontSize={"3em"}>Choose your interests</Typography>
            <Typography fontSize={"0.9em"}>
              Choose the topics for which you would like to recieve
              reccomendations.{" "}
            </Typography>
          </Stack>
          <Box>
            <Grid container spacing={3}>
              {filters.map((e, index) => (
                <Grid key={index} item>
                  <Capsule
                    active={false}
                    label={e}
                    onChange={(label, checked) => {
                      console.log(label, checked);
                      if (checked) {
                        setActiveFilter((val) => [...val, label]);
                      } else {
                        setActiveFilter((val) =>
                          val.filter((k) => k !== label)
                        );
                      }
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <Button
              onClick={submit}
              sx={{
                bgcolor: theme.palette.primary["100"],
                color: "white",
                mt: "50px",
                pl: "15px",
                pr: "15px",
              }}
            >
              Continue
            </Button>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

Interests.getLayout = (page: JSX.Element) => (
  <Layout title={"Trimail | Interests"}>{page}</Layout>
);

export default Interests;
