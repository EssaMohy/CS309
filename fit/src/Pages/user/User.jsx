import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";
import "./user.css";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { update } from "../../redux/apiCalls";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function User() {
  const user = useSelector((state) => state.user.currentUser);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    update(dispatch, { first_name, last_name, email }, user._id);
  };
  return (
    <div className="user">
      <Navbar />
      <div className="userTitleContainer">
        <h1 className="userTitle">User Profile</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://th.bing.com/th/id/OIP.CEXYZ181h14EC_bjLoO1EAHaHa?pid=ImgDet&w=1024&h=1024&rs=1"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">
                {user.first_name} {user.last_name}
              </span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">
                {user.first_name} {user.last_name}
              </span>
            </div>

            <span className="userShowTitle">Contact Details</span>

            <div className="userShowInfo">
              <MailOutlineIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearchingIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Cairo | Egypt</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="User Name"
                  className="userUpdateInput"
                  onChange={(e) => setFirst_name(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="User Name"
                  className="userUpdateInput"
                  onChange={(e) => setLast_name(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="example@gmail.com"
                  className="userUpdateInput"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Cairo | Egypt"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://th.bing.com/th/id/OIP.CEXYZ181h14EC_bjLoO1EAHaHa?pid=ImgDet&w=1024&h=1024&rs=1"
                  alt=""
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button
                className="btn "
                style={{ marginRight: "35px", marginBottom: "110px" }}
                onClick={handleClick}
              >
                Update{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
