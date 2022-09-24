import * as actionTypes from "../actions/actionTypes";

const initialState = {
    posts: [],
    loading: false,
    error: false
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_BY_CATEGORY_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_POSTS_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                posts: action.posts, 
                loading: false,
                
            };

        case actionTypes.FETCH_POSTS_BY_CATEGORY_FAIL:
            return {
                ...state,
                error: action.err, 
                loading: false
            };

        default:
            return state;
    }
};

export default reducer;
