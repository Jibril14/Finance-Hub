import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//import {useQueryParam,  useNavigate } from "react-router-dom";

import { fetchPostsCategory } from "../../../store/actions/postsCategory";
import classes from "./Sidebar.module.css";

const SidebarData = (props) => {
    const dispatch = useDispatch();

    const categoryPost = useSelector((state) => {
        return state.postsCategory.posts.slice(0, 2)
    });

    const query = props.query;
    useEffect(() => {
        dispatch(fetchPostsCategory(query));
    }, [query]);

    return (
        <>
            {categoryPost.map((post) => (
                <Link to={`/post/${post.slug}`} key={post.slug}>
                    <div className={classes.Container}>
                        <div className={classes.ImageContainer}>
                            <img src={post.photo2} alt="financehub" />
                        </div>
                        <div className={classes.Content}>
                            <h5 className={classes.Category}>{post.category}</h5>
                            <h5 className={classes.Text}>{post.title}</h5>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
};
export default SidebarData;
