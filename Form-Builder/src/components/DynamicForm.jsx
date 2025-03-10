import React, { useState, useEffect } from "react";
import Form from "./Form";

const LOCAL_STORAGE_KEY = "formData";

const DynamicForm = ({ schema }) => {
  // Load stored data from localStorage or initialize with empty object
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : {};
  });

  // Update localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted! Data saved in localStorage.");
    
    // Clear localStorage after submission if needed
    // localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-center mb-4">{schema.title}</h2>
      <form onSubmit={handleSubmit}>
        {schema.fields.map((field, index) => (
          <Form
            key={index}
            field={field}
            formData={formData}
            setFormData={setFormData}
          />
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
