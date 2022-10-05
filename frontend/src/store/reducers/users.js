import * as actionType from "../actions/actionTypes"


const user = JSON.parse(localStorage.getItem("userPass"))
console.log("User", user)

const initialState = {
    login: user ? user : null,
    loginSuccess: false,
    loading: false,
    error: ""
}


const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case actionType.CREATE_USER_START:
            return {
                ...state,
                loading: true
            }

        case actionType.CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,

            }

        case actionType.CREATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case actionType.LOGIN_USER_START:
            return {
                ...state,
                loading: true
            }

        case actionType.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                loginSuccess: true,
                login: action.payload


            }

        case actionType.LOGIN_USER_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false,
            }

        case actionType.LOGOUT:
            return {
                ...state,
                login: null,
                loginSuccess: false
            }
        default:
            return state;
    }
}


export default reducer