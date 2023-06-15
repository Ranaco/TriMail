import * as React from "react";
import { Box } from "@mui/system";
import { AppState } from "./_app";

const LandingPage: React.FC = () => {
  const { state } = React.useContext(AppState);
  console.log(state);
  return <Box>Landingpage</Box>;
};

export default LandingPage;
