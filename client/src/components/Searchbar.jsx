import SearchBar from "material-ui-search-bar";
// *snip*
export default function Product(props) {
  return (
    <SearchBar
      value={this.state.value}
      onChange={(newValue) => this.setState({ value: newValue })}
      onRequestSearch={() => doSomethingWith(this.state.value)}
    />
  );
}
