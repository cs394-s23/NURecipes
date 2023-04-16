
import "./Create.css"
import React, { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { pushDb } from "../utilities/firebase"
import InputGroup from "react-bootstrap/InputGroup"
import ToggleButton from 'react-bootstrap/ToggleButton';


const Create = ({data}) => {


    // const [value, setValue] = useState(),
    //     onInput = ({target:{value}}) => setValue(value),
    //     onFormSubmit = e => {
    //         e.preventDefault()
    //         console.log(value)
    //         setValue()
    //         while(true) {

    //         }
    // }

    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }

    const onFormSubmit = e => {
        // e.preventDefault()
        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries())
        console.log(e.target)
        // Object.defineProperties(formDataObj, 'foo', {
        //     value: 1
        // })
        // formDataObj['username'] = "AlexTang"
        // formDataObj.foo = 1


        console.log(formDataObj)

        var test = {
            username: "AlexTang2",
            caption: formDataObj.caption,
            cook_time: formDataObj.cook_time,
            cost: formDataObj.cost,
            date_posted: "04-011-23",
            image_url:
                 "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
            like_count: 0,
            profile_pic_url:
                    "https://imageio.forbes.com/specials-images/imageserve/602c09c9135a060af5e1a8f4/Face-with-Spiral-Eyes---a-new-Apple-emoji-/960x0.png?format=png&width=960",
            recipe: formDataObj.recipe,
            title: formDataObj.title,
            tags: formDataObj.tags
           
        }

        pushDb(test, "Recipes/")
        console.log(test.image_url)
        // wait(20000)
      }



    //need title, picture, ingredients, steps, cost, time
    return (
        <Form className = "create-form" onSubmit={onFormSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control placeholder="Enter Title" name ="title"/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formIngredients">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control as="textarea" placeholder="Ingredients (Separate by commas)" rows = {2} name ="recipe"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSteps">
          <Form.Label>Steps</Form.Label>
          <Form.Control as="textarea" placeholder="Steps (Separate by commas)" rows = {2} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCaption">
          <Form.Label>Details</Form.Label>
          <Form.Control as="textarea" placeholder="Caption" rows = {2} name="caption"/>
        </Form.Group>

        <Form.Group controlId="mb-3" className="mb-3">
          
          <Form.Label>Tags</Form.Label>
          <div className="tags-section">
            <ToggleButton className="tag-button" variant="outline-success"> Vegetarian </ToggleButton>
            <Button className="tag-button" variant="outline-success"> Vegan </Button>
            <Button className="tag-button" variant="outline-success"> Gluten-Free </Button>
            <Button className="tag-button" variant="outline-success"> Dairy-Free </Button>
          </div>
          {/* <Form.Control type="file" name="image_url"/> */}
        </Form.Group>

        <InputGroup className="mb-3">
          <InputGroup.Text>Cost and Time</InputGroup.Text>
          <Form.Control aria-label="Cost" placeholder="Cost" name ="cost"/>
          <Form.Control aria-label="Time" placeholder="Minutes" name = "cook_time"/>
        </InputGroup>


        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Picture</Form.Label>
          <Form.Control type="file" name="image_url"/>
      </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default Create;