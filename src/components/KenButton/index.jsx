import { Button } from "@mui/material";
import React from "react";

function KenButton(props) {
  const { title, style, buttonType } = props;
  switch (buttonType) {
    case "outlined":
      return (
        <Button variant="outlined" sx={style}>
          {title}
        </Button>
      ); 

    case "contained":
      return (
        <Button variant="contained" sx={style}>
          {title}
        </Button>
      );

    default:
      return <Button sx={style}>{title}</Button>;
  }
}

export default KenButton;
