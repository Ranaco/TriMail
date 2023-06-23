import * as React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Capsule from "../../components/capsule";
import NewsletterTile from "../../components/newsletter-tile";
import { AppState } from "../_app";
import fetchReports from "../../lib/fetch-reports";

const Home: React.FC = () => {
  const { state } = React.useContext(AppState);
  const [interests, setInterests] = React.useState<string[]>([]);
  const [reports, setReports] = React.useState([]);

  const theme = useTheme();

  const [activeFilter, setActiveFilter] = React.useState<string[]>([
    ...interests,
  ]);

  const fetchReportData = async () => {
    if (state.user) {
      const report = await fetchReports(state.user.interests[0]);
      setReports(report);
      console.log(report);
    }
  };

  React.useEffect(() => {
    if (state.user) {
      setInterests(state.user.interests);
      fetchReportData();
    }
  }, [state.user]);

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
            {interests.map((e, index) => (
              <Capsule
                key={index}
                active
                label={e}
                onChange={(label, checked) => {
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
      <Stack flex={1} direction={"column"} gap={"20px"}>
        {reports.map((e, index) => {
          return <NewsletterTile {...e} key={index} />;
        })}
      </Stack>
    </Stack>
  );
};

export default Home;
