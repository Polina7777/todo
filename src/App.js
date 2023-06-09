import {useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import AppExtensionsSDK from '@pipedrive/app-extensions-sdk';
import Button from './button/Button.js'
import './App.css';
import FormBox from './form-box/FormBox.js';



function App() {
  const initializeSdk = async () => {
    const sdk = await new AppExtensionsSDK().initialize();

    const { status } = await sdk.execute(Command.OPEN_MODAL, {
      type: Modal.CUSTOM_MODAL,
      action_id: '8b5947e5-580a-405f-b443-8be14629dc49'
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
   const { control, handleSubmit ,register} = useForm({
    defaultValues: {
      firstName:"",
      lastName:"",
      phone:"",
      email:"",
    
      jobType:"",
      jobSource:"",
      jobDescription:"",
    
      address:"",
      city:"",
      state:"",
      zipCode:"",
      area:"",
    
      startDate:"",
      startTime:"",
      endTime:"",
      testSelect:"",
    }
  });
  const onSubmit = (event,data) =>{
    event.preventDefault()
    console.log(data);
  } 
  return (
    <div className="App">
     <form className='form_wrapper' onSubmit={handleSubmit(onSubmit)}>
    <FormBox formBoxTitle='Client details' firstNameReg={register('firstName')} lastNameReg={register('lastName')} phoneReg={register('phone')} emailReg={register('email')}/>
     <FormBox formBoxTitle='Job details' jobTypeReg={register('jobType')} jobSourceReg={register('jobSource')} jobDescriptionReg={register('jobDescription')} />
     <FormBox formBoxTitle='Service location' addressReg={register('address')} cityReg={register('city')} stateReg={register('state')} zipCodeReg={register('zipCode')} areaReg={register('area')}/>
     <FormBox formBoxTitle='Scheduled' startDateReg={register('startDate')} startTimeReg={register('startTime')} endTimeReg={register('endTime')} testSelectReg={register('testSelect')}/>
     <div className='button_wrapper'>
      <Button className='create_button' type='submit' buttonName='Create'/>
      <Button className='reset_button' type='button' buttonName='Reset'/>
     </div>
     </form>
     </div>
  );
}

export default App;
