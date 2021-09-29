import React from "react"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Formulario from "../components/organisms/Formulario";
import Footer from "../components/molecules/Footer";
//import { cadastrarTask } from "../services/repositories/taskRepository";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

export default function Home(){

  const [exibeForm, setExibeForm] = useState({exibeForm:false})

  return (
  <>
  {exibeForm.exibeForm ? (

    <Formulario 
    onChange={(params) => setExibeForm(params)} // onSend={onSend}
    />
  ) : (
    <>
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉
        </span>
      </h1>
    </main>
    <Button 
      variant="primary" 
      className="btn-primary"
      onClick={() => setExibeForm({exibeForm: true})}
      >
      Nova Task</Button>
      <Footer
      />
    </>
     )}
    </>  
  )
}