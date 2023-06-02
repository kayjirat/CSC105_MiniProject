import React, { useState, useContext } from "react";
import NavBar from "../component/Navbar";
import { Typography } from "@mui/material";
import { useParams,useNavigate } from "react-router-dom";
import "../style/Profile.css";
import Axios from "../AxiosInstance";
import getCookie from "../util/getCookie";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { useEffect } from "react";

function Profile(params) {
  let navigate = useNavigate();
  const handleClick = (destination) => {
    if (destination === "/") {
      // Clear all cookies
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
      });
    }
    navigate(destination);
  };
  const [userData, setUserData] = useState([]);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const fetchUser = async (e) => {
    try {
      const response = await Axios.get(
        `http://localhost:4000/user/${getCookie("userId")}`
      );
      if (response.data.success) {
        setUserData(response.data.user[0]);
        console.log("Debug => " + response.data.user[0]);
        console.log(userData);
      } else {
        // Handle error response
        console.log(response.data.message);
      }
    } catch (error) {
      // Handle network or server error
      console.error("Error fetching user data:", error);
    }
  };

  const handleOpenLogoutModal = () => {
    setLogoutModalOpen(true);
  };

  const handleCloseLogoutModal = () => {
    setLogoutModalOpen(false);
  };

  useEffect(() => {
    // Fetch  data when the component mounts
    fetchUser();
  }, []);

  const handleDelete = async () => {
    try {
      await Axios.delete(`http://localhost:4000/user?userId=${getCookie("userId")}`);
      navigate("/login");
    } catch (error) {
      console.error("Error deleting user account:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="bodyProfile">
        <Typography
          className="profileTopic"
          component="h1"
          variant="h4"
          sx={{
            fontFamily: "Lora , serif",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Profile
        </Typography>
        <div className="centeredContainer">
          <div className="containerLargest">
            <div className="profileContainer">
              <h5
                className="profileInfoTopic"
                style={{ fontFamily: "Lora , serif" }}
              >
                Username
              </h5>
              <Typography sx={{ fontFamily: "Archivo" }}>
                {userData.username}
              </Typography>
              <br />
              <h5
                className="profileInfoTopic"
                style={{ fontFamily: "Lora , serif" }}
              >
                Email
              </h5>
              <Typography sx={{ fontFamily: "Archivo" }}>
                {userData.email}
              </Typography>
              <br />
              <h5
                className="profileInfoTopic"
                style={{ fontFamily: "Lora , serif" }}
              >
                Bio
              </h5>
              <Typography sx={{ fontFamily: "Archivo" }}>
                {userData.bio}
              </Typography>
              <br />
            </div>
            <div className="ButtonContainer">
              <button
                className="buttonEdit"
                onClick={() => handleClick("/editprofile")}
                style={{ marginRight: "5rem" }}
              >
                Edit
              </button>
              <button
                className="buttonLogout"
                onClick={handleOpenLogoutModal}
                style={{ marginLeft: "5rem" }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <button
          className="buttondelete"
          style={{ marginTop: "15px", width: "200px" }}
          variant="contained"
          color="error"
          onClick={handleDelete}
        >
          Delete Account
        </button>
      </div>
      <Dialog open={logoutModalOpen} onClose={handleCloseLogoutModal}>
        <DialogTitle sx={{ fontFamily: "Lora , serif", fontWeight: "800" }}>
          Do you want to logout ?
        </DialogTitle>
        <DialogActions>
          <div>
            <button
              className="buttonProfileCancel"
              onClick={handleCloseLogoutModal}
            >
              Cancel
            </button>
            <button
              style={{ marginLeft: "50px" }}
              className="buttonProfileLogout"
              onClick={() => handleClick("/login")}
            >
              Logout
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Profile;
