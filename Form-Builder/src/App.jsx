import React from "react";
import DynamicForm from "./components/DynamicForm";
import formSchema from "./data/formSchema";
const App = () => {
  return (
    <div className="app-container">
      <DynamicForm schema={formSchema} />
    </div>
  );
};

export default App;
