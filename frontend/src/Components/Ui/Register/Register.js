import { Avatar, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GridLayout from "../../Ui/GridLayout/GridLayout";
import Button from "../Button/Button";
import PersonSharpIcon from "@mui/icons-material/Person2Sharp";

const Login = () => {
    return (
        <GridLayout style={{ background: "white" }}>
            <Paper
                elevation={6}
                style={{
                    height: "auto",
                    width: "290px",
                    margin: "20px auto",
                    padding: " 20px"
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
                <TextField
                    label="username"
                    placeholder="Enter Username"
                    fullWidth
                    required
                    variant="filled"
                />
                <TextField
                    label="email"
                    type="email"
                    placeholder="Enter Email"
                    fullWidth
                    required
                    variant="filled"
                />
                <TextField
                    label="firstname"
                    placeholder="Enter Firstname"
                    fullWidth
                    required
                    variant="filled"
                />
                <TextField
                    label="lastname"
                    placeholder="Enter Lastname"
                    fullWidth
                    required
                    variant="filled"
                />
                <TextField
                    label="password"
                    type="password"
                    placeholder="Enter Password"
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
                <Typography sx={{ mt: "10px" }}>
                    Already have an account? <Link to="/login">Login here</Link>
                </Typography>
            </Paper>
        </GridLayout>
    );
};

export default Login;
