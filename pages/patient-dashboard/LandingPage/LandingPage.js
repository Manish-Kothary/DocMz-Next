import React from "react";
// import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SideNav from "../../../components/SideNav/SideNav";
import Search from "../../../assets/Search";
import Checkup from "../../../assets/Checkup_svg";
import CheckupSm from "../../../assets/CheckupSm";
import Cross from "../../../assets/RedCross";
import Home from "../../../assets/Home";
import Settings from "../../../assets/Settings";
import Question from "../../../assets/Question";
import Heart1 from "../../../assets/Heart2";
import Mail from "../../../assets/Mail";
import { useMediaQuery } from "react-responsive";
import Farrow from "../../../assets/FilledArrow";
import Buttons from "../../../components/Button/Buttons";
import Cards from "../../../components/Card/Cards";


const LandingPage = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 700px)"
  });
  return (
    <>
      <main role="main" className="main-wrapper">
        <div className="sidenav-wrapper">
          <section className="sidenav-container">
            <SideNav />
          </section>
        </div>
        <div className="maincontent-wrapper">
          <div className="fixed-div">
            <section className="searchbar-wrapper">
              <div className="searchbar-container">
                <Search />
                <div className="searchbar-input ml-sm-3">
                  <input type="text" placeholder="Search for symptoms.." />
                </div>
              </div>
              <div className="brand-sm-wrapper">
                <div className="brand-sm-icon">
                <Cross />
                </div>
                <div className="brand-sm-info">Medi</div>
              </div>
              <div className="user-icon">
                <FontAwesomeIcon icon={faUser} size="1x" />
              </div>
            </section>
            <section className="info-section-container">
              <div className="info-section-info">
                <div className="Primary-info">
                  What Specialist are you looking for ?
                </div>
                <div className="secondary-info">
                  Now its so easy to make an appoinment with doctors
                </div>
                <div className="secondary-info">
                  Just use your peronal account to visit
                </div>
                <Buttons />
                <div className="cards-wrapper">
                  <Cards procedure={"Cardio"} />
                  <Cards procedure={"Dentistry"} />
                  <Cards procedure={"Pulmonology"} />
                </div>
              </div>
              <div className="info-section-svg">
                {isMobile ? <CheckupSm /> : <Checkup />}
                <div className="seeAll-btn ml-lg-5">
                  <div className="seeAll-info mr-lg-2">See All</div>
                  <div className="seeAll-icon">
                    <Farrow />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="sidenav-sm-container">
          <div style={{ width: "30px", height: "30px" }}>
            <Home />
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <Settings />
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <Question />
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <Heart1 />
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <Mail />
          </div>
        </div>
        <div className="sidenav-sm-container">
          <div style={{ width: "30px", height: "30px" }}>
            <Home />
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <Settings />
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <Question />
          </div>
          <div style={{ width: "30px", height: "30px" }}>
            <Heart1 />
          </div>
          <div style={{ width: "30px", height: "30px"}}>
          </div>
        </div>
      </main>
    </>
  );
};

<style jsx>
{
  `
  .main-wrapper {
    background-color: $color-primary1;
    // border-top-left-radius: 2em;
    // border-bottom-left-radius: 2em;
    display: flex;
    position: relative;
    .fixed-div {
      background-image: url("../assets/blob-shapes.svg");
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-size: cover;
      background-position-x: 300px;
      background-position-y: -500px;
      background-repeat: no-repeat;
      border-top-right-radius: 2em;
    }
    .sidenav-container {
      height: 100vh;
      padding: 0.75em;
    }
    .maincontent-wrapper {
      width: 93%;
      background-color: $color-primary2;
      border-radius: 2em;
  
      margin-top: 0.5em;
      margin-bottom: 0.5em;
  
      .searchbar-wrapper {
        margin-top: 2.5em;
        margin-left: 2.5em;
        margin-right: 2.5em;
        transition: width 0.5s ease-out;
        display: flex;
        justify-content: space-between;
        .searchbar-container {
          display: flex;
          align-items: center;
          width: 50%;
  
          .searchbar-input {
            font-size: 1.3rem;
  
            width: 100%;
            input {
              border: none;
              font-size: 1.5rem;
              color: $color-tertiary2;
              font-weight: 600;
              width: 100%;
              background-color: transparent;
            }
            input:focus {
              outline: none;
            }
            ::placeholder {
              color: #e4e5f2;
              font-size: 1.5rem;
            }
          }
        }
      }
    }
    .user-icon {
      color: $color-primary1;
    }
  
    //info section
  
    .info-section-container {
      display: flex;
      flex-direction: row;
      padding: 3.5em;
      justify-content: space-between;
      .info-section-info {
        .Primary-info {
          font-size: 4rem;
          font-weight: 800;
          color: $color-tertiary1;
        }
        .secondary-info {
          font-size: 2rem;
          color: $color-tertiary2;
          font-weight: 400;
        }
      }
    }
    .cards-wrapper {
      margin-top: 4em;
      display: flex;
      justify-content: space-between;
    }
  
    //see All button
    .seeAll-btn {
      align-self: flex-end;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      .seeAll-icon {
        fill: $color-primary1;
      }
      .seeAll-info {
        font-size: 1.5rem;
        color: $color-primary1;
      }
      &:hover {
        transform: translateX(5px);
      }
      &:active {
        transform: translateX(0px);
      }
    }
    .sidenav-sm-container {
      display: none;
    }
    //brand sm
    .brand-sm-wrapper {
      display: none;
    }
  }
  
  //media queries
  @media only screen and (max-width: 700px) {
    .main-wrapper {
      background-color: $color-primary2;
      // border-top-left-radius: 2em;
      // border-bottom-left-radius: 2em;
      padding-bottom: 100px;
      display: flex;
      flex-direction: column;
      position: relative;
      .fixed-div {
        background-image: url("../assets/blob-shapes.svg");
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-size: cover;
        background-position-x: 300px;
        background-position-y: -500px;
        background-repeat: no-repeat;
        border-top-right-radius: 2em;
      }
      .sidenav-container {
        display: none;
      }
      .maincontent-wrapper {
        width: 100%;
        background-color: $color-primary2;
        border-radius: 0;
        margin: 0;
  
        .searchbar-wrapper {
          margin-top: 2.5em;
          margin-left: 2.3em;
          margin-right: 2.5em;
          transition: width 0.5s ease-out;
          display: flex;
          justify-content: space-between;
          .searchbar-container {
            display: flex;
            align-items: center;
            width: 50%;
  
            .searchbar-input {
              font-size: 1.3rem;
              color: $color-tertiary2;
              width: 100%;
              input {
                border: none;
                color: $color-tertiary2;
                font-weight: 600;
                width: 100%;
              }
              ::placeholder {
                color: $color-tertiary2;
                font-size: 1.5rem;
              }
            }
          }
          .brand-sm-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            .brand-sm-icon {
              width: 20px;
              height: 20px;
              fill: $color-primary1;
            }
            .brand-sm-info {
              font-size: 1.2rem;
              color: $color-primary1;
              font-weight: 600;
            }
          }
        }
      }
      .user-icon {
        color: $color-primary1;
      }
  
      //info section
  
      .info-section-container {
        display: flex;
        flex-direction: column-reverse;
        padding: 1em;
  
        flex: 2;
        .info-section-info {
          .Primary-info {
            font-size: 4rem;
            font-weight: 800;
            color: $color-tertiary1;
          }
          .secondary-info {
            font-size: 2rem;
            color: $color-tertiary2;
            font-weight: 400;
          }
        }
        .info-section-svg {
          flex: 1;
        }
      }
      .cards-wrapper {
        margin-top: 4em;
        display: flex;
        justify-content: space-evenly;
      }
  
      //see All button
      .seeAll-btn {
        display: none;
      }
      //mobile
      .sidenav-sm-container {
        background: $color-primary1;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        fill: $color-primary2;
        padding: 1em;
        position: fixed;
        width: 100vw;
        bottom: 0;
        -webkit-box-shadow: 0px -11px 8px 0px rgba(0, 0, 0, 0.21);
        box-shadow: 0px -11px 8px 0px rgba(0, 0, 0, 0.21);
      }
    }
  }
  
  `
}
</style>

export default LandingPage;
