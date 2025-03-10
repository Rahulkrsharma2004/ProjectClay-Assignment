import React from "react";

const Form = ({ field, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (field.type === "section") {
    return (
      <div className="p-4 border border-gray-300 rounded-md my-4">
        <h3 className="text-lg font-semibold">{field.label}</h3>
        {field.fields.map((subField, index) => (
          <Form
            key={index}
            field={subField}
            formData={formData}
            setFormData={setFormData}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        {field.label} {field.required && <span className="text-red-500">*</span>}
      </label>
      {field.type === "text" || field.type === "email" ? (
        <input
          type={field.type}
          name={field.name}
          value={formData[field.name] || ""}
          onChange={handleChange}
          required={field.required}
          className="mt-1 p-2 w-full border rounded-md"
        />
      ) : field.type === "select" ? (
        <select
          name={field.name}
          value={formData[field.name] || ""}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        >
          <option value="">Select...</option>
          {field.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : field.type === "checkbox" ? (
        <input
          type="checkbox"
          name={field.name}
          checked={formData[field.name] || false}
          onChange={handleChange}
          className="mt-1"
        />
      ) : null}
    </div>
  );
};

export default Form;
