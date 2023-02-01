function Page(props) {
  if (props.title === props.value) {
    return (
      <>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <h1 style={{ marginTop: "5%" }}>About the course</h1>
        <p>{props.content_2}</p>
        <p>
          There are No Prerequisites for the entire program we will teach
          everything from scratch to the advanced level.
        </p>
      </>
    );
  }
}

export default Page;
