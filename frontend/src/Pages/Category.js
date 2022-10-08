import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Category.module.css"
import { fetchPostsCategory } from "../store/actions/postsCategory";
import CardUi from "../Components/Ui/CardUi/CardUi";
import { Grid } from "@mui/material";
import GridLayout from "../Components/Ui/GridLayout/GridLayout";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Ui/Spinner/Spinner";
import Error from "../Components/Ui/Error/Error";

function Category(props) {
  const { id } = useParams()

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchPostsCategory(`?post_category=${id}`));

  }, [dispatch, id])


  const postCategory = useSelector((state) =>
    state.postsCategory
  )

  const { posts, loading, error } = postCategory

  let categoryPosts = (posts.map((post) => (
    <GridLayout style={{ background: "#fff" }} key={post.slug}>
      <CardUi url={`/post/${post.slug}`} image={post.photo1} category={post.category} title={post.title} />
    </GridLayout>
  )))

  if (loading)
  {
    categoryPosts = <Spinner />
  }
  const showErr = error ? true : false

  return <>
    <div className={classes.CatContainer}>

      <h2>{id}</h2>
      <Grid container rowSpacing={4} columnSpacing={3}>

        {categoryPosts}
        <Error showErr={showErr} error={error} />
      </Grid>
    </div>
  </>

}

export default Category