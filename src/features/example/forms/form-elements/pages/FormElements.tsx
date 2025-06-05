import PageBreadcrumb from "../../../../../components/common/PageBreadCrumb";
import DefaultInputs from "../components/DefaultInputs";
import InputGroup from "../components/InputGroup";
import DropzoneComponent from "../../../../../components/form/DropZone";
import CheckboxComponents from "../components/CheckboxComponents";
import RadioButtons from "../components/RadioButtons";
import ToggleSwitch from "../components/ToggleSwitch";
import FileInputExample from "../components/FileInputExample";
import SelectInputs from "../components/SelectInputs";
import TextAreaInput from "../components/TextAreaInput";
import InputStates from "../components/InputStates";
import PageMeta from "../../../../../components/common/PageMeta";

export default function FormElements() {
  return (
    <div>
      <PageMeta
        title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="From Elements" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultInputs />
          <SelectInputs />
          <TextAreaInput />
          <InputStates />
        </div>
        <div className="space-y-6">
          <InputGroup />
          <FileInputExample />
          <CheckboxComponents />
          <RadioButtons />
          <ToggleSwitch />
          <DropzoneComponent />
        </div>
      </div>
    </div>
  );
} 