import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { registerUser } from "../../../store/actions/users";
import { Avatar, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GridLayout from "../../Ui/GridLayout/GridLayout";
import Button from "../Button/Button";
import PersonSharpIcon from "@mui/icons-material/Person2Sharp";


const Login = () => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata = {}
        formdata["username"] = username
        formdata["email"] = email
        formdata["first_name"] = firstname
        formdata["last_name"] = lastname
        formdata["password"] = password1
        formdata["re_password"] = password2
        dispatch(registerUser(formdata))
    }


    return (
        <GridLayout style={{ background: "white" }}>
            <Paper
                elevation={6}
                style={{
                    height: "auto",
                    maxWidth: "330px",
                    margin: "20px auto",
                    padding: "20px 7px"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Avatar style={{ background: "#6666FF" }}>
                        <PersonSharpIcon />
                    </Avatar>
                    <h3 style={{ margin: "3px" }}>Register Now</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <TextField
                        onChange={(e) => setUsername(e.target.value)}
                        label="username"
                        value={username}
                        placeholder="Enter Username"
                        fullWidth
                        required
                        variant="filled"
                    />
                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        label="email"
                        value={email}
                        type="email"
                        placeholder="Enter Email"
                        fullWidth
                        required
                        variant="filled"
                    />
                    <TextField
                        onChange={(e) => setFirstname(e.target.value)}
                        label="firstname"
                        value={firstname}
                        placeholder="Enter Firstname"
                        fullWidth
                        required
                        variant="filled"
                    />
                    <TextField
                        onChange={(e) => setLastname(e.target.value)}
                        label="lastname"
                        value={lastname}
                        placeholder="Enter Lastname"
                        fullWidth
                        required
                        variant="filled"
                    />
                    <TextField
                        onChange={(e) => setPassword1(e.target.value)}
                        label="password"
                        value={password1}
                        type="password"
                        placeholder="Enter Password"
                        fullWidth
                        required
                        variant="filled"
                    />
                    <TextField
                        onChange={(e) => setPassword2(e.target.value)}
                        label="confirm password"
                        value={password2}
                        type="password"
                        placeholder="Confirm Password"
                        fullWidth
                        required
                        variant="filled"
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        style={{ margin: "20px 0" }}
                    >
                        Register
                    </Button>
                </form>
                <Typography sx={{ mt: "10px" }}>
                    Already have an account? <Link to="/login">Login here</Link>
                </Typography>
            </Paper>
        </GridLayout>
    );
};

export default Login;
