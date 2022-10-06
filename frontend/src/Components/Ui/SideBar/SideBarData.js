import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
//import {useQueryParam,  useNavigate } from "react-router-dom";

import { fetchPostsCategory } from "../../../store/actions/postsCategory";
import classes from "./Sidebar.module.css";

const SidebarData = (props) => {
    const dispatch = useDispatch();
    //const navigate = useNavigate();
    // let query = "?post_category=others";
    //console.log("Query", query);

    const categoryPost = useSelector((state) => {
        return state.postsCategory.posts;
    });
    //console.log("CatPost", categoryPost); //logging the data from store
    const query = props.query;
    useEffect(() => {
        dispatch(fetchPostsCategory(query));
    }, [query]);

    return (
        <>
            {categoryPost.map((post) => (
                <div key={post.slug} className={classes.Container}>
                    <div className={classes.ImageContainer}>
                        <img src={post.photo2} alt="financehub" />
                    </div>
                    <div className={classes.Content}>
                        <h5 className={classes.Category}>{post.category}</h5>
                        <h5 className={classes.Text}>{post.title}</h5>
                    </div>
                </div>
            ))}
        </>
    );
};
export default SidebarData;
