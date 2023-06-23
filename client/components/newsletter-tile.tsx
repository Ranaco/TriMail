import * as React from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import Link from "next/link";

interface NewsletterTileProps {
  title: string;
  url: string;
  language: string;
  topics: string[];
  publisher: string;
}

const NewsletterTile: React.FC<NewsletterTileProps> = ({
  title,
  url,
  language,
  topics,
  publisher,
}) => {
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
          {topics ? topics.join(" | ") : null}
        </Typography>
        <Typography fontSize={theme.typography.fontSize}>{language}</Typography>
      </Stack>
      <Typography fontSize={"1.5em"} pt={"20px"} fontWeight={"bold"}>
        {title}
      </Typography>
      <Stack
        direction={"row"}
        height={"50px"}
        mt={"50px"}
        justifyContent={"space-between"}
      >
        <Typography color={"grey"}>{publisher}</Typography>
        <Link href={url ?? ""} target="_blank">
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
        </Link>
      </Stack>
    </Box>
  );
};

export default NewsletterTile;
