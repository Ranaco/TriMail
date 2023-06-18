import * as React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

interface NavbarButtonProps {
  img: string;
  onClick: Function;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ img, onClick }) => {
  return (
    <Box
      onClick={() => onClick()}
      style={{
        cursor: "pointer",
      }}
    >
      <Image src={`/images/${img}.svg`} alt={img} width={20} height={20} />
    </Box>
  );
};

const NavbarButtonGroup = () => {
  const [index, setIndex] = React.useState<number>(0);
  const router = useRouter();
  const theme = useTheme();

  React.useEffect(() => {
    setIndex(router.pathname == "/profile" ? 1 : 0);
  }, []);

  const navigate = (path: string, index: number) => {
    router.push(`/${path}`);
    setIndex(index);
  };

  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      height="50px"
      pt={"12px"}
      pl={"10px"}
      pr={"10px"}
      width={"150px"}
    >
      <Stack direction={"row"} justifyContent={"space-around"}>
        <NavbarButton img="dashboard" onClick={() => navigate("/home", 0)} />
        <NavbarButton img="profile" onClick={() => navigate("/profile", 1)} />
      </Stack>
      <Box
        sx={{
          transition: theme.transitions.create("marginLeft"),
        }}
        bgcolor={theme.palette.primary["100"]}
        marginLeft={index === 0 ? "0px" : "50%"}
        borderRadius={"10px"}
        width={"50%"}
        height={"5px"}
      />
    </Stack>
  );
};

export default NavbarButtonGroup;
