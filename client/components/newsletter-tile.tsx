import * as React from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";

const NewsletterTile = () => {
  const theme = useTheme();

  return (
    <Box
      bgcolor={theme.palette.secondary.dark}
      p={"20px"}
      borderRadius={"10px"}
    >
      <Stack width={"100%"} justifyContent={"space-between"} direction={"row"}>
        <Typography
          color={theme.palette.primary.main}
          fontSize={theme.typography.fontSize}
        >
          Data Science | Big Data
        </Typography>
        <Typography fontSize={theme.typography.fontSize}>12 Feb' 23</Typography>
      </Stack>
      <Typography fontSize={"1.5em"} pt={"20px"} fontWeight={"bold"}>
        Data science and its relationship to big data and data-driven decision
        making.
      </Typography>
      <Stack
        direction={"row"}
        height={"50px"}
        mt={"50px"}
        justifyContent={"space-between"}
      >
        <Typography color={"grey"}>Published Online: 2018</Typography>
        <Button
          sx={{
            height: "35px",
            color: "white",
            display: "inline-block",
            pl: "15px",
            pr: "15px",
            bgcolor: theme.palette.primary["100"],
            width: "auto",
          }}
        >
          View
        </Button>
      </Stack>
    </Box>
  );
};

export default NewsletterTile;
