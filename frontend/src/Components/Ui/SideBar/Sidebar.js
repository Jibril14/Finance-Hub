import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
//import LatestIcon from "@mui/icons-material/AccessibilitySharp";
//import TrendingIcon from "@mui/icons-material/ArrowOutwardSharp";
//import { Avatar } from "@mui/material";
import SidebarData from "./SideBarData";


const SideBar = (props) => {

    const [value, setValue] = useState(0);
    const [categoryState, setCategoryState] = useState("?recent_posts=6");

    let catagoryType = "?recent_posts=6"
    const CategoryHandler = (e, newValue) => {
        setValue(newValue);

        if (newValue == 0)
        {
            setCategoryState("?recent_posts=6")

        }
        if (newValue == 1)
        {
            setCategoryState("?post_category=sport")
        }
        if (newValue == 2)
        {
            setCategoryState("?popular_posts=20")

        }


        //console.log("Categorytype", cati);
    };



    return (

        <div>
            <Tabs
                textColor="inherit"
                value={value}
                onChange={CategoryHandler}
                // onChange={(e, newValue) => setValue(newValue)}
                indicatorColor="secondary"
            >
                {/*<Tab component={Link} to="/order" label="Business" /> */}

                <Tab label="Latest" />
                {/* <Avatar
                style={{ color: "#000", background: "#fff", fontSize: "7px" }}
            >
                <TrendingIcon />
            </Avatar>*/}
                <Tab label="Trending" />

                <Tab label="Hot" />
            </Tabs>

            <SidebarData query={categoryState} /> {/*some props require value that is constanly changing eg values from input, ensure you manage a state here. if you set the value directly or depend on some other function to run and change it, it would not work cus once component load first and props grab values it would no change, even if the value later =another thing, this is how react works components rerender only when state change */}
        </div>
    );
};

export default SideBar;
