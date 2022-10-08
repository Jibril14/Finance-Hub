import * as actionTypes from "../actions/actionTypes";


const initialState = {
    posts: [],
    detailPost: {},
    loading: false,
    error: ""
};


const reducer = (state = initialState, action) => {
    switch (action.type)
    {
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

        case actionTypes.FETCH_DETAIL_POST_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_DETAIL_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                detailPost: action.payload
            }
        case actionTypes.FETCH_DETAIL_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default reducer;
