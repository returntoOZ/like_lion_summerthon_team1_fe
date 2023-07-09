import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import BottomBar from "./component/bottomBar";
import SearchBar from "./component/searchBar";

const ProfileBox = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    margin-top : 30px;
`;

const SearchPage = (props) => {
    
  return (
    <>
        <SearchBar/>
        <BottomBar/>
    </>
  );
};

export default SearchPage;