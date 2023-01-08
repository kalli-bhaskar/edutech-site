function Page(props) {
  if (props.title === props.value) {
    return (
      <>
        <h3>{props.price}</h3>
        <p>{props.info}</p>
      </>
    );
  }
}

export default Page;
