import React from "react";
import "./bottomBar.css";
import { useNavigate, Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faSearch, faUser);

const BottomBar = () => {
  const navigate = useNavigate();

  function moveToMain(){ // mainPage로 이동하는 함수
    navigate(`/main`)
  }

  function moveToSearch(){ // searchPage로 이동하는 함수
    navigate(`/search`)
  }

  function moveToMypage(){ // myPage로 이동하는 함수
    navigate(`/mypage`)
  }

  return (
    <nav className="wrapper">
      <div onClick={moveToMain}>
      <FontAwesomeIcon icon={faHome} />
      </div>
      <div onClick={moveToSearch}>
      <FontAwesomeIcon icon={faSearch} />
      </div>
      <div onClick={moveToMypage}>
      <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  );
};

export default BottomBar;