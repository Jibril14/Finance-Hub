import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchPostCategoryStart = () => {
    return {
        type: actionTypes.FETCH_POSTS_BY_CATEGORY_START
    };
};
export const postsByCategory = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS_BY_CATEGORY_SUCCESS,
        posts: posts
    };
};

export const fetchPostError = (err) => {
    return {
        type: actionTypes.FETCH_POSTS_BY_CATEGORY_FAIL,
        err: err
    };
};

export const fetchPostsCategory = (queryCategory) => {
    
    return (dispatch) => {
        dispatch(fetchPostCategoryStart())
        axios
            .get(`http://127.0.0.1:8000/api/v1/posts/${queryCategory}`)
            .then((response) => {
                dispatch(postsByCategory(response.data.results));
            })
       
            .catch((error) => {
                //console.log("error", error);
                dispatch(fetchPostError(error.message));
            });
           
    };
};
