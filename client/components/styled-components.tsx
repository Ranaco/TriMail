import {
  Checkbox,
  Input,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { ChangeEventHandler } from "react";

interface InputProps {
  onChange: ChangeEventHandler;
  value: string;
  label: string;
  name?: string | undefined;
}

export const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecorationColor: theme.palette.primary.main,
}));

export const MuiInput: React.FC<InputProps> = ({
  onChange,
  value,
  label,
  name,
}) => {
  const theme = useTheme();
  return (
    <Stack width={"100%"} gap="10px">
      <Typography color={theme.palette.secondary.main}>{label}</Typography>
      <Input
        onChange={onChange}
        value={value}
        disableUnderline
        required
        style={{
          paddingLeft: "10px",
        }}
        name={name ?? String(label).toLowerCase()}
        sx={{
          border: `1px solid ${theme.palette.secondary.dark}`,
          ":focus-within": {
            border: `1px solid ${theme.palette.primary.main}`,
          },
        }}
      />
    </Stack>
  );
};

export const MuiCheckBox = styled(Checkbox)(({ theme }) => ({}));
