import React from "react";
// import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";

function Registration() {
  // const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      Course: "",
      formHorizontalRadios: ""
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    }
  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // redirect to home
  //   navigate("/", { replace: true });
  // };

  return (
    <section id="Regform">
      <div className="container">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
            <Form.Label column sm={2}>
              Full Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                placeholder="Full name"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Email"
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalNumber"
          >
            <Form.Label column sm={2}>
              Number
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                placeholder="Number"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formGridState">
            <Form.Label column sm={2}>
              Course
            </Form.Label>
            <Col sm={10}>
              <Form.Select
                defaultValue="Choose..."
                name="Course"
                onChange={formik.handleChange}
              >
                <option value="choose">Choose...</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="full stack">Full Stack</option>
                <option value="sql">SQL</option>
                <option value="c/c++">C/C++</option>
                <option value="ui/ux">UI/UX</option>
                <option value="excel">Advanced Excel</option>
                <option value="machine learning">Machine Learning</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Education
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="BE/BTech"
                  name="formHorizontalRadios"
                  value="BE/BTech"
                  onChange={formik.handleChange}
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Diploma"
                  name="formHorizontalRadios"
                  value="Diploma"
                  onChange={formik.handleChange}
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="Others"
                  name="formHorizontalRadios"
                  value="Others"
                  onChange={formik.handleChange}
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </section>
  );
}

export default Registration;
