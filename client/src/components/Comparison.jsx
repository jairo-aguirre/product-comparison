// import ProductDetail from "./ProductDetail";
import "./Product.css";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
} from "@material-ui/core/";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    height: "45vw",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },
}));

export default function Comparison(props) {
  const classes = useStyles();
  // const productIDs = props.selectedIDs || [];
  // const productIDsObj = productIDs.reduce((obj, id) => {
  //   return { ...obj, [id]: true };
  // }, {});

  const prodFeatures = props.data.features || [];
  //const prodArray = props.location.products || [];
  const products = props.data.products || [];

  // const prodComparison = prodFeatures.filter(
  //   (feature) => productIDsObj[feature.product_id]
  // );
  console.log("prodFeatures", prodFeatures);
  console.log("products", products);
  const prodComparison2 = {};
  let prodFeatureNames = [];
  let prodID = 0;
  const dontCompare = ["id", "product_id", "created_at", "updated_at"];

  for (const [key, value] of Object.entries(prodFeatures)) {
    for (const [key1, value1] of Object.entries(value)) {
      if (key1 === "product_id") {
        if (!prodComparison2[value1]) {
          prodID = value1;
          prodComparison2[value1] = {};
        }
      }
      if (!dontCompare.includes(key1)) {
        prodComparison2[prodID][key1] = value1;
        if (!prodFeatureNames.includes(key1)) {
          prodFeatureNames.push(key1);
        }
      }
    }
  }

  console.log("prodComparison2", prodComparison2);
  console.log("prodFeatureNames", prodFeatureNames);
  const createProductTable = products.map((product) => {
    return (
      <Grid item xs={12} sm={6} md={3} key={product.id}>
        
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={product.image} />
          <CardHeader
            titleTypographyProps={{ variant: "headline" }}
            title={product.name}
          />
          <CardContent>
            <Typography variant="body2" gutterBottom>
              <Rating
                name="read-only"
                value={parseInt(product.rating)}
                readOnly
              />
            </Typography>
            <Divider />
            <List>
              {prodFeatureNames.map((featurename, subindex) => {
                if (prodComparison2[product.id][featurename])
                  return (
                    <ListItem key={subindex} alignItems="flex-start">
                      <ListItemText
                        primaryTypographyProps={{ variant: "body2" }}
                        primary={`${featurename} : ${
                          prodComparison2[product.id][featurename]
                        }`}
                      />
                    </ListItem>
                  );
              })}
            </List>
            <Divider />
            <Typography variant="body2" gutterBottom>
              {`$${product.price_cents}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {createProductTable}
      </Grid>
    </div>
  );
}
