import { Button as Buttn } from "@mui/material";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    btn: {
        textTransform: "none",
        backgroundColor: "red"
    }
});

let Button = (props) => {
    const classes = useStyles();
    return (
        <Buttn
            className={classes.btn}
            color={props.color}
            size={props.size}
            variant={props.variant}
            sx={{ ml: "8px" }}
        >
            {props.children}
        </Buttn>
    );
};

export default Button;
