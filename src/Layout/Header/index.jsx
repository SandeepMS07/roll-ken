import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import { styled } from "styled-components";
import logo from "../../assets";
import { Close, Menu } from "@mui/icons-material";
import { useState } from "react";
import KenButton from "../../Components/KenButton";
// import { theme } from "../../utils/Themes/Theme";

const StyledToolbar = styled(Toolbar)({
  padding: "4px",
  height: "auto",
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "space-between",
});

const pages = ["Home", "Testimonials", "Services", "Contact"];

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);
  
  const handleMenuClick = () => {
    setMenuClick((prev) => !prev);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
        boxShadow: "none",
        borderBottom: "1px solid #DBDBDB",
      }}
    >
      <Container>
        <StyledToolbar>
          <img src={logo} alt="" style={{ height: "50px" }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px" }}>
            {pages.map((page) => (
              <Box
                key={page}
                sx={{
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    borderBottom: "5px solid #C15B5B",
                    backgroundColor: "rgba(0, 0, 0, 0.03)",
                    marginBottom: "0px",
                  },
                }}
              >
                <KenButton
                  buttonType="Default"
                  style={{
                    my: 2,
                    color: "#1D1D1F",
                    display: "block",
                    fontFamily: "DM Sans",
                    fontStyle: "normal",
                    lineHeight: "23px",
                    fontSize: "16px",
                    fontWeight: "500",
                    borderRadius: "0px",
                    textTransform: "none",
                    "&:hover": {
                      background: "none",
                    },
                  }}
                  title={page}
                />
              </Box>
            ))}
          </Box>

          <KenButton
            buttonType="outlined"
            style={{
              border: "1px solid #1D1D1F",
              color: "#1A1A1A",
              borderRadius: "1px",
              fontSize: "16px",
              fontFamily: "DM Sans",
              fontStyle: "normal",
              padding: "9.5px 50px 10.5px 50px",
              fontWeight: "700",
              textTransform: "none",
              lineHeight: "32px",
              display: { xs: "none", md: "flex" },
              "&:hover": {
                border: "1px solid #1D1D1F",
              },
            }}
            title="Book A Demo"
          />

          <IconButton
            onClick={handleMenuClick}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            {!menuClick ? (
              <Menu
                sx={{
                  color: "black",
                  fontSize: "30px",
                }}
              />
            ) : (
              <Close
                sx={{
                  color: "black",
                  fontSize: "30px",
                }}
              />
            )}
          </IconButton>
        </StyledToolbar>

        {menuClick && (
          <>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
                alignItems: "start",
                margin: "20px",
                gap: { xs: "1px", md: "20px" },
              }}
            >
              {pages.map((page, index) => (
                <Box
                  key={page}
                  sx={{
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": {
                      borderBottom: "5px solid #C15B5B",
                      backgroundColor: "rgba(0, 0, 0, 0.03)",
                      marginBottom: "0px",
                    },
                    width: "100%",
                    borderTop: index == "0" ? "" : "1px solid #DBDBDB",
                  }}
                >
                  <KenButton
                    style={{
                      my: 2,
                      color: "#1D1D1F",
                      display: "block",
                      fontFamily: "DM Sans",
                      fontStyle: "normal",
                      lineHeight: { xs: "10px", md: "23px" },
                      fontSize: "16px",
                      fontWeight: "500",
                      borderRadius: "0px",
                      textTransform: "none",
                      "&:hover": {
                        background: "none",
                      },
                    }}
                    title={page}
                  />
                </Box>
              ))}
              <KenButton
                buttonType="outlined"
                style={{
                  border: "1px solid #1D1D1F",
                  color: "#1A1A1A",
                  borderRadius: "1px",
                  fontSize: "16px",
                  width: "100%",
                  marginTop: "10px",
                  fontFamily: "DM Sans",
                  fontStyle: "normal",
                  padding: "9.5px 50px 10.5px 50px",
                  fontWeight: "700",
                  textTransform: "none",
                  lineHeight: "32px",
                  display: { xs: "flex", md: "none" },
                  "&:hover": {
                    border: "1px solid #1D1D1F",
                  },
                }}
                title="Book A Demo"
              />
            </Box>
          </>
        )}
      </Container>
    </AppBar>
  );
};

export default Header;
