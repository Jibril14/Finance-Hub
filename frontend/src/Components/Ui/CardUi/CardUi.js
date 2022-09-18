import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material";
import Button from "../Button/Button";

const CardUi = () => {
    return (
        <Card sx={{ maxWidth: "320px" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="160"
                    image="../../../../Assets/sample.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Topic
                    </Typography>

                    <Typography
                        gutterBottom
                        variant="body2"
                        color="text.secondary"
                    >
                        Lorem ipsum dolor sit amet, consectetur topi adipisicing
                        elit. In recusandae sit eligendi vitae corporis nemo,
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Button>Read More</Button>
        </Card>
    );
};

export default CardUi;
