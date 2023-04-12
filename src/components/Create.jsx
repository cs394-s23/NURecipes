
import "./Create.css"
import React, { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from "react-bootstrap/InputGroup"

const Create = ({data}) => {

    // console.log("unsorted data: ", data);
    
    // if (!data) {
    //     return <h1>Data is loading...</h1>;
    // }

    // console.log("data recipes ", data.Recipes)

    // const sortedData = data.Recipes.sort((a,b) => {
    //     return a.like_count > b.like_count ? -1 : 1
    // })

    // console.log("post-sort data: ", data);
    // console.log("sorted data: ", sortedData);
    // console.log("all activities: ", data.Activities)


    //need title, picture, ingredients, steps, cost, time
    return (
        <Form className = "create-form">
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control placeholder="Enter Title" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formIngredients">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control as="textarea" placeholder="Ingredients (Separate by commas)" rows = {2} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSteps">
          <Form.Label>Steps</Form.Label>
          <Form.Control as="textarea" placeholder="Steps (Separate by commas)" rows = {2} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCaption">
          <Form.Label>Details</Form.Label>
          <Form.Control as="textarea" placeholder="Caption" rows = {2} />
        </Form.Group>
        <InputGroup className="mb-3">
          <InputGroup.Text>Cost and Time</InputGroup.Text>
          <Form.Control aria-label="Cost" placeholder="Cost"/>
          <Form.Control aria-label="Time" placeholder="Minutes"/>
        </InputGroup>


        {/* <Form.Group className="mb-3" controlId="formCost">
          <Form.Label>Cost</Form.Label>
          <Form.Control placeholder="00.00" />  
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTime">
          <Form.Label>Minutes</Form.Label>
          <Form.Control placeholder="0" />  
        </Form.Group> */}


        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Picture</Form.Label>
          <Form.Control type="file" />
      </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default Create;