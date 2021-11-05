// import ProductDetail from "./ProductDetail";
// import "./Product.css";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "@material-ui/core/Link";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import { red } from "@material-ui/core/colors";
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
  fullHeightCard: {
    height: "100%",
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },
  rightAlignItem: {
    marginLeft: "auto",
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
  let prodFeatureFixed = []
  const dontCompare = ["id", "product_id", "created_at", "updated_at"];

  for (const [key, value] of Object.entries(prodFeatures)) {
    console.log(prodFeatures[0]);
    console.log(key);

    for (const [key1, value1] of Object.entries(value)) {
      console.log(key1, value1);
      console.log(prodFeatures[0][key1]);

      if (key1 === "product_id") {
        if (!prodComparison2[value1]) {
          prodID = value1;
          prodComparison2[value1] = {};
        }
      }
      if (prodComparison2[prodID] && !dontCompare.includes(key1)) {
        prodComparison2[prodID][key1] = value1;
        if (!prodFeatureNames.includes(key1)) {
          prodFeatureNames.push(key1)
          if (key1 === "season") {
            prodFeatureFixed.push("Season");
          }
          if (key1 === "material") {
            prodFeatureFixed.push("Main Material");
          }
          if (key1 === "material1") {
            prodFeatureFixed.push("First Material");
          }
          if (key1 === "material2") {
            prodFeatureFixed.push("Second Material");
          }
          if (key1 === "material3") {
            prodFeatureFixed.push("Third Material");
          }
          if (key1 === "material4") {
            prodFeatureFixed.push("Fourth Material");
          }
          if (key1 === "sleeveLength") {
            prodFeatureFixed.push("Sleeve Length");
          }
          if (key1 === "where") {
            prodFeatureFixed.push("Intended Use");
          }
          if (key1 === "typeOf") {
            prodFeatureFixed.push("Subcategory");
          }
          if (key1 === "pattern") {
            prodFeatureFixed.push("Pattern");
          }
          if (key1 === "brand") {
            prodFeatureFixed.push("Brand");
          }
          if (key1 === "screenSize") {
            prodFeatureFixed.push("Screen Size");
          }
          if (key1 === "weight") {
            prodFeatureFixed.push("Weight");
          }
          if (key1 === "RAM") {
            prodFeatureFixed.push("RAM");
          }
          if (key1 === "storage") {
            prodFeatureFixed.push("Storage");
          }
          if (key1 === "operatingSystem") {
            prodFeatureFixed.push("Operating System");
          }
          if (key1 === "resolution") {
            prodFeatureFixed.push("Resolution");
          }
          if (key1 === "fabric") {
            prodFeatureFixed.push("Fabric");
          }
          if (key1 === "Fit") {
            prodFeatureFixed.push("Fit");
          }
          if (key1 === "Pockets") {
            prodFeatureFixed.push("Pockets");
          }
          if (key1 === "Closures") {
            prodFeatureFixed.push("Closures");
          }
          if (key1 === "TorsoLength") {
            prodFeatureFixed.push("Torso Length");
          }
          if (key1 === "Collar") {
            prodFeatureFixed.push("Collar");
          }
          if (key1 === "Lapel") {
            prodFeatureFixed.push("Lapel");
          }
          if (key1 === "LiningMaterial") {
            prodFeatureFixed.push("Lining Material");
          }
          if (key1 === "Cuff") {
            prodFeatureFixed.push("Cuff");
          }
        }
      }
    }
  }

  
  
  
  console.log("prodComparison2", prodComparison2);
  console.log("prodFeatureNames", prodFeatureNames);
  const createProductTable = products.map((product) => {
    return (
      <Grid item xs={12} sm={6} md={3} key={product.id}>
        <Card className={classes.fullHeightCard}>
          <CardMedia className={classes.media} image={product.image} />
          <CardHeader
            titleTypographyProps={{ variant: "headline" }}
            title={product.name}
          />
          <CardContent display="flex" justify="space-between">
            <Typography variant="body1">
              <Rating
                name="read-only"
                value={parseInt(product.rating)}
                readOnly
              />
            </Typography>
            {/* <Divider light /> */}
            <Grid container justify="space-between">
              <List disablePadding>

                {prodFeatureNames.map((featurename, subindex) => {
                  if (
                    prodComparison2[product.id] &&
                    prodComparison2[product.id][featurename]
                  ) {

                    return (
                      <ListItem key={subindex} alignItems="flex-start">
                        <ListItemText
                          primary={`${prodFeatureFixed[subindex]} : 
                          ${prodComparison2[product.id][featurename]}`}
                        />
                      </ListItem>
                    );
                    
                  }

                  return;

                })}
              </List>
            </Grid>

            <Divider light />

            <Grid container justify="space-between">
              <Typography variant="body2" align="left">
                {`$${product.price_cents}`}
              </Typography>
              {product.sale && (
                <Typography
                  variant="body2"
                  style={{ color: red[500] }}
                  align="right"
                >
                  <LoyaltyIcon style={{ color: red[500] }} />
                  OnSale
                </Typography>
              )}
            </Grid>
            <Link
              href={`${product.url}`}
              variant="body2"
              color="secondary"
              className={classes.rightAlignItem}
            >
              SHOP HERE
            </Link>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={2} direction="row" justify="center">
        {createProductTable}
      </Grid>
    </div>
  );
}
