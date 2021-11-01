import DeleteButton from "./DeleteButton";
import CompareButton from "./CompareButton";
import { Grid, Tab, Tabs, AppBar } from "@material-ui/core/";

export default function Category(props) {
  const categoryArray = props.categories.map((category, index) => {
    return (
      <Tab
        key={category.id}
        value={category.id}
        label={category.name}
        aria-controls={`simple-tabpanel-${index}`}
      />
    );
  });

  return (
    <AppBar position="static" color="default">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={10}>
          <Tabs
            value={props.mode !== "cat" ? false : props.catSelected}
            onChange={(e, value) => props.handleChange(value)}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {categoryArray}
          </Tabs>
        </Grid>
        <Grid item xs={2}>
          <Grid
            container
            // spacing={1}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <CompareButton
              selectedIDs={props.selectedProductIDs}
              features={props.features}
              handleClick={props.handleClick}
            />
            <DeleteButton
              onClick={props.onClick}
            />
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}
