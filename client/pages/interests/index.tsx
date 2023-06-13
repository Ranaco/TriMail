import * as React from "react";
import { Box, Stack, Typography, Grid } from "@mui/material";
import Image from "next/image";

const Interests: React.FC = () => {
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
            <Grid container spacing={2}></Grid>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Interests;
