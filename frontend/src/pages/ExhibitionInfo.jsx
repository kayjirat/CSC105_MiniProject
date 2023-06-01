import * as React from "react";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import "../style/ExhibitionInfo.css";
import NavBar from "../component/Navbar";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";

function ExhibitionInfo() {
  //slideshow
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current slide index

  // Define an array of images to display
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1526202989235-a7a07716e081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2058&q=80",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1469510038946-6bf892bbe9d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
  ];

  // Define a function to handle the next button click
  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  // Define a function to handle the previous button click
  const handlePrevClick = () => {
    const prevIndex = (currentIndex + images.length - 1) % images.length;
    setCurrentIndex(prevIndex);
  };

  //navigate back to event
  let navigate = useNavigate();
  const handleClick = (destination) => {
    navigate(destination);
  };

  return (
    <div className="bodyEI">
      <NavBar />
      <div class="EventInfoPage">
        <div className="paddingPageF">
          <div className="marginpage">
            <br />
            {/* // topic */}
            <h2 className="EventInfoTopicEIP">
              The exhibition "Art-Thai-Time" visits Bhirasri Art Center <br />-
              Corrado Feroci (Sillap Bhirasri) 100-year project to Siam.
            </h2>
            <br />
            {/* //small slide show */}
            <div className="slideAndTextEIP">
              <div class="slideshow-containerEIP">
                {/* Render the current slide */}
                <img
                  className="slide-imageEIP"
                  src={images[currentIndex].url}
                  alt={`Slide ${currentIndex + 1}`}
                />
                {/* Render the navigation buttons */}
                <button className="prev-button" onClick={handlePrevClick}>
                  &#10094;
                </button>
                <button className="next-button" onClick={handleNextClick}>
                  &#10095;
                </button>
              </div>

              {/* //date, location, time */}

              <div className="EventInfoContentEIP">
                <h5 style={{ fontSize: "1rem", fontWeight: "bold" }}>Date:</h5>
                <h5 style={{ fontSize: "1rem", fontWeight: "lighter" }}>
                  09 May 2023 - 20 August 2023
                </h5>
                <h5 style={{ fontSize: "1rem", fontWeight: "bold" }}>
                  Location:
                </h5>
                <h5 style={{ fontSize: "1rem", fontWeight: "lighter" }}>
                  Main Exhibition Room, 8th floor, Bangkok Art and Culture
                  Center
                </h5>
                <h5 style={{ fontSize: "1rem", fontWeight: "bold" }}>Price:</h5>
                <h5 style={{ fontSize: "1rem", fontWeight: "lighter" }}>
                  Free
                </h5>
              </div>
            </div>
            <br />
            {/* //information */}
            <div className="EventInfoEIP">
              <p>
                Date : 09 May 2023 - 20 August 2023Location: Main Exhibition
                Room, 8th floor
                <br />
                Organized by Bangkok Art and Culture Center in collaboration
                with Bhirasri Art Center Foundation and Silpakorn UniversityMain
                Sponsor: Thai Beverage Public Company LimitedProject Sponsor:
                Film Archive (Public Organization) and National Archives, Fine
                Arts DepartmentOpening Ceremony on Thursday 18 May 2023 at 4:00
                p.m. 8th floor, Bangkok Art and Culture Center
              </p>
              <p>
                Lead curator : Chatwichai Phromdattawedi Curatorteam : Namthong
                Saetang, Paisarn Thiraphongwitsanuporn, Sitthitham Rohitasuk and
                Narongsak Nilkhet
              </p>
              <p>
                “Art Gallery Bhirasri” arose from the intention and vision of
                Professor Silpa Bhirasri (15 September 1892 – 14 May 1962), one
                of Thailand's precursors who made significant contributions to
                modern art. The creator of many works until nowadays He is also
                the founder and art teacher at the Fine Arts School. which was
                later upgraded to Silpakorn University He was the first Dean of
                the Faculty of Painting, Sculpture and Graphic Arts. In an era
                when Thailand still lacks art promotion And lack of a place to
                display art works called "art galleries" Professor Silpa
                Bhirasri has initiated an art gallery project. But he passed
                away before the art gallery was built. However, the project has
                been continued by a group of patrons and art lovers who jointly
                established "Bhirasri Art Gallery Foundation" to raise funds and
                build a modern art center. and a memorial to Professor Silpa
                Bhirasri, opened in 1974
              </p>
              <p>
                1974 - 1988 exhibited art exhibitions Including stage plays,
                movies, music and other performances. a large number of
                continuous From traditional art exhibitions to modern new styles
                by world-class artists and Thai artists, from senior artists to
                the new generation of artists at that time. As a result, the
                area has great significance as the first public art gallery. It
                also has status as an innovative modern art institute that
                creates movement for wider society and events. held at the
                Bhirasri Art Gallery reflected the state of Thai society in the
                context of the transitional era. and create a continuation of
                art in society that has been inherited until the present It was
                a model for public art galleries in later eras. especially the
                Bangkok Art and Culture Center And the exhibition also gives
                viewers an opportunity to see the important role of public art
                galleries that have been continuously developed. When looking
                back from the intentions and ideology of Professor Silpa
                Bhirasri to the present
              </p>
              <p>
                The exhibition to be held is a collection of archive information
                about Bhirasri Art Gallery. It also includes information about
                music and drama events as well. It also looks at the role of the
                network who pushes and promotes the arts. Art Patrons, for
                example, can create art galleries. including the role of foreign
                cultural institutions that have supported contemporary art
                activities throughout the ages
              </p>
              <p>
                1974 - 1988 exhibited art exhibitions Including stage plays,
                movies, music and other performances. a large number of
                continuous From traditional art exhibitions to modern new styles
                by world-class artists and Thai artists, from senior artists to
                the new generation of artists at that time. As a result, the
                area has great significance as the first public art gallery. It
                also has status as an innovative modern art institute that
                creates movement for wider society and events. held at the
                Bhirasri Art Gallery reflected the state of Thai society in the
                context of the transitional era. and create a continuation of
                art in society that has been inherited until the present It was
                a model for public art galleries in later eras. especially the
                Bangkok Art and Culture Center And the exhibition also gives
                viewers an opportunity to see the important role of public art
                galleries that have been continuously developed. When looking
                back from the intentions and ideology of Professor Silpa
                Bhirasri to the present
              </p>
              <p>
                1974 - 1988 exhibited art exhibitions Including stage plays,
                movies, music and other performances. a large number of
                continuous From traditional art exhibitions to modern new styles
                by world-class artists and Thai artists, from senior artists to
                the new generation of artists at that time. As a result, the
                area has great significance as the first public art gallery. It
                also has status as an innovative modern art institute that
                creates movement for wider society and events. held at the
                Bhirasri Art Gallery reflected the state of Thai society in the
                context of the transitional era. and create a continuation of
                art in society that has been inherited until the present It was
                a model for public art galleries in later eras. especially the
                Bangkok Art and Culture Center And the exhibition also gives
                viewers an opportunity to see the important role of public art
                galleries that have been continuously developed. When looking
                back from the intentions and ideology of Professor Silpa
                Bhirasri to the present
              </p>
              <br />
              <br />
              <br />
            </div>

            {/* //button */}
            <button
              className="EventInfoButtonEIP"
              onClick={() => handleClick("/exhibition")}
            >
              <IconButton>
                <ArrowBackIosIcon />
              </IconButton>
              Back
            </button>
          </div>
          {/* Footer */}
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExhibitionInfo;
