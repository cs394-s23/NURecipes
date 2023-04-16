import "./Create.css";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { pushDb } from "../utilities/firebase";
import InputGroup from "react-bootstrap/InputGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import storage from "../utilities/firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Create = ({ data }) => {
  const [veggie, setVeggie] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);
  const [dairyFree, setDairyFree] = useState(false);
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  function handleChange(e) {
    setFile(e.target.files[0]);
    console.log(e.target.files[0].name);
  }

  const handleVeggie = (e) => {
    setVeggie(!veggie);
  };

  const handleVegan = (e) => {
    setVegan(!vegan);
  };

  const handleGlutenFree = (e) => {
    setGlutenFree(!glutenFree);
  };

  const handleDairyFree = (e) => {
    setDairyFree(!dairyFree);
  };

  function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(e.target);
    // Object.defineProperties(formDataObj, 'foo', {
    //     value: 1
    // })
    // formDataObj['username'] = "AlexTang"
    // formDataObj.foo = 1

    const storageRef = ref(storage, `/files/${file.name}`);
    console.log(storageRef);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);

          var test = {
            username: "AlexTang2",
            caption: formDataObj.caption,
            cook_time: formDataObj.cook_time,
            cost: formDataObj.cost,
            date_posted: "04-011-23",
            image_url: url,
            like_count: 0,
            profile_pic_url:
              "https://imageio.forbes.com/specials-images/imageserve/602c09c9135a060af5e1a8f4/Face-with-Spiral-Eyes---a-new-Apple-emoji-/960x0.png?format=png&width=960",
            title: formDataObj.title,
            tags: [veggie, vegan, glutenFree, dairyFree],
            recipe: {
              ingredients: formDataObj.ingredients,
              steps: formDataObj.steps,
            },
          };

          pushDb(test, "Recipes/");
        });
      }
    );

    // console.log(test.image_url)
    // wait(20000)
  };

  //need title, picture, ingredients, steps, cost, time
  return (
    <Form className="create-form" onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control placeholder="Enter Title" name="title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formIngredients">
        <Form.Label>Ingredients</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Ingredients (Separate by commas)"
          rows={2}
          name="ingredients"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formSteps">
        <Form.Label>Steps</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Steps (Separate by commas)"
          rows={2}
          name="steps"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCaption">
        <Form.Label>Details</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Caption"
          rows={2}
          name="caption"
        />
      </Form.Group>

      <Form.Group controlId="mb-3" className="mb-3">
        <Form.Label>Tags</Form.Label>
        <div className="tags-section">
          <ToggleButton
            className="tag-button"
            variant="outline-success"
            type="checkbox"
            checked={veggie}
            onClick={() => handleVeggie()}
          >
            {" "}
            Vegetarian{" "}
          </ToggleButton>
          <ToggleButton
            className="tag-button"
            variant="outline-success"
            type="checkbox"
            checked={vegan}
            onClick={() => handleVegan()}
          >
            {" "}
            Vegan{" "}
          </ToggleButton>
          <ToggleButton
            className="tag-button"
            variant="outline-success"
            type="checkbox"
            checked={glutenFree}
            onClick={() => handleGlutenFree()}
          >
            {" "}
            Gluten-Free{" "}
          </ToggleButton>
          <ToggleButton
            className="tag-button"
            variant="outline-success"
            type="checkbox"
            checked={dairyFree}
            onClick={() => handleDairyFree()}
          >
            {" "}
            Dairy-Free{" "}
          </ToggleButton>
        </div>
        {/* <Form.Control type="file" name="image_url"/> */}
      </Form.Group>

      <InputGroup className="mb-3">
        <InputGroup.Text>Cost and Time</InputGroup.Text>
        <Form.Control aria-label="Cost" placeholder="Cost" name="cost" />
        <Form.Control
          aria-label="Time"
          placeholder="Minutes"
          name="cook_time"
        />
      </InputGroup>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Picture</Form.Label>
        <Form.Control type="file" onChange={handleChange} name="image_url" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {/* <p>{percent} % done</p> */}
    </Form>
  );
};

export default Create;
