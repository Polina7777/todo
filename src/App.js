import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AppExtensionsSDK from "@pipedrive/app-extensions-sdk";
import Button from "./button/Button.js";
import "./App.css";
import FormBox from "./form-box/FormBox.js";
import ApiClient from "./utils/api-client.js";

function App() {
  const initializeSdk = async () => {
    const sdk = await new AppExtensionsSDK().initialize();

    const { status } = await sdk.execute(Command.OPEN_MODAL, {
      type: Modal.CUSTOM_MODAL,
      action_id: "8b5947e5-580a-405f-b443-8be14629dc49",
    });
  };

  useEffect(() => {
    initializeSdk().catch(console.error);
  }, []);

  //   interface IFormInput {
  // firstName:string;
  // lastName:string;
  // phone:string|number;
  // email?:string;

  // jobType:string;
  // jobSource:string;
  // jobDescription?:string;

  // address:string;
  // city:string;
  // state:string;
  // zipCode:string|number;
  // area:string;

  // startDate:string|number;
  // startTime:string|number;
  // endTime:string|number;
  // testSelect:string;
  // }
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",

      jobType: "",
      jobSource: "",
      jobDescription: "",

      address: "",
      city: "",
      state: "",
      zipCode: "",
      area: "",

      startDate: "",
      startTime: "",
      endTime: "",
      testSelect: "",
    },
  });
  const postData = async() => {
    await fetch('https://api.pipedrive.com/v1/dealFields?first_name&api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb',{
      method:'POST',
      body: JSON.stringify({
        "field_type": "text",
        "name": "First name",
        "options": "<string>",
        "add_visible_flag": true,
      }),
      headers: {
        "Content-type": "application/json",
         'Authorization': 'Bearer bf62c250a11167d3bfea260eee32d323fb8b9045'
      }
 
    })
    await fetch('https://api.pipedrive.com/v1/dealFields?last_name&api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb',{
      method:'POST',
      body: JSON.stringify({
        "field_type": "text",
        "name": "Last name",
        "options": "<string>",
        "add_visible_flag": true,
      }),
      headers: {
        "Content-type": "application/json",
         'Authorization': 'Bearer bf62c250a11167d3bfea260eee32d323fb8b9045'
      }
 
    })
    await fetch('https://api.pipedrive.com/v1/dealFields?phone&api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb',{
      method:'POST',
      body: JSON.stringify({
        "field_type": "phone",
        "name": "Phone",
        "options": "<string>",
        "add_visible_flag": true,
      }),
      headers: {
        "Content-type": "application/json",
         'Authorization': 'Bearer bf62c250a11167d3bfea260eee32d323fb8b9045'
      }
 
    })
    await fetch('https://api.pipedrive.com/v1/dealFields?email&api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb',{
      method:'POST',
      body: JSON.stringify({
        "field_type": "text",
        "name": "Email",
        "options": "<string>",
        "add_visible_flag": true,
      }),
      headers: {
        "Content-type": "application/json",
         'Authorization': 'Bearer bf62c250a11167d3bfea260eee32d323fb8b9045'
      }
 
    })

    await fetch('https://api.pipedrive.com/v1/dealFields?job_title&api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb',{
      method:'POST',
      body: JSON.stringify({
        "field_type": "text",
        "name": "Job Title",
        "options": "<string>",
        "add_visible_flag": true,
      }),
      headers: {
        "Content-type": "application/json",
         'Authorization': 'Bearer bf62c250a11167d3bfea260eee32d323fb8b9045'
      }
 
    })
    await fetch('https://api.pipedrive.com/v1/dealFields?job_source&api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb',{
      method:'POST',
      body: JSON.stringify({
        "field_type": "text",
        "name": "Job Source",
        "options": "<string>",
        "add_visible_flag": true,
      }),
      headers: {
        "Content-type": "application/json",
         'Authorization': 'Bearer bf62c250a11167d3bfea260eee32d323fb8b9045'
      }
 
    })
    await fetch('https://api.pipedrive.com/v1/dealFields?job_description&api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb',{
      method:'POST',
      body: JSON.stringify({
        "field_type": "text",
        "name": "Job Description",
        "options": "<string>",
        "add_visible_flag": true,
      }),
      headers: {
        "Content-type": "application/json",
         'Authorization': 'Bearer bf62c250a11167d3bfea260eee32d323fb8b9045'
      }
 
    })

    await fetch('https://api.pipedrive.com/v1/dealFields?address&api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb',{
      method:'POST',
      body: JSON.stringify({
        "field_type": "address",
        "name": "Address",
        "options": "<string>",
        "add_visible_flag": true,
      }),
      headers: {
        "Content-type": "application/json",
         'Authorization': 'Bearer bf62c250a11167d3bfea260eee32d323fb8b9045'
      }
 
    })
    await fetch('https://api.pipedrive.com/v1/dealFields?city&api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb',{
      method:'POST',
      body: JSON.stringify({
        "field_type": "address",
        "name": "City",
        "options": "<string>",
        "add_visible_flag": true,
      }),
      headers: {
        "Content-type": "application/json",
         'Authorization': 'Bearer bf62c250a11167d3bfea260eee32d323fb8b9045'
      }
 
    })
    await fetch('https://api.pipedrive.com/v1/dealFields?state&api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb',{
      method:'POST',
      body: JSON.stringify({
        "field_type": "text",
        "name": "State",
        "options": "<string>",
        "add_visible_flag": true,
      }),
      headers: {
        "Content-type": "application/json",
         'Authorization': 'Bearer bf62c250a11167d3bfea260eee32d323fb8b9045'
      }
 
    })
    await fetch('https://api.pipedrive.com/v1/dealFields?zip_code&api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb',{
      method:'POST',
      body: JSON.stringify({
        "field_type": "text",
        "name": "Zip-code",
        "options": "<string>",
        "add_visible_flag": true,
      }),
      headers: {
        "Content-type": "application/json",
         'Authorization': 'Bearer bf62c250a11167d3bfea260eee32d323fb8b9045'
      }
 
    })
    await fetch('https://api.pipedrive.com/v1/dealFields?area&api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb',{
      method:'POST',
      body: JSON.stringify({
        "field_type": "text",
        "name": "Area",
        "options": "<string>",
        "add_visible_flag": true,
      }),
      headers: {
        "Content-type": "application/json",
         'Authorization': 'Bearer bf62c250a11167d3bfea260eee32d323fb8b9045'
      }
 
    })

    await fetch('https://api.pipedrive.com/v1/dealFields?start_date&api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb',{
      method:'POST',
      body: JSON.stringify({
        "field_type": "date",
        "name": "Start Date",
        "options": "<string>",
        "add_visible_flag": true,
      }),
      headers: {
        "Content-type": "application/json",
         'Authorization': 'Bearer bf62c250a11167d3bfea260eee32d323fb8b9045'
      }
 
    })

    await fetch('https://api.pipedrive.com/v1/dealFields?start_time&api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb',{
      method:'POST',
      body: JSON.stringify({
        "field_type": "time",
        "name": "Start time",
        "options": "<string>",
        "add_visible_flag": true,
      }),
      headers: {
        "Content-type": "application/json",
         'Authorization': 'Bearer bf62c250a11167d3bfea260eee32d323fb8b9045'
      }
 
    })
    await fetch('https://api.pipedrive.com/v1/dealFields?end_time&api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb',{
      method:'POST',
      body: JSON.stringify({
        "field_type": "time",
        "name": "End time",
        "options": "<string>",
        "add_visible_flag": true,
      }),
      headers: {
        "Content-type": "application/json",
         'Authorization': 'Bearer bf62c250a11167d3bfea260eee32d323fb8b9045'
      }
 
    })
    await fetch('https://api.pipedrive.com/v1/dealFields?test_select&api_token=c08209f03011b83c4d15cab4db139a4cc8287bbb',{
      method:'POST',
      body: JSON.stringify({
        "field_type": "text",
        "name": "Test Select",
        "options": "<string>",
        "add_visible_flag": true,
      }),
      headers: {
        "Content-type": "application/json",
         'Authorization': 'Bearer bf62c250a11167d3bfea260eee32d323fb8b9045'
      }
 
    })

  };
  const onSubmit = (event, data) => {
    postData()
    // event.preventDefault();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="form_wrapper" onSubmit={handleSubmit(onSubmit)}>
        <FormBox
          formBoxTitle="Client details"
          firstNameReg={register("firstName")}
          lastNameReg={register("lastName")}
          phoneReg={register("phone")}
          emailReg={register("email")}
        />
        <FormBox
          formBoxTitle="Job details"
          jobTypeReg={register("jobType")}
          jobSourceReg={register("jobSource")}
          jobDescriptionReg={register("jobDescription")}
        />
        <FormBox
          formBoxTitle="Service location"
          addressReg={register("address")}
          cityReg={register("city")}
          stateReg={register("state")}
          zipCodeReg={register("zipCode")}
          areaReg={register("area")}
        />
        <FormBox
          formBoxTitle="Scheduled"
          startDateReg={register("startDate")}
          startTimeReg={register("startTime")}
          endTimeReg={register("endTime")}
          testSelectReg={register("testSelect")}
        />
        <div className="button_wrapper">
          <Button className="create_button" type="submit" onClick={postData} buttonName="Create" />
          <Button className="reset_button" type="button" buttonName="Reset" />
        </div>
      </form>
    </div>
  );
}

export default App;
