import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "center",
      }}
    >
      <Link to="/" className="navlink">
        Home
      </Link>
      <Link to="/about" className="navlink">
        About
      </Link>
    </Stack>
  );
};

export default Navbar;
