import { Grid } from "@mui/material";
import CardUi from "../CardUi/CardUi";
import GridLayout from "../GridLayout/GridLayout";

function Post() {
    return (
        <Grid container rowSpacing={4} columnSpacing={3}>
            <GridLayout style={{ background: "#fff" }}>
                <CardUi></CardUi>
            </GridLayout>
            <GridLayout style={{ background: "#fff" }}>
                <CardUi></CardUi>
            </GridLayout>
            <GridLayout style={{ background: "#fff" }}>
                <CardUi></CardUi>
            </GridLayout>
            <GridLayout style={{ background: "#fff" }}>
                <CardUi></CardUi>
            </GridLayout>
            <GridLayout style={{ background: "#fff" }}>
                <CardUi></CardUi>
            </GridLayout>
            <GridLayout style={{ background: "#fff" }}>
                <CardUi></CardUi>
            </GridLayout>
        </Grid>
    );
}

export default Post;
