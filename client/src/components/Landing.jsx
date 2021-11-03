import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { Grid, Typography } from "@material-ui/core/";
import './Landing.css'
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "transparent",
    height: "800px",
  },
  imageList: {
    flexWrap: "nowrap",
    height: 450,

    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function Landing(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          color="primary"
        >
          <div className="landing-title">
          <Typography variant="h3" color="primary" align="center">
            Welcome to ProductCompare
          </Typography>
          </div>
          <div className="web-features">
            <div className="feature-data">
          <Typography variant="h5" color="secondary" align="center">
            Compare products from multiple online platforms
          </Typography>
          </div>
          <div className="feature-data">
          <Typography variant="h5" color="secondary" align="center">
            See product attributes side by side
          </Typography>
          </div>
          <div className="feature-data">
          <Typography variant="h5" color="secondary" align="center">
            Save your comparisons for later
          </Typography>
          </div>
          </div>
          <Typography className="feature-title" variant="h4" color="primary" align="left">
            Featured Items
          </Typography>
        </Grid>
        <ImageList className={classes.imageList} rowHeight="auto" cols={4.5}>
          {props.tileData.map((item) => (
            <ImageListItem key={item.image}>
              <img src={item.image} alt={item.name} />
              <ImageListItemBar
                title={item.name}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}
