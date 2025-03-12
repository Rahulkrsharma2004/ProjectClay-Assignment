import React from "react";
import "../styles/Form.css";

const Form = ({ field, formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (field.type === "section") {
    return (
      <div className="form-section">
        <h3 className="section-title">{field.label}</h3>
        {field.fields.map((subField, index) => (
          <Form
            key={index}
            field={subField}
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="form-group">
      <label className="form-label">
        {field.label} {field.required && <span className="text-red-500">*</span>}
      </label>

      {field.type === "text" || field.type === "email" ? (
        <input
          type={field.type}
          name={field.name}
          value={formData[field.name] || ""}
          onChange={handleChange}
          required={field.required}
          className="form-input"
        />
      ) : field.type === "select" ? (
        <select
          name={field.name}
          value={formData[field.name] || ""}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Select...</option>
          {field.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : field.type === "checkbox" ? (
        <div className="checkbox-group">
          <input
            type="checkbox"
            name={field.name}
            checked={formData[field.name] || false}
            onChange={handleChange}
            className="form-checkbox"
          />
          <span>I agree to the terms and conditions</span>
        </div>
      ) : null}

      {errors[field.name] && <p className="error-message">{errors[field.name]}</p>}
    </div>
  );
};

export default Form;
