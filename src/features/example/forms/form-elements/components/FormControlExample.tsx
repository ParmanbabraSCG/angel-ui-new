import { useState } from "react";
import ComponentCard from "../../../../../components/common/ComponentCard";
import InputField from "../../../../../components/form/InputField";
import Select from "../../../../../components/form/Select";
import TextArea from "../../../../../components/form/TextArea";
import FormControl from "../../../../../components/form/FormControl";

export default function FormControlExample() {
  const [inputValue, setInputValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSelectChange = (value: string) => {
    setSelectValue(value);
    console.log("Selected value:", value);
  };

  const isValidEmail = (email: string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  return (
    <ComponentCard title="Form Control Examples">
      <div className="space-y-6">
        {/* Basic Input with FormControl */}
        <FormControl label="Your Name" htmlFor="nameInput">
          <InputField
            id="nameInput"
            name="nameInput"
            placeholder="Enter your name"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </FormControl>

        {/* Input with Hint */}
        <FormControl
          label="Username"
          htmlFor="usernameInput"
          hint="Must be unique and contain only alphanumeric characters."
        >
          <InputField
            id="usernameInput"
            name="usernameInput"
            placeholder="Choose a username"
            type="text"
          />
        </FormControl>

        {/* Input with Error and Hint */}
        <FormControl
          label="Email Address"
          htmlFor="emailInput"
          error={emailValue !== "" && !isValidEmail(emailValue)}
          hint={emailValue !== "" && !isValidEmail(emailValue) ? "Please enter a valid email address." : "Enter your primary email address."
          }
        >
          <InputField
            id="emailInput"
            name="emailInput"
            placeholder="your@example.com"
            type="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </FormControl>

        {/* Input with Success and Hint */}
        <FormControl
          label="Password"
          htmlFor="passwordInput"
          success={true}
          hint="Password meets all requirements."
        >
          <InputField
            id="passwordInput"
            name="passwordInput"
            placeholder="Enter a strong password"
            type="password"
          />
        </FormControl>

        {/* Select with Required */}
        <FormControl label="Select an Option" htmlFor="selectInput" required>
          <Select
            options={options}
            placeholder="Select an option"
            onChange={handleSelectChange}
            defaultValue={selectValue}
          />
        </FormControl>

        {/* Textarea with Hint */}
        <FormControl
          label="Your Message"
          htmlFor="messageArea"
          hint="Describe your inquiry in detail."
        >
          <TextArea
            placeholder="Type your message here..."
            rows={4}
            value={textAreaValue}
            onChange={(value) => setTextAreaValue(value)}
          />
        </FormControl>
      </div>
    </ComponentCard>
  );
} 