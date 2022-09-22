import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import posts from "./reducers/posts";

export const store = configureStore(
    {
        reducer: {
            posts: posts
        }
    },
    applyMiddleware(thunk)
);
