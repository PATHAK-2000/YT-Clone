import React from "react";
import { Stack } from "@mui/material";
import { logo } from "../assets/utils/constants";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      top: 0,
      justifyContent: "space-between",
      background: "#000",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>

    <SearchBar />
  </Stack>
);

export default NavBar;
