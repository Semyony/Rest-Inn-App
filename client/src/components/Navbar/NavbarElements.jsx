import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars, FaRoad } from "react-icons/fa";
import SearchBar from "./SearchBar";

export const Nav = styled.nav`
  background: black;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-family: "Fredoka", sans-serif;
  cursor: poiner;

  & h1 {
    color: white;
  }

  &.active {
    color: grey;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absoluite;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 24px;
  &.hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 890px) {
    margin-right: 15rem;
    width: 5rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Search = styled.div`
  background-color: white;
  width: 400px;
  height: 35px;
  border-radius: 2rem;
`;
