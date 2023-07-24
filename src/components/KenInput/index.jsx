import { Box, TextField } from "@mui/material";

export default function KenInput(props) {
  const { label, id, value, type, ...InputProps } = props;

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{ color: "#C0E5FF" }}
        // color="success"
        value={value}
        id={id}
        type={type}
        label={label}
        variant="standard"
        {...InputProps}
      />
    </Box>
  );
}
