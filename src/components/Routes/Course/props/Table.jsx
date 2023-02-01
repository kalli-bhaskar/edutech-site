function Table(props) {
  if (props.title === props.value) {
    return props.content.map((x, i) => <div key={i}>{x}</div>);
  }
}

export default Table;
