import classes from "./Mobile.module.css";
import ToggleBtn from "../../../Ui/ToggleBtn/ToggleBtn";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { SearchBar } from "../../../Ui/SearchBar/SearchBar";
import Button from "../../../Ui/Button/Button";
import React, { useState } from "react";
import SideDrawer from "../SideDrawer/SideDrawer";
import Search from "@mui/icons-material/Search";

function Mobile() {
    const [open, setOpen] = useState(false);
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const ToggleSideDrawer = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.Mobile}>
            <AppBar sx={{ backgroundColor: "#4831DA" }}>
                <Toolbar className={classes.Toolbar}>
                    <Typography variant="h6">Finance Hub</Typography>
                    <div className={classes.Container}>
                        <div className={classes.BtnContainer}>
                            {/* <Button variant="contained" size="small">
                               <h5 style={{ margin: "0" }}> Sign Up</h5>  </Button>*/}

                            <Button variant="contained" size="small">
                                <Typography variant="h8" sx={{ margin: "0" }}>
                                    Log In
                                </Typography>
                            </Button>
                            <Search
                                onClick={() => setOpenSearchBar(!openSearchBar)}
                            />
                        </div>
                        <SideDrawer open={open}>home</SideDrawer>
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
