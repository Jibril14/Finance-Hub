import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { initPosts } from "../store/actions/posts";
import CardUi from "../Components/Ui/CardUi/CardUi";
import { Grid } from "@mui/material";
import GridLayout from "../Components/Ui/GridLayout/GridLayout";
import SideBar from "../Components/Ui/SideBar/Sidebar";
import Spinner from "../Components/Ui/Spinner/Spinner";
import Error from "../Components/Ui/Error/Error";
import Paginate from "../Components/Ui/Pagination/Pagination";


function Home() {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch();
    const onInitPost = useCallback(() => dispatch(initPosts(location.search)),
        [dispatch, location.search]);

    const allPost = useSelector((state) => {
        return state.posts;
    });

    const { posts, loading, error, count, next, previous } = allPost
    const Per_Page = 2


    const handlePageClick = (e, val) => {
        navigate(`/?page=${val}`)
    }

    let Count
    if (next)
    {
        Count = Math.ceil(count / Per_Page)
    }

    useEffect(() => {
        onInitPost();
    }, [onInitPost, location.search]);


    let myPosts = (
        posts.map((post) => (
            <GridLayout style={{ background: "#fff" }} key={post.slug}>
                <CardUi url={`/post/${post.slug}`} image={post.photo1} category={post.category} title={post.title} />
            </GridLayout>
        ))
    )
    if (loading)
    {
        myPosts = <Spinner />
    }

    const showErr = error ? true : false
    return (
        <>
            {location.search.match("keyword") && <h3>Search Results</h3>}
            <Grid container column={12} >
                <Grid item container xs={12} sm={12} md={9} lg={9} xl={10} rowSpacing="0" columnSpacing="7">
                    {myPosts}

                    <Error showErr={showErr} error={error} />
                </Grid>
                <Grid item
                    xs={12}
                    sm={12}
                    md={3}
                    lg={2.9} // 1.9+1 act like =2 but lg must nott b 2
                    xl={2}
                    sx={{ background: "cyan" }}

                >
                    <SideBar />

                </Grid>
            </Grid>
            <Paginate count={Count} change={handlePageClick} />
        </>
    );
}

export default Home;
