function Bubble(props) {
  if (props.title === props.value) {
    return (
      <div>
        <h1 style={{ textDecorationLine: "line-through" }}>{props.or_price}</h1>
        <h1>{props.price}</h1>
        <hr />
        <div className="benefits-container">
          <h3>Benefits</h3>
          <ul>
            <li>
              Get taught by industry experts having years of experience in their
              respective fields.
            </li>
            <li>Real world industry level projects and reviews.</li>
            <li>Mentor support and doubt clearing sessions.</li>
            <li>Resume building and more career support.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Bubble;
