import { useState } from "react";
import {
  Col,
  Modal,
  Form,
  InputGroup,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";
import CommentsList from "./CommentsList";

const SingleMovie =(props)=> {
  const [selected, setSelected] = useState(false)
  const [comments, setComments] = useState([])
  const [error, setError] = useState(false)
  const [selected, setSelected] = useState(false)
  const [newComment, setNewComment] = useState({
     comment: "",
     rate: "3",
     elementId: props.data.imdbID,

  })


  // state = {
  //   selected: false,
  //   comments: [],
  //   error: false,
  //   newComment: {
  //     comment: "",
  //     rate: "3",
  //     elementId: this.props.data.imdbID,
  //   },
  // };

  const fetchComments = async (movieID) => {
    const COMMENTS_URL = "https://striveschool-api.herokuapp.com/api/comments/";
    try {
      const response = await fetch(COMMENTS_URL + movieID, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTUwNmRlY2RhMzE2MzAwMTVkNTEyM2YiLCJpYXQiOjE2MzI2NjA5NzIsImV4cCI6MTYzMzg3MDU3Mn0.vzSXzuRnbhUs7NjBPeeIiCBg6REuTwnoXE-R7Y-zU9Y",
        },
      });
      if (response.ok) {
        const comments = await response.json();
        setComments(comments);
        setError(false)
      } else {
        console.log("an error occurred");
        setError(true)

      }
    } catch (error) {
      console.log(error);
      setError(true)
    }
  };

  const submitComment = async (e) => {
    e.preventDefault();
    const COMMENTS_URL = "https://striveschool-api.herokuapp.com/api/comments/";
    try {
      const response = await fetch(COMMENTS_URL, {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTUwNmRlY2RhMzE2MzAwMTVkNTEyM2YiLCJpYXQiOjE2MzI2NjA5NzIsImV4cCI6MTYzMzg3MDU3Mn0.vzSXzuRnbhUs7NjBPeeIiCBg6REuTwnoXE-R7Y-zU9Y",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Comment added");
        setComments({comment: "", rate: 0, elementId: props.data.imdbID});
      } else {
        alert("An error has occurred");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRadioChange = (rating) => {
    let newComment = newComment;
    newComment.rate = rating;
    setComments(newComment);
  };

  const handleCommentText = (e) => {
    let newComment = newComment;
    newComment.comment = e.currentTarget.value;
    setComments(newComment);
  };

    return (
      <Col className="mb-2" key={props.data.imdbID}>
        <img
          className="img-fluid"
          src={props.data.Poster}
          alt="movie"
          onClick={() => {
            setSelected({!selected });
            fetchComments(props.data.imdbID);
          }}
        />
        <Modal
          show={selected}
          onHide={() => setSelected({ !selected })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Movie comments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="my-3">
              {error && (
                <Alert variant="danger" className="text-center">
                  Error fetching comments
                </Alert>
              )}
              {comments.length > 0 &&
                comments[0].elementId === props.data.imdbID && (
                  <CommentsList comments={comments} />
                )}
              <div className="text-center">
                <h5 className="my-3">Add a comment</h5>
                <Form onSubmit={submitComment}>
                  <div className="my-3 text-center">
                    <Form.Check
                      inline
                      label="1"
                      value="1"
                      type="radio"
                      name="rating"
                      defaultChecked={newComment.rate === "1"}
                      onClick={() => handleRadioChange("1")}
                    />
                    <Form.Check
                      inline
                      label="2"
                      value="2"
                      type="radio"
                      name="rating"
                      defaultChecked={newComment.rate === "2"}
                      onClick={() => handleRadioChange("2")}
                    />
                    <Form.Check
                      inline
                      label="3"
                      value="3"
                      type="radio"
                      name="rating"
                      defaultChecked={newComment.rate === "3"}
                      onClick={() => handleRadioChange("3")}
                    />
                    <Form.Check
                      inline
                      label="4"
                      value="4"
                      type="radio"
                      name="rating"
                      defaultChecked={newComment.rate === "4"}
                      onClick={() => handleRadioChange("4")}
                    />
                    <Form.Check
                      inline
                      label="5"
                      value="5"
                      type="radio"
                      name="rating"
                      defaultChecked={newComment.rate === "5"}
                      onClick={() => handleRadioChange("5")}
                    />
                  </div>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Write your comment"
                      aria-label="comment"
                      aria-describedby="basic-addon1"
                      onChange={handleCommentText}
                      value={newComment.comment}
                      required
                    />
                  </InputGroup>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Col>
    );
}

export default SingleMovie;
