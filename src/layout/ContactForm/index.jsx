import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";
import React from "react";
import KenInput from "../../components/KenInput";
// import KenButton from "../../components/KenButton";

// const useStyles = makeStyles()((theme) => ({
//   title: {
//     color: "#fff",
//   },
// }));
const ContactForm = () => {
  //   const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container sticky>
        <Paper
          className="blue-gradient"
          sx={{ position: "sticky", borderRadius: "12px" }}
        >
          <Grid container spacing={1}>
            <Grid item xs={6} pr={"50px"} minWidth={0}>
              <Box sx={{ width: "100%" }}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "54px",
                    fontWeight: 700,
                    letterSpacing: -1.5,
                  }}
                >
                  Book a Demo
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    maxWidth: "400px",
                  }}
                >
                  Stay Organized, Streamline Admissions and Engage Effectively
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} pl={"50px"} minWidth={0}>
              <Box sx={{ width: "100%" }}>
                <KenInput label={"name"} />
                <KenInput label={"email"} />
                <KenInput label={"phone"} />
                {/* <KenButton /> */}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default ContactForm;
