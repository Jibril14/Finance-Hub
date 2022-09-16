import PropTypes from "prop-types";
import classes from "./SideDrawer.module.css";
import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";

const SideDrawer = ({ open, children }) => {
    return (
        <Drawer open={open} className={classes.Drawer}>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>{children}</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
    );
};

SideDrawer.propTypes = {
    children: PropTypes.string,
    open: PropTypes.bool
};

export default SideDrawer;
