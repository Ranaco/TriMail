import * as React from "react";
import { Box } from "@mui/system";
import { AppState } from "./_app";

const Home: React.FC = () => {
  const { state } = React.useContext(AppState);
  console.log(state);
  return <Box>Homepage</Box>;
};

export default Home;
