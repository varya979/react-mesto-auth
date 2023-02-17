import React from "react";
import { Link, useNavigate } from "react-router-dom";
import headerLogo from "../images/header__logo.svg";

export default function Header(props) {
  const navigate = useNavigate();

  function signOut() {
    // localStorage.removeItem("jwt");
    navigate(props.link);
  }

  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="логотип проекта Место"
      />
      {props.loggedIn && (
        <div className="header__nav">
          <p className="header__email">{props.email}</p>
          <Link to={props.link} onClick={signOut} className="header__link">
            {props.linkName}
          </Link>
        </div>
      )}
      {!props.loggedIn && (
        <div className="header__nav">
          <Link to={props.link} onClick={signOut} className="header__link">
            {props.linkName}
          </Link>
        </div>
      )}
    </header>
  );
}
