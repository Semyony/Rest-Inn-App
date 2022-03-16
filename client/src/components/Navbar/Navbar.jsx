import React from "react";
import Button from "@mui/material/Button";
import "./Navbar.css";
import ButtonMenu from "./ButtonMenu";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  logo,
  roadIcon,
  Search,
  SearchArea,
} from "./NavbarElements";
import { FaRoad } from "react-icons/fa";
import SearchBar from "./SearchBar";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" class="notActive">
          <h1 className="logo"> rest inn</h1>
        </NavLink>
        <SearchArea>
          <Search>
            <SearchBar />
            <span>
              <SearchIcon sx={{ color: "black", ml: 4, mb: -1, verticalalign: "center", cursor: "pointer"  }} />
            </span>
          </Search>
        </SearchArea>

        <Bars />
        <NavMenu>
          <NavLink to="/properties" activeStyle>
            Vacation Properties
          </NavLink>
          <ButtonMenu></ButtonMenu>
        </NavMenu>
        {/* <NavBtn>
          
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
