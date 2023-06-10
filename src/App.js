import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AppExtensionsSDK, { Command } from "@pipedrive/app-extensions-sdk";
import Button from "./button/Button.js";
import FormBox from "./form-box/FormBox.js";
import "./App.css";

function App() {
  const [buttonName, setButtonName] = useState("Create");

  const initializeSdk = async () => {
    const sdk = await new AppExtensionsSDK().initialize();
    await sdk.execute(Command.RESIZE, { height: 500, width: 800 });
    const { status } = await sdk.execute(Command.OPEN_MODAL, {
      type: Modal.CUSTOM_MODAL,
      action_id: "8b5947e5-580a-405f-b443-8be14629dc49",
    });
  };

  useEffect(() => {
    initializeSdk().catch(console.error);
  }, []);


  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      "First Name": "",
      "Last Name": "",
      Phone: "",
      Email: "",

      "Job Type": "",
      "Job Source": "",
      "Job Description": "",

      Address: "",
      City: "",
      State: "",
      ZipCode: "",
      Area: "",

      "Start Date": "",
      "Start Time": "",
      "End Time": "",
      "Test Select": "",
    },
  });

  const fieldType = {
    "First Name": "text",
    "Last Name": "text",
    Phone: "phone",
    Email: "text",

    "Job Type": "text",
    "Job Source": "text",
    "Job Description": "text",

    Address: "address",
    City: "address",
    State: "address",
    ZipCode: "text",
    Area: "text",

    "Start Date": "date",
    "Start Time": "time",
    "End Time": "time",
    "Test Select": "text",
  };
  const postData = async (form) => {
    const fields = {};
    for (const key in form) {
      const responce = await fetch(
        "https://api.pipedrive.com/v1/dealFields?api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb",
        {
          method: "POST",
          body: JSON.stringify({
            field_type: fieldType[key],
            name: key,
            add_visible_flag: true,
          }),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer bf62c250a11167d3bfea260eee32d323fb8b9045",
          },
        }
      );
      const dealField = await responce.json();
      fields[dealField.data.key] = form[key];
    }
    await fetch(
      `https://api.pipedrive.com/v1/deals/1?api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb`,
      {
        method: "PUT",
        body: JSON.stringify(fields),
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer bf62c250a11167d3bfea260eee32d323fb8b9045",
        },
      }
    );
    const sdk = await new AppExtensionsSDK().initialize();
    await sdk.execute(Command.CLOSE_MODAL);
  };
  const changeButtonName = () => {
    setButtonName("Request is send!");
  };
  const onSubmit = (data) => {
    postData(data);
    changeButtonName();
 
  };

  return (
    <div className="App">
      <form className="form_wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="double_form__wrappper">
          <FormBox
            formBoxTitle="Client details"
            firstNameReg={register("First Name")}
            lastNameReg={register("Last Name")}
            phoneReg={register("Phone")}
            emailReg={register("Email")}
          />
          <FormBox
            formBoxTitle="Job details"
            jobTypeReg={register("Job Type")}
            jobSourceReg={register("Job Source")}
            jobDescriptionReg={register("Job Description")}
          />
        </div>
        <div className="double_form__wrappper">
          <FormBox
            formBoxTitle="Service location"
            addressReg={register("Address")}
            cityReg={register("City")}
            stateReg={register("State")}
            zipCodeReg={register("ZipCode")}
            areaReg={register("Area")}
          />
          <FormBox
            formBoxTitle="Scheduled"
            startDateReg={register("Start Date")}
            startTimeReg={register("Start Time")}
            endTimeReg={register("End Time")}
            testSelectReg={register("Test Select")}
          />
        </div>
        <div className="button_wrapper">
          <Button
            className="create_button"
            type="submit"
            buttonName={buttonName}
          />
          <Button className="reset_button" type="reset" buttonName="Reset" />
        </div>
      </form>
    </div>
  );
}

export default App;
