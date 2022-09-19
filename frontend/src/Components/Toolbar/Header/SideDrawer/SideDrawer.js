import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./SideDrawer.module.css";
import { Drawer } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";

const SideDrawer = ({ open, onClose, Change, children }) => {
    const [value, setValue] = useState(0);
    return (
        <Drawer open={open} onClose={onClose} className={classes.Drawer}>
            <Tabs
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
                indicatorColor="secondary"
                orientation="vertical"
                onClick={Change}
            >
                <Tab component={Link} to="/" label="Home" />
                <Tab component={Link} to="/order" label="Business" />
            </Tabs>
            {/*
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>{children}</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>

    */}
        </Drawer>
    );
};

SideDrawer.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.string
};

export default SideDrawer;
