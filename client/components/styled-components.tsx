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
  password?: boolean | undefined;
}

export const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecorationColor: theme.palette.primary.main,
}));

export const MuiInput: React.FC<InputProps> = ({
  onChange,
  password,
  value,
  label,
  name,
}) => {
  const theme = useTheme();
  return (
    <Stack width={"100%"} gap="10px">
      <Typography color={theme.palette.secondary.main}>{label}</Typography>
      <Input
        type={password ? "password" : undefined}
        onChange={onChange}
        value={value}
        disableUnderline
        required
        name={name ?? String(label).toLowerCase()}
        sx={{
          borderRadius: "10px",
          paddingLeft: "10px",
          border: `1px solid grey`,
          ":focus-within": {
            border: `1px solid ${theme.palette.primary.main}`,
          },
        }}
      />
    </Stack>
  );
};

export const MuiCheckBox = styled(Checkbox)(({ theme }) => ({}));
