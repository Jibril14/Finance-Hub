import React from "react";
import classes from "./Desktop.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "../../../Ui/Button/Button";
import { SearchBar } from "../../../Ui/SearchBar/SearchBar";
import Rectangle from "../Rectangle/Rectangle";
import { Tab, Tabs } from "@mui/material";

export default function Desktop() {
    const date = new Date();
    return (
        <div className={classes.Desk}>
            <Rectangle bcolor="gray" height="40px">
                <p>{date.toString()}</p>
            </Rectangle>
            <div className={classes.Desktop}>
                <div>
                    <h3>
                        <a href="/"> Finance Hub</a>
                    </h3>
                    <p>Your home of finance</p>
                </div>
                <Rectangle bcolor="red" width="400px" height="40px"></Rectangle>
                <div>
                    <Button variant="contained">Sign Up</Button>
                    <Button disabled variant="contained">
                        Log In
                    </Button>
                </div>
            </div>
            <Box sx={{ flexGrow: 1, height: "100px" }}>
                <AppBar position="static">
                    <Toolbar
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <div>
                            <Tabs
                                textColor="inherit"
                                value={1}
                                indicatorColor="secondary"
                            >
                                <Tab label="Home"></Tab>
                                <Tab label="Business"></Tab>
                                <Tab label="Finance"></Tab>
                                <Tab label="Tech"></Tab>
                                <Tab label="Market"></Tab>
                                <Tab label="Sport"></Tab>
                                <Tab label="Music"></Tab>
                                <Tab label="Economics"></Tab>
                                <Tab label="News"></Tab>
                            </Tabs>
                        </div>

                        <div>
                            <SearchBar open />
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
