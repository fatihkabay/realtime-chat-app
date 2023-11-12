import React from 'react';
import styled from "styled-components"

function Register() {
    const handleSubmit = (event) => {
         event.preventDefault();
         alert("Form");
    }

  return (
    <>
    <FormContainer>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="brand">
            <img src="" alt="" />
            <h1>Snappy!</h1>
        </div>
      </form>
    </FormContainer>
    </>
  )
}

const FormContainer = styled.div``;

export default Register