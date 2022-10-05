import axios from "axios"
import * as actionType from "../actions/actionTypes"



export const createUserStart = () => {
    return {
        type: actionType.CREATE_USER_START,

    }
}


export const createUserSuccess = (userData) => {
    return {
        type: actionType.CREATE_USER_SUCCESS,
        payload: userData
    }
}

export const createUserFail = (error) => {
    return {
        type: actionType.CREATE_USER_FAIL,
        payload: error
    }
}


export const registerUser = (userData) => {
    return (dispatch) => {
        dispatch(createUserStart())
        const config = {
            headers: { "Content-Type": "application/json" }
        }
        axios.post("/api/v1/auth/users/", userData, config)
            .then(response => {
                dispatch(createUserSuccess())
                console.log("data Successful")
            })
            .catch((error) => {
                dispatch(createUserFail(error.message))
                //console.log("ErrorMessage", error.message)
            })
    }
}


export const loginStart = () => {
    return {
        type: actionType.LOGIN_USER_START
    }
}

export const loginSuccess = (loginUser) => {
    return {
        type: actionType.LOGIN_USER_SUCCESS,
        payload: loginUser
    }
}

export const loginFail = (err) => {
    return {
        type: actionType.LOGIN_USER_FAIL,
        error: err
    }
}

export const loginUser = (loginPass) => {
    return (dispatch, getState) => {
        dispatch(loginStart())
        axios.post("/api/v1/auth/jwt/create/", loginPass)
            .then((response) => {
                dispatch(loginSuccess(response.data))
                // console.log("UserPass", response.data)
                localStorage.setItem("userPass", JSON.stringify(response.data))
            })
            .catch((error) => {
                dispatch(loginFail(error.message))
            })
    }
}

export const logOut = () => {
    localStorage.removeItem("userPass")
    return {
        type: actionType.LOGOUT,

    }

}