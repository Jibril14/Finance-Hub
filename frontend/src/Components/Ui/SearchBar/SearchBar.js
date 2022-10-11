import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
    }
    //[theme.breakpoints.down("780")]: {
    // down below 780 use this style
    //  display: (props) => (props.open ? "block" : "none")
    //}
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch"
            }
        }
    }
}));

export const SearchBar = (props) => {
    const navigate = useNavigate()
    const location = useLocation()

    const [keyword, setKeyword] = useState("")

    const handleSearchBar = () => {
        if (keyword)
        {

            navigate(`/?keyword=${keyword}`);
        }
    }
    return (
        <Search
            style={{
                display: props.open ? "block" : "none"
            }}
        >
            <div style={{ background: "cyan" }} onClick={handleSearchBar}>Btn
                <SearchIconWrapper >
                    <SearchIcon />
                </SearchIconWrapper>
            </div>
            <StyledInputBase
                onChange={(e) => setKeyword(e.target.value)}
                label="comment"
                value={keyword}
                type="search"
                fullWidth
                required
                placeholder="Start Search…"
                inputProps={{ "aria-label": "search" }}
            />
        </Search>
    );
};
