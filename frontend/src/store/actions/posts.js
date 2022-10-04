import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchPostListStart = () => {
    return {
        type: actionTypes.FETCH_ALL_POSTS_START
    };
};
export const allPostList = (posts) => {
    return {
        type: actionTypes.FETCH_ALL_POSTS_SUCCESS,
        posts: posts
    };
};

export const fetchPostError = (err) => {
    return {
        type: actionTypes.FETCH_ALL_POST_FAIL,
        err: err
    };
};

export const initPosts = () => {

    return (dispatch) => {
        dispatch(fetchPostListStart())
        axios.get("/api/v1/posts/").then((response) => {
            dispatch(allPostList(response.data.results));
        })

            .catch((error) => {
                // console.log("error", error);
                dispatch(fetchPostError(error.message));
            });

    };
};
