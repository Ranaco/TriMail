import loading from "../public/gifs/loading.gif";
import Image from "next/image";
import { Box } from "@mui/material";

const LoadingPage = () => {
  return (
    <Box
      height={"100vh"}
      width={"100vw"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image width={200} height={200} src={loading} alt="Loading gif" />
    </Box>
  );
};

export default LoadingPage;
