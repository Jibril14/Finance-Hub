import Box from "@mui/material/Box";
import { Grid, Typography, Avatar } from "@mui/material";
import GridLayout from "../../Ui/GridLayout/GridLayout";
import classes from "./Footer.module.css"
import { Link } from "react-router-dom";
import ContactIc from "@mui/icons-material/AddIcCallSharp";


const Footer = () => (
    <Box>
        <Grid container column={12}>
            <GridLayout>
                <Avatar style={{ fontSize: "20px" }}>
                    <ContactIc />
                </Avatar>
                <Link className={classes.FooterLink} to="/hn/about">About us</Link></GridLayout>
            <GridLayout><Link className={classes.FooterLink} to="/hn/contact">Contact us</Link></GridLayout>
            <GridLayout><Link className={classes.FooterLink} to="/hn/services">Services</Link></GridLayout>
            <GridLayout><Link className={classes.FooterLink} to="/hn/terms">Terms</Link></GridLayout>
        </Grid>
        <div className={classes.FooterSection}>{new Date().getFullYear()} &copy; Copyright Finance Hub. All Rights Reserved</div>
    </Box>
);

export default Footer;
