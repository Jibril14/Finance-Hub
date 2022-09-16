import PropTypes from "prop-types";
import classes from "./Rectangle.module.css";

const Rectangle = ({ children, bcolor, width, height }) => (
    <div
        className={classes.Rectangle}
        style={{ height: height, backgroundColor: bcolor, width: width }}
    >
        {children}
    </div>
);

Rectangle.propTypes = {
    children: PropTypes.object
};

export default Rectangle;
