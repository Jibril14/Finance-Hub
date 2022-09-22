import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../Components/Ui/Post/Post";
import { initPosts } from "../store/actions/posts";
import axios from "axios";

function Home() {
    const dispatch = useDispatch();
    const onInitPost = () => dispatch(initPosts());

    const allPost = useSelector((state) => {
        return state.posts.posts;
    });

    console.log("AppPost", allPost); //logging the data from store
    useEffect(() => {
        onInitPost();
    }, []);

    return (
        <>
            <Post />
        </>
    );
}

export default Home;
