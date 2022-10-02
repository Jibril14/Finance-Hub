import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material";
import Button from "../Button/Button";

const CardUi = (props) => {
    return (
        <Card sx={{ maxWidth: "320px" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="160"
                    image={props.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {props.category}
                    </Typography>

                    <Typography
                        gutterBottom
                        variant="body2"
                        color="text.secondary"
                    >
                         {props.title}
                       
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Button>Read More</Button>
        </Card>
    );
};

export default CardUi;
