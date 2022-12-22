import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div>
      <div className="text-content">
        <h1>ForU EduTech</h1>
        <p>
          Best Online Platform for Growing your skills
          <br />
          We are team of talented Techies with Experince in Major MNC's
        </p>
        <Button variant="primary" size="lg" href="/regform">
          Join us
        </Button>{" "}
        <Button variant="outline-primary" size="lg">
          Demo
        </Button>{" "}
      </div>
    </div>
  );
}

export default Home;
