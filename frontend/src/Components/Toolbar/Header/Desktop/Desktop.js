import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import classes from "./Desktop.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "../../../Ui/Button/Button";
import { SearchBar } from "../../../Ui/SearchBar/SearchBar";
import Rectangle from "../Rectangle/Rectangle";
import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import UserLoginIcon from "@mui/icons-material/AccountCircleOutlined"
import { logOut } from "../../../../store/actions/users";


export default function Desktop() {
    const date = new Date();
    const [value, setValue] = useState(0);

    const dispatch = useDispatch()
    const { login, loginSuccess } = useSelector((state) => state.auth)

    const logOutHandler = () => {
        dispatch(logOut())
    }
    useEffect(() => {

    }, [login, loginSuccess])

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
                    {login ?
                        <div className={classes.IconContainer}>
                            <Avatar style={{ backgroundColor: "#007FFF", color: "#fff" }}>
                                <UserLoginIcon />
                            </Avatar>
                            <Button variant="contained" click={logOutHandler}>Log out</Button>
                        </div>
                        :
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
                    }


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
                                    to="/category/business"
                                    label="Business"
                                />
                                <Tab
                                    component={Link}
                                    to="/category/finance"
                                    label="Finance"
                                />
                                <Tab component={Link} to="/category/tech" label="Tech" />
                                <Tab component={Link} to="/category/market" label="Market" />
                                <Tab component={Link} to="/category/sport" label="Sport" />
                                <Tab component={Link} to="/category/music" label="Music" />
                                <Tab
                                    component={Link}
                                    to="/category/economic"
                                    label="Economics"
                                />
                                <Tab component={Link} to="/category/news" label="News" />
                            </Tabs>
                        </div>

                        <div>
                            <SearchBar open />
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </div >
    );
}