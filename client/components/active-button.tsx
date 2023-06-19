import * as React from "react";
import { useTheme, Button } from "@mui/material";

interface ActiveButtonProps {
  title: string;
  currentActive: string;
  callback(value: string): void;
}

const ActiveButton: React.FC<ActiveButtonProps> = ({
  callback,
  title,
  currentActive,
}) => {
  const theme = useTheme();
  const disabled = title !== currentActive;
  return (
    <Button
      sx={{
        bgcolor: disabled ? "transparent" : theme.palette.primary["100"],
        borderRadius: "10px",
        border: `1px solid grey`,
        color: "white",
      }}
      onClick={() => callback(title)}
    >
      {title}
    </Button>
  );
};

export default ActiveButton;
