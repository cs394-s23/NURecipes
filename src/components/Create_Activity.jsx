import "./Create.css";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { pushDb } from "../utilities/firebase";
import InputGroup from "react-bootstrap/InputGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import storage from "../utilities/firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useDbData } from "../utilities/firebase";

import { useUserState } from "../utilities/firebase.js";

const Create_Activity = ({ data }) => {
  var authData = getAuth();

  if (authData.currentUser != null) {
    const [data, error] = useDbData("/Users/" + authData.currentUser.uid);
    const [veggie, setVeggie] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [glutenFree, setGlutenFree] = useState(false);
    const [dairyFree, setDairyFree] = useState(false);
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);

    let navigate = useNavigate();
    const onFormSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries());
      console.log(e.target);

      if (
        !formDataObj.seats ||
        !formDataObj.location ||
        !formDataObj.date ||
        !formDataObj.title ||
        !formDataObj.contact
      ) {
        alert("Please fill out all parts of the form");
        return;
      }

      var test = {
        host: data.username,
        guests: formDataObj.seats,
        place: formDataObj.location,
        date_posted: new Date().getTime(),
        time: formDataObj.date,
        profile_pic_url: data.profpic,
        name: formDataObj.title,
        contact: formDataObj.contact,
      };

      pushDb(test, "Activities/");

      navigate(`/discover/`);
    };

    const [user] = useUserState();

    //need title, picture, ingredients, steps, cost, time
    if (data != null) {
      return (
        <div>
          <Form className="create-form" onSubmit={onFormSubmit}>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control placeholder="ex: Alex's Pizza Night" name="title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLocation">
              <Form.Label>Location and Details</Form.Label>
              <Form.Control placeholder="ex: 828 Noyes St" name="location" />
            </Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text>Seats and Date</InputGroup.Text>
              <Form.Control
                aria-label="Date"
                placeholder="Date (ex. Jan 1)"
                name="date"
              />
              <Form.Control
                aria-label="Seats"
                placeholder="Seats"
                name="seats"
              />
            </InputGroup>
            <Form.Group className="mb-3" controlId="formContact">
              <Form.Label>Contact</Form.Label>
              <Form.Control placeholder="ex. (123)-456-7890" name="contact" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            {/* <p>{percent} % done</p> */}
          </Form>
        </div>
      );
    } else {
      return (
        <h1 className="sign-in">Complete profile to create a new activity</h1>
      );
    }
  }
};

export default Create_Activity;
