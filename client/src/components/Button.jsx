export default function Button(props) {
  return (
    <button onClick={props.onClick} id={props.id} name={props.name}>
      {props.children}
    </button>
  );
}