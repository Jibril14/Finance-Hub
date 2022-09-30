import { styled, alpha } from "@mui/material/styles";
import Login from "../Components/Ui/Login/Login";
import CardUi from "../Components/Ui/CardUi/CardUi";

const DIV = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),

    marginLeft: 0,
    width: "100%",
    height: "100vh",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
    }
}));

function BlankPage() {
    return (
        <DIV>
            <h2> Featured Page</h2>
            <CardUi />
        </DIV>
    );
}

export default BlankPage;
