import classes from "./Mobile.module.css";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { SearchBar } from "../../../Ui/SearchBar/SearchBar";
import ToggleBtn from "../../../Ui/ToggleBtn/ToggleBtn";
import Button from "../../../Ui/Button/Button";
import React, { useState } from "react";
import SideDrawer from "../SideDrawer/SideDrawer";
import Search from "@mui/icons-material/Search";

function Mobile() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const ToggleSideDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <div className={classes.Mobile}>
            <AppBar sx={{ backgroundColor: "#4831DA" }}>
                <Toolbar className={classes.Toolbar}>
                    <Link to="/">
                        <Typography variant="h6" color="#fff">
                            Finance Hub
                        </Typography>
                    </Link>
                    <div className={classes.Container}>
                        <div className={classes.BtnContainer}>
                            {/* <Button variant="contained" size="small">
                               <h5 style={{ margin: "0" }}> Sign Up</h5>  </Button>*/}
                            <Link to="/login">
                                <Button variant="contained" size="small">
                                    <Typography
                                        variant="h8"
                                        sx={{ margin: "0" }}
                                    >
                                        Log In
                                    </Typography>
                                </Button>
                            </Link>
                            <Search
                                onClick={() => setOpenSearchBar(!openSearchBar)}
                            />
                        </div>
                        <SideDrawer
                            open={openDrawer}
                            onClose={() => setOpenDrawer(false)}
                            Change={() => setOpenDrawer(!openDrawer)}
                        ></SideDrawer>

                        <ToggleBtn clicked={ToggleSideDrawer} />
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.MobileSearch}>
                <SearchBar open={openSearchBar} />
            </div>
        </div>
    );
}

export default Mobile;
