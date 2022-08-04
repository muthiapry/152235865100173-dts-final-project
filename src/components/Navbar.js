import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import * as React from "react";
import Logo from "../img/cookbook.png";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import UserLog from "./UserLog";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const navItems = [
  { text: "Home", link: "/" },
  { text: "Category", link: "#" },
  { text: "Article", link: "#" },
  { text: "New", link: "#" },
  { text: "My Recipe", link: "#" },
];

const Navbar = () => {
  let navigate = useNavigate();

  const onSearch = (key) => {
    navigate(`/results/${key}`);
    window.scrollTo(0, 0);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar>
        <Toolbar>
          <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
            <img
              src={Logo}
              alt="logo"
              className="Recipe-logo"
              style={{ display: "flex", marginRight: 100, marginLeft: 70, width: 35 }}
            />
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "block",
              fontFamily: "poppins",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            {navItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.text}
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontFamily: "poppins",
                  fontWeight: "400",
                }}
                className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}
              >
                {item.text}
              </NavLink>
            ))}
          </Typography>
          <Search sx={{ mx: 5 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onKeyPress={(ev) => {
                if (ev.key === "Enter") {
                  ev.preventDefault();
                  if (ev.target.value !== "") {
                    console.log(`Lagi cari ${ev.target.value}`);
                    onSearch(ev.target.value);
                  }
                }
              }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ display: "block" }}>
            <UserLog />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
