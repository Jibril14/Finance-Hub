import * as actionTypes from "../actions/actionTypes";
//import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    loading: true,
    error: false
};
/**
  * 
  We Connect this file to the store ie  "import posts from "./reducers/posts"
 Step 1) Create this file,what do i want to do? Fetching of post, what
 could happen along side(state to manage, asynfetching..., error, succeess)

  */

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALL_POSTS_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_ALL_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts, //Post object from server
                loading: false
            };

        case actionTypes.FETCH_ALL_POST_FAIL:
            return {
                ...state,
                error: action.err, //Error message dispatch
                loading: false
            };

        default:
            return state;
    }
};

export default reducer;
