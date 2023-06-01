import * as React from "react";
import "../style/HomePage.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import IconButton from "@mui/material/IconButton";
import NavBar from "../component/Navbar";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current slide index

  // Define an array of images to display
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1514905552197-0610a4d8fd73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1605429523419-d828acb941d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1590342823852-2ab98729f250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1561088582-5e4f2cd41a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1808&q=80",
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

  let navigate = useNavigate();
  const handleClick = (destination) => {
    navigate(destination);
  };

  return (
    <div className="body">
      <NavBar />
      <div class="Homepage">
        <div className="paddingPageF">
          <div className="marginpage">
            <br />
            {/* slideshow */}
            <div class="slideshow-containerHP">
              {/* Render the current slide */}
              <img
                className="slide-imageHP"
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

            <br />
            {/* Highlight exhibition cards */}
            <h3 className="highlightTopicHP">Highlight of the week</h3>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              pt={1}
            >
              <Grid container spacing={6}>
                <Grid item sm={6} md={4}>
                  <Card id="CardHP" sx={{ maxWidth: 350 }}>
                    <CardActionArea>
                      <a
                        className="highlightCardLinkHP"
                        onClick={() => handleClick("/highlightInfo")}
                      >
                        <CardMedia
                          component="img"
                          height="250"
                          image="https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                          alt="Exhibition"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            Luciana Matalon at the Genoa Boat Show
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            22 April, 2023 <br />
                            From 22 to 27 April 2023 it will take part in the
                            opening of the V Edition of the Vip Lounge area at
                            the 62nd
                          </Typography>
                        </CardContent>
                      </a>
                    </CardActionArea>
                  </Card>
                </Grid>

                <Grid item sm={6} md={4}>
                  <Card sx={{ maxWidth: 350 }}>
                    <CardActionArea>
                      <a
                        className="highlightCardLinkHP"
                        onClick={() => handleClick("/highlightInfo")}
                      >
                        <CardMedia
                          component="img"
                          height="250"
                          image="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80"
                          alt="Exhibition"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            Japanese show by Asian Studies Group Milan
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            24 April, 2023 <br />
                            An artistic project by edited by Asian Studies Group
                            Milan, Luciana Matalon Foundation, from 10:15
                            onward.
                          </Typography>
                        </CardContent>
                      </a>
                    </CardActionArea>
                  </Card>
                </Grid>

                <Grid item sm={6} md={4}>
                  <Card sx={{ maxWidth: 350 }}>
                    <CardActionArea>
                      <a
                        className="highlightCardLinkHP"
                        onClick={() => handleClick("/highlightInfo")}
                      >
                        <CardMedia
                          component="img"
                          height="250"
                          image="https://images.unsplash.com/photo-1577049092056-1578d3fc65e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                          alt="Exhibition"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                            ONIRONAUTICS show by Nello Taiettifrom
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            5 April, 2023 <br />
                            an artistic project by Nello Taiettifrom 5 to 27
                            April 2023 it will take part in the opening of the V
                            Edition
                          </Typography>
                        </CardContent>
                      </a>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <br />

            {/* Events section */}
            <h3 className="eventTopicHP">Exhibition</h3>
            <Box className="eventContainerHP">
              <div className="eventPreveiew1stHP">
                <h5
                  style={{
                    fontSize: "1rem",
                    fontWeight: "lighter",
                    marginLeft: "2vh",
                  }}
                >
                  09 May 2023 <br />- 20 July 2023
                </h5>

                <img
                  className="eventPictureHP"
                  src="https://images.unsplash.com/photo-1608371945786-d47d3cdd31da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="event"
                />

                <div className="eventContentHP">
                  <h5
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      marginLeft: "6vh",
                    }}
                  >
                    The exhibition "Art-Thai-Time" visits Bhirasri Art Center{" "}
                    <br />- Corrado Feroci (Sillap Bhirasri) 100-year project to
                    Siam
                  </h5>
                  <h5
                    style={{
                      fontSize: "1rem",
                      fontWeight: "lighter",
                      marginLeft: "6vh",
                    }}
                  >
                    Organized by Bangkok Art and Culture Center in collaboration
                    <br />
                    with Bhirasri Art Center Foundation and Silpakorn University
                  </h5>
                </div>
                <button
                  className="eventButtonHP"
                  onClick={() => handleClick("/exhibition")}
                >
                  See All
                </button>
              </div>
              <br />
              <hr />
              <br />
              <div className="eventPreveiew2ndHP">
                <h5
                  style={{
                    fontSize: "1rem",
                    fontWeight: "lighter",
                    marginLeft: "2vh",
                  }}
                >
                  28 April 2023 <br />- 15 May 2023
                </h5>

                <img
                  className="eventPictureHP"
                  src="https://images.unsplash.com/photo-1580136579585-48a5311ee2f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1608&q=80"
                  alt="event"
                />

                <div className="eventContentHP">
                  <h5
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      marginLeft: "6vh",
                    }}
                  >
                    Mandala art activity for the development of <br />
                    concentration and concentration
                  </h5>
                  <h5
                    style={{
                      fontSize: "1rem",
                      fontWeight: "lighter",
                      marginLeft: "6vh",
                    }}
                  >
                    by the Education Department, Bangkok Art and Culture Center
                    in collaboration
                    <br />
                    with the Department of Art Education, Faculty of Education,{" "}
                    <br />
                    Bansomdejchaopraya Rajabhat University
                  </h5>
                </div>
                <button
                  className="eventButtonHP"
                  onClick={() => handleClick("/exhibition")}
                >
                  See All
                </button>
              </div>
            </Box>
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

export default HomePage;
