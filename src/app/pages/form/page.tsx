'use client'
import React from 'react';
import Form from '../../components/Form';

const FormPage = () => {
  
  const handleSubmit = (formData: any) => {
    // Handle form submission logic here
    console.log("formData");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} primary showSignUp></Form>
    </div>
  );
};

export default FormPage;