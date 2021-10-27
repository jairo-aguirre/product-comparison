// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// export default function Category(props) {
//   const categoryArray = props.categories.map((category) => {
//     return (
//       <MenuItem key={category.id} value={category.id}>
//         {category.name}
//       </MenuItem>
//     );
//   });

//   return (
//     <Select
//       value={props.catSelected} // we want to work in controlled mode
//       onChange={(e) => props.handleChange(e.target.value)} // we want to work in controlled mode
//     >
//       {categoryArray}
//     </Select>
//   );
// }
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
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
      <Tabs
        value={props.catSelected}
        onChange={(e, value) => props.handleChange(value)}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {categoryArray}
      </Tabs>
    </AppBar>
  );
}
