import { Button } from "@mui/material";
import * as React from "react";

export default function KenButton(props) {
	const { children } = props;
	return <Button {...props}>{children}</Button>;
}
