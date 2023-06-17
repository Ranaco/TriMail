import * as React from "react";
import { Box, Checkbox, Typography, FormControlLabel } from "@mui/material";

interface CapsuleProps {
  onChange(label: string, checked: boolean): void;
  label: string;
  active?: boolean;
}

const Capsule: React.FC<CapsuleProps> = ({ onChange, label, active }) => {
  const [checked, setChecked] = React.useState(active);

  return (
    <Box
      p={"3px"}
      pl={"7px"}
      pr={"7px"}
      border={"1px solid grey"}
      borderRadius={"15px"}
      display={"inline-block"}
      width={"auto"}
    >
      <FormControlLabel
        sx={{
          height: "40px",
        }}
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => {
              e.preventDefault();
              onChange(label, e.target.checked);
              setChecked(e.target.checked);
            }}
          />
        }
        label={label}
      />
    </Box>
  );
};

export default Capsule;
