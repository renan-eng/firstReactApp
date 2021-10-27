import React, { useEffect, useContext, useState } from "react";
import Page from "./Page";
import { useParams } from "react-router-dom";
import Axios from "axios";
import StateContext from "../StateContext";
import ProfilePosts from "./ProfilePosts";

function Profile() {
  const { username } = useParams();
  const appState = useContext(StateContext);
  const [profileData, setProfileData] = useState({
    profileUsername: "",
    profileAvatar: "https://gravatar.com/avatar/placeholder?s=128",
    isFollowing: false,
    counts: { postCount: "", followerCount: "", followingCount: "" }
  });

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();

    async function fetchData() {
      try {
        const response = await Axios.post(`/profile/${username}`, { token: appState.user.token }, {cancelToken: ourRequest.token});
        setProfileData(response.data);
      } catch (e) {
        console.log("There was a problem.");
      }
    }
    fetchData();
    return () => {
      ourRequest.cancel()
    };
  }, []); // [] => só vai rodar essa função uma única vez quando esse componente for renderizado

  return (
    <Page title="Profile Screen">
      <h2>
        <img className="avatar-small" src={profileData.profileAvatar} /> {profileData.profileUsername}
        <button className="btn btn-primary btn-sm ml-2">
          Seguir <i className="fas fa-user-plus"></i>
        </button>
      </h2>

      <div className="profile-nav nav nav-tabs pt-2 mb-4">
        <a href="#" className="active nav-item nav-link">
          Posts: {profileData.counts.postCount}
        </a>
        <a href="#" className="nav-item nav-link">
          Seguidores: {profileData.counts.followerCount}
        </a>
        <a href="#" className="nav-item nav-link">
          Seguindo: {profileData.counts.followingCount}
        </a>
      </div>

      <ProfilePosts />
    </Page>
  );
}

export default Profile;
