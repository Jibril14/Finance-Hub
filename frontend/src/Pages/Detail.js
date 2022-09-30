import classes from "./Detail.module.css";

function Detail() {
    /**  <h2>23 Brilliant Twitter Cover Photo Examples From Real Brands</h2>
            <div>
                <div class={classes.profileImage}
                //<img src="me.png" />
                </div>
      </div */
    return (
        <div>
            <h2>23 Brilliant Twitter Cover Photo Examples From Real Brands</h2>
            <div className={classes.profileDetail}>
                <div className={classes.profileImage}>
                    <img src="../../../../Assets/sample.png" />
                </div>
                <div>
                    <h4 style={{ margin: "4px 4px" }}>
                        Written by Lindsay Kolowich
                    </h4>
                    <h5 style={{ margin: "2px 4px" }}>Software Engineer</h5>
                </div>
            </div>
        </div>
    );
}

export default Detail;
