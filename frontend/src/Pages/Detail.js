import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { postDetail } from "../store/actions/posts";
import { createComment } from "../store/actions/comment";
import classes from "./Detail.module.css";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Ui/Spinner/Spinner";
import CommentForm from "../Components/Ui/CommentForm/CommentForm";

function Detail() {

    let { id } = useParams()

    const dispatch = useDispatch()
    const { loading, error, detailPost } = useSelector((state) => state.posts)
    const { loadingComment, comment } = useSelector((state) => state.comment)

    useEffect(() => {
        dispatch(postDetail(id))
    }, [id, dispatch, comment])

    const AddComment = (comment) => {
        dispatch(createComment(id, comment))
    }

    return (
        <div>
            <h2>{detailPost.title}</h2>
            <div className={classes.profileDetail}>
                <div className={classes.profileImage}>
                    <img src="../../../../Assets/sample.png" alt="detail" />
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

            {detailPost.comments ? detailPost.comments.map((comment) => (
                <div key={comment.id} className={classes.CommentBox}>


                    <div className={classes.profileImage}>
                        <img src="../../../../Assets/sample.png" />
                    </div>
                    <div>
                        <div className={classes.CommenterName}>
                            <div><h4 style={{ margin: "0" }}>Adio Samuel</h4></div>
                            <div style={{ marginLeft: "7px" }}>{new Date().getDay()}d</div>
                        </div>

                        <p style={{ margin: "5px 4px" }}>{comment.text}</p>

                    </div>
                </div>
            )) : null}

            <div className={classes.MessageBox}>
                <CommentForm onAddComment={AddComment} />
            </div>
            {loading && <Spinner />}
            {loadingComment && <Spinner />}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default Detail;
