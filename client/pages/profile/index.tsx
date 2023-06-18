import * as React from "react";
import { Stack, Typography, Box } from "@mui/material";

const Profile: React.FC = () => {
  return (
    <Stack direction={"row"} height="100%">
      <Box bgcolor="blue" flex={1}></Box>
      <Stack flex={1}>
        <Box bgcolor="red" flex={1}></Box>
        <Box bgcolor="green" flex={0.5}></Box>
      </Stack>
    </Stack>
  );
};

export default Profile;
