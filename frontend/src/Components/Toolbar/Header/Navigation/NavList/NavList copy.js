import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const NavList = (children) => (
    <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" }
        }}
    >
        {children}
    </Typography>
);

NavList.propTypes = {
    children: PropTypes.string
};

export default NavList;
