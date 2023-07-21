import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { styled } from "styled-components";
import logo from "../../assets";
import { Menu } from "@mui/icons-material";
const StyledToolbar = styled(Toolbar)({
  padding: "2px",
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "space-between",
});

const pages = ["Home", "Testimonials", "Services", "Contact"];

const Header = () => {
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
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#1D1D1F",
                  display: "block",
                  fontStyle: "normal",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button
            sx={{
              border: "1px solid #1D1D1F",
              color: "#1A1A1A",
              borderRadius: "1px",
              paddingInline: "25px",
              paddingBlock: "10px",
              display: { xs: "none", md: "flex" },
              //   transition: "transform 0.2s ease-in-out",
              //   "&:hover": {
              //     transform: "scale(1.1)",
              //   },
            }}
          >
            Book A Demo
          </Button>
          <Menu
            sx={{
              display: { xs: "flex", md: "none" },
              color: "black",
              height: "20px",
            }}
          />
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
