import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 2500
  },
  card: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  media: {
    height: 140
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const arr = props.arr;
  const arr1=props.arr1;
  const histroy = useHistory();
  return (
    <div
      className={classes.root}
      style={{ marginLeft: "50px", marginBottom: "50px" }}
    >
      <Grid container spacing={3}>
        {arr.map((item, index) => {
          return (
            <Grid item lg={3}>
              <Card
                onClick={() => histroy.push("/desc")}
                className={classes.root}
                style={{ border: "2px solid grey" }}
              >
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={item}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {arr1[index]}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {props.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    style={{ marginRight: "15px" }}
                  >
                    Buy Now
                  </Button>
                  <Button size="small" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
