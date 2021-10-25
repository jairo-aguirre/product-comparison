export default function Category(props) {
  return (
    <p className="mb-3">
      <a href="#!" className="card-link-secondary">
        {props.name}
      </a>
    </p>
  );
}
