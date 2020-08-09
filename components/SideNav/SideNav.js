import React from "react";
import Cross from "../../assets/RedCross";
import Home from "../../assets/Home";
import Settings from "../../assets/Settings";
import Question from "../../assets/Question";
import Heart from "../../assets/Heart";
import Mail from "../../assets/Mail";
import Exit from "../../assets/Exit";

const SideNav = () => {
  return (
    <>
      <div className="sidenav-main ">
        <div className="sidenav-brand mt-lg-3">
          <div className="sidenav-brand-icon">
            <Cross />
          </div>
          <div className="sidenav-brand-info">Medi</div>
        </div>
        <div className="sidenav-menu-wrapper">
          <div className="sidenav-ul">
            <div className="sidenav-li">
              <div className="sidenav-icon-wrapper">
                {" "}
                <Home/>
              </div>
            </div>
            <div className="sidenav-li">
              <div className="sidenav-icon-wrapper">
                {" "}
                <Heart />
              </div>
            </div>
            <div className="sidenav-li">
              <div className="sidenav-icon-wrapper">
                {" "}
                <Mail />
              </div>
            </div>
            <div className="sidenav-li">
              <div className="sidenav-icon-wrapper">
                {" "}
                <Settings />
              </div>
            </div>
            <div className="sidenav-li">
              <div className="sidenav-icon-wrapper">
                {" "}
                <Question />
              </div>
            </div>
          </div>
          <div className="sidenav-exit">
            <div className="sidenav-icon-wrapper">
              {" "}
              <Exit />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
