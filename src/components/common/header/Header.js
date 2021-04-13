import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../../common";
import "./Header.css";

function Header() {
  const logoStyle = {
    color: 'black'
  };


  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top_navbar">
          <section classname="header-top__navigation">
            <Nav />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
          (203)-901-0668
        </section>
        <section className="header-bottom__email">
          rjpantalena@gmail.com
        </section>
      </section>
    </section>
  );
}

export default Header;
