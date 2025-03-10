import React from "react";
import DynamicForm from "./components/DynamicForm";
import formSchema from "./data/formSchema";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <DynamicForm schema={formSchema} />
    </div>
  );
};

export default App;
