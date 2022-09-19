import React, { useState } from "react";
import classes from "./Desktop.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "../../../Ui/Button/Button";
import { SearchBar } from "../../../Ui/SearchBar/SearchBar";
import Rectangle from "../Rectangle/Rectangle";
import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";

export default function Desktop() {
    const date = new Date();
    const [value, setValue] = useState(0);

    return (
        <div className={classes.Desk}>
            <Rectangle bcolor="gray" height="40px" padding="0 7px">
                <p>{date.toDateString()}</p>
            </Rectangle>
            <div className={classes.Desktop}>
                <div>
                    <h3 style={{ marginBottom: "3px" }}>
                        <Link to="/"> Finance Hub</Link>
                    </h3>
                    <p style={{ marginTop: "0" }}>Your home of finance</p>
                </div>
                <Rectangle bcolor="red" width="400px" height="40px"></Rectangle>
                <div>
                    <Link to="/register">
                        <Button variant="contained" style={{ color: "#fff" }}>
                            Sign Up
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button variant="contained">Log In</Button>
                    </Link>
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
                                value={value}
                                onChange={(e, newValue) => setValue(newValue)}
                                indicatorColor="secondary"
                            >
                                <Tab component={Link} to="/" label="Home" />
                                <Tab
                                    component={Link}
                                    to="/order"
                                    label="Business"
                                />
                                <Tab
                                    component={Link}
                                    to="/default"
                                    label="Finance"
                                />
                                <Tab component={Link} to="/" label="Tech" />
                                <Tab component={Link} to="/" label="Market" />
                                <Tab component={Link} to="/" label="Sport" />
                                <Tab component={Link} to="/" label="Music" />
                                <Tab
                                    component={Link}
                                    to="/"
                                    label="Economics"
                                />
                                <Tab component={Link} to="/" label="News" />
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
