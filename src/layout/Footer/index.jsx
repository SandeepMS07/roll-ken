import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  envelope,
  kenLogo,
  linkedIn,
  location,
  phone,
  rightArrow,
} from "../../assets";
import styled from "@emotion/styled";
// import KenInput from "../../components/KenInput";

const StyledTypography = styled(Typography)({
  fontFamily: "DM Sans",
  color: "white",
});
const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#333333",
  borderRadius: "30px",
  alignItems: "center",
  height: "50px",
  width: "50px",
  marginRight: "10px",
});

const Footer = () => {
  return (
    <div>
      <Box
        sx={{ bgcolor: "#1D1D1F", pt: "200px", pb: "100px" }}
        component="footer"
      >
        <Container>
          <Grid item container>
            <Grid xs={4}>
              <Box>
                <StyledTypography
                  sx={{
                    fontSize: "24px",
                    fontWeight: 700,
                    maxWidth: "200px",
                    lineHeight: "28px",
                  }}
                >
                  Seamless student acquisition
                </StyledTypography>
                <Box sx={{ mt: "50px" }}>
                  <img src={kenLogo} width={"100px"} alt="" />
                  <Typography
                    sx={{
                      color: "#b2b2b2",
                      maxWidth: "300px",
                      fontSize: "12px",
                    }}
                  >
                    A product by Ken42
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box>
                <StyledTypography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 700,
                    marginBottom: "10px",
                  }}
                >
                  Office Address
                </StyledTypography>
              </Box>

              <Grid spacing={2}>
                <Stack direction={"row"} marginTop={"20px"}>
                  <StyledBox>
                    <img src={location} alt="" />
                  </StyledBox>
                  <Typography sx={{ color: "#b2b2b2", maxWidth: "300px" }}>
                    Yellappa Chetty Layout,
                    <br /> Halasuru, Karnataka.
                  </Typography>
                </Stack>
                <Stack direction={"row"} marginTop={"20px"}>
                  <StyledBox>
                    <img src={phone} alt="" />
                  </StyledBox>
                  <Typography sx={{ color: "#b2b2b2", maxWidth: "300px" }}>
                    + (123) 124-567-8901 <br />+ (123) 124-667-8901
                  </Typography>
                </Stack>
                <Stack direction={"row"} marginTop={"20px"}>
                  <StyledBox>
                    <img src={envelope} alt="" />
                  </StyledBox>
                  <Typography sx={{ color: "#b2b2b2", maxWidth: "300px" }}>
                    mail@ken42.com <br />
                    help@ken42.com
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            <Grid xs={4}>
              <Box>
                <StyledTypography sx={{ fontSize: "18px", fontWeight: 700 }}>
                  Newsletter
                </StyledTypography>
                <Typography
                  sx={{
                    color: "#b2b2b2",
                    fontSize: "14px",
                    maxWidth: "300px",
                    lineHeight: "28px",
                    marginTop: "10px",
                  }}
                >
                  Submit to our newsletter & subscribe to our newsletter to be
                  on the up and up
                </Typography>
                <Box sx={{ paddingRight: "50px", marginTop: "20px" }}>
                  {" "}
                  {/* <KenInput label={"Email"} /> */}
                  <input
                    style={{
                      backgroundColor: "#1d1d1f",
                      width: "100%",
                      border: "none",
                      borderBottom: "1px solid #fff",
                      padding: "5px 0",
                      color: "#C05251",
                      fontSize: "22px",
                      fontWeight: "700",
                    }}
                    type="text"
                    placeholder="Email"
                  />
                  <Button
                    sx={{
                      color: "white",
                      fontSize: "16px",
                      fontWeight: 700,
                      textTransform: "none",
                      padding: "20px 0",
                    }}
                  >
                    Get in Touch{" "}
                    <img
                      src={rightArrow}
                      style={{ marginLeft: "20px" }}
                      alt=""
                    />
                  </Button>
                </Box>
                <Box>
                  <img src={linkedIn} alt="" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        {/* <Copyright /> */}
      </Box>
      {/* <Box><CopyRight /></Box> */}
      <Box>
        <Typography
          sx={{
            color: "#b2b2b2",
            backgroundColor: "#000",
            py: "20px",
            fontSize: "12px",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          Copyright © 2023 Ken42 All Rights Reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
