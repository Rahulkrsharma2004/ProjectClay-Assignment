const formSchema = {
    title: "User Registration",
    fields: [
      {
        label: "Full Name",
        type: "text",
        name: "fullName",
        required: true,
      },
      {
        label: "Email",
        type: "email",
        name: "email",
        required: true,
      },
      {
        label: "Gender",
        type: "select",
        name: "gender",
        options: ["Male", "Female", "Other"],
      },
      {
        label: "Accept Terms",
        type: "checkbox",
        name: "termsAccepted",
      },
      {
        label: "Education",
        type: "section",
        name: "education",
        fields: [
          {
            label: "Degree",
            type: "text",
            name: "degree",
          },
          {
            label: "University",
            type: "text",
            name: "university",
          },
        ],
      },
    ],
  };
  
  export default formSchema;
  