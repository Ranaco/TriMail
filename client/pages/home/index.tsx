import * as React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Capsule from "../../lib/capsule";
import NewsletterTile from "../../components/newsletter-tile";

const Home: React.FC = () => {
  const filters: string[] = [
    "Data Science",
    "Machine Learning",
    "VR",
    "Internet Of Things",
    "Big Data",
    "Entrepreneurship",
    "Healtcare",
  ];

  const theme = useTheme();

  const [activeFilter, setActiveFilter] = React.useState<string[]>([
    ...filters,
  ]);

  return (
    <Stack width={"100%"} height={"100%"} direction="row" gap="20px">
      <Box flex={0.35}>
        <Stack
          width={"100%"}
          gap={"20px"}
          bgcolor={theme.palette.secondary.dark}
          borderRadius={"10px"}
          display={"inline-block"}
          height={"auto"}
          p={"30px"}
        >
          <Stack pl={"20px"} gap={"20px"} height={"100%"} alignItems={"start"}>
            <Typography fontSize={"1.7em"} pb={"20px"}>
              Category
            </Typography>
            {filters.map((e) => (
              <Capsule
                active
                label={e}
                onChange={(label, checked) => {
                  console.log(label, checked);
                  if (checked) {
                    setActiveFilter((val) => [...val, label]);
                  } else {
                    setActiveFilter((val) => val.filter((k) => k !== label));
                  }
                }}
              />
            ))}
          </Stack>
        </Stack>
      </Box>
      <Box flex={1}>
        <NewsletterTile />
      </Box>
    </Stack>
  );
};

export default Home;
