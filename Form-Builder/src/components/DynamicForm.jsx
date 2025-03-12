import React, { useState, useEffect } from "react";
import Form from "./Form";
import "../styles/DyanamicForm.css";

const LOCAL_STORAGE_KEY = "formData";

const DynamicForm = ({ schema }) => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : {};
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    schema.fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
        isValid = false;
      }
    });

    if (!formData.terms) {
      newErrors.terms = "You must accept the terms and conditions";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill in all required fields and accept the terms.");
      return;
    }

    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");

    // Clear form data
    setFormData({});
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">{schema.title}</h2>
      <form onSubmit={handleSubmit}>
        {schema.fields.map((field, index) => (
          <Form
            key={index}
            field={field}
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        ))}

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
