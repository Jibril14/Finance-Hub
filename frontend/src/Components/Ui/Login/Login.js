import { Avatar, Link, Paper, TextField, Typography } from "@mui/material";
import { Link as Linck } from "react-router-dom";
import GridLayout from "../../Ui/GridLayout/GridLayout";
import Button from "../Button/Button";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";

const Login = () => {
    return (
        <GridLayout style={{ background: "white" }}>
            <Paper
                elevation={6}
                style={{
                    height: "60vh",
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
                        <AccountBoxRoundedIcon />
                    </Avatar>
                    <h3 style={{ margin: "3px" }}>Log In</h3>
                </div>
                <TextField
                    label="email"
                    type="email"
                    placeholder="Enter Email"
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
                    Submit
                </Button>
                <Typography>
                    <Link href="#">Forgot Password?</Link>
                </Typography>
                <Typography sx={{ mt: "10px" }}>
                    Dont have account?
                    <Linck to="/register"> Register Now</Linck>
                </Typography>
            </Paper>
        </GridLayout>
    );
};

export default Login;
