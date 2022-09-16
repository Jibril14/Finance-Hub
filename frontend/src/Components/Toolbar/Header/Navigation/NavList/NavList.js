import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const NavList = (props) => (
    <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "block" }
        }}
    >
        {props.children}
    </Typography>
);

NavList.propTypes = {
    children: PropTypes.string.isRequired
};

export default NavList;
