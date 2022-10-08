import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { postDetail } from "../store/actions/posts";
import classes from "./Detail.module.css";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Ui/Spinner/Spinner";

function Detail() {

    let { id } = useParams()

    const dispatch = useDispatch()
    const { loading, error, detailPost } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(postDetail(id))
    }, [id])



    return (
        <div>
            <h2>{detailPost.title}</h2>
            <div className={classes.profileDetail}>
                <div className={classes.profileImage}>
                    <img src="../../../../Assets/sample.png" />
                </div>
                <div>
                    <h4 style={{ margin: "4px 4px" }}>
                        Written by {detailPost.author}
                    </h4>
                    <h5 style={{ margin: "2px 4px" }}>Software Engineer</h5>
                </div>
            </div>
            <div>
                <h4>
                    {detailPost.category}
                </h4>
                <img src={detailPost.photo1} />
                <p>{detailPost.content}</p>
            </div>
            {loading && <Spinner />}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default Detail;
