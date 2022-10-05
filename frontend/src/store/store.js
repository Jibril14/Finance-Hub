import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import posts from "./reducers/posts";
import postsCategory from "./reducers/postsCategory";
import user from "./reducers/users"

export const store = configureStore(
    {
        reducer: {
            posts: posts,
            postsCategory: postsCategory,
            auth: user
        }
    },
    applyMiddleware(thunk)
);
