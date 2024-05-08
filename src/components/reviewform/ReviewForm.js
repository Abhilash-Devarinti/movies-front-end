import { Form, Button } from "react-bootstrap";

const ReviewForm = ({ handleSubmit, revText, labelText }) => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>{labelText}</Form.Label>
          <Form.Control ref={revText} as="textarea" rows={3} />
        </Form.Group>
        <Button varient="outline-info" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ReviewForm;
