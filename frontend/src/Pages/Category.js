import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./Category.module.css"
import { fetchPostsCategory } from "../store/actions/postsCategory";
import CardUi from "../Components/Ui/CardUi/CardUi";
import { Grid } from "@mui/material";
import GridLayout from "../Components/Ui/GridLayout/GridLayout";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Ui/Spinner/Spinner";
import Error from "../Components/Ui/Error/Error";
import Paginate from "../Components/Ui/Pagination/Pagination";


function Category(props) {

  const { catName } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const postCategory = useSelector((state) =>
    state.postsCategory
  )

  let { posts, loading, error, count, next, previous } = postCategory

  let categoryParam = `?post_category=${catName}`
  if (next || previous) 
  {
    categoryParam = location.search
  }


  useEffect(() => {
    dispatch(fetchPostsCategory(categoryParam));
  }, [dispatch, catName, location.search])

  // For pagination
  const Per_Page = 1
  const handlePageClick = (e, val) => {
    categoryParam = `?page=${val}&post_category=${catName}`
    navigate(`/category/${catName}/` + categoryParam)
  }


  let Count
  if (next)  // first time component load next not define.
  {          // cus req is to all posts of a category
    Count = Math.ceil(count / Per_Page)

  }


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

  return
  <>
    <div className={classes.CatContainer}>
      <h2>{catName}</h2>
      <Grid container rowSpacing={4} columnSpacing={3}>
        {categoryPosts}
        <Error showErr={showErr} error={error} />
      </Grid>
    </div>
    <Paginate count={Count} change={handlePageClick} />
  </>

}

export default Category