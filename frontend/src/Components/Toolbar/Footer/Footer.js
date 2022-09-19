import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import GridLayout from "../../Ui/GridLayout/GridLayout";

const Footer = () => (
    <Box>
        <Grid container column={12}>
            <GridLayout>About us</GridLayout>
            <GridLayout>Contact us</GridLayout>
            <GridLayout>Services</GridLayout>
            <GridLayout>Terms</GridLayout>
        </Grid>
    </Box>
);

export default Footer;
