//* Packages Imports */
import Box from "@mui/material/Box";

const UserImage = ({ image, size = "60px" }) => (
  <Box width={size} height={size}>
    <img
      style={{ objectFit: "cover", borderRadius: "50%" }}
      width={size}
      height={size}
      alt="user"
      src={`https://twittrify-backend.onrender.com/assets/${image}`}
    />
  </Box>
);

export default UserImage;
