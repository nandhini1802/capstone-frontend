//* Packages Imports */
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//* Components Imports */
import Navbar from "components/Navbar";
import FriendListWidget from "components/FriendListWidget";
import MyPostWidget from "components/MyPostWidget";
import PostsWidget from "components/PostsWidget";
import UserWidget from "components/UserWidget";

const ProfilePage = () => {
  const { userId } = useParams();
  const theme = useTheme();
  const token = useSelector((state) => state.token);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [user, setUser] = useState(null);

  //* Get User Data */
  const getUser = async () => {
    const response = await fetch(`https://twittrify-backend.onrender.com/api/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    console.log(data)
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isDesktop ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isDesktop ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <FriendListWidget userId={userId} />
        </Box>
        <Box
          flexBasis={isDesktop ? "42%" : undefined}
          mt={isDesktop ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <PostsWidget userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
