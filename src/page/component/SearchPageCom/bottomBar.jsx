import React from "react";
import "./bottomBar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faSearch, faUser);

const BottomBar = () => {
  return (
    <nav className="wrapper">
      <div>
        <FontAwesomeIcon icon={faHome} />
      </div>
      <div>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div>
        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  );
};

export default BottomBar;