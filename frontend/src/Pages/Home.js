import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initPosts } from "../store/actions/posts";
import CardUi from "../Components/Ui/CardUi/CardUi";
import { Grid } from "@mui/material";
import GridLayout from "../Components/Ui/GridLayout/GridLayout";
import SideBar from "../Components/Ui/SideBar/Sidebar";
import Spinner from "../Components/Ui/Spinner/Spinner";
import Error from "../Components/Ui/Error/Error";

function Home() {
    const dispatch = useDispatch();
    const onInitPost = useCallback(() => dispatch(initPosts()), [dispatch]);

    const allPost = useSelector((state) => {
        return state.posts;
    });

    const { posts, loading, error } = allPost

    //console.log("ALLPost", allPost.posts); logging the data from store

    useEffect(() => {
        onInitPost();

    }, [onInitPost]);



    let myPosts = (
        posts.map((post) => (
            <GridLayout style={{ background: "#fff" }} key={post.slug}>
                <CardUi image={post.photo1} category={post.category} title={post.title} />
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
            <Grid container column={12} >
                <Grid container xs={12} sm={12} md={9} lg={9} xl={10} rowSpacing="0" columnSpacing="7">
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
        </>
    );
}

export default Home;
