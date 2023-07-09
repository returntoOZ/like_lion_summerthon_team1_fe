import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import BottomBar from "./component/SearchPageCom/bottomBar";
import SearchBar from "./component/SearchPageCom/searchBar";

const SearchPage = (props) => {
    
  return (
    <>
        <SearchBar/>
        <BottomBar/>
    </>
  );
};

export default SearchPage;