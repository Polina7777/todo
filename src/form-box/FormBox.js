import React from "react";

import './FormBox.css'
import Input from "../inputs/Input.js";


// export enum FormBoxTitles {
//    clientDetails='Client details',
//    jobDetails='Job details',
//    serviceLocation='Service location',
//    scheduled ='Scheduled'
// }
// export interface FormProps {
//    formBoxTitle: FormBoxTitles;  
// }

import AppExtensionsSDK from '@pipedrive/app-extensions-sdk';
const sdk = await new AppExtensionsSDK().initialize();

export const FormBox = ({formBoxTitle})=>{

   if (formBoxTitle === 'Client details') {
    return <div className='form_box'>
   <h3 className="form_title">{formBoxTitle}</h3>  
  <div className="inputs_wrapper">
 <Input className='first-name_input' type='text' placeholder='First name'/>
 <Input className='last-name_input' type='text' placeholder='Last name'/>
 </div>
 <Input className='phone_input' type='number' placeholder='Phone'/>
 <Input className='email_input' type='email' placeholder='Email' />
 </div>}
 else if(formBoxTitle === 'Job details'){
    return <div className='form_box'>
    <h3 className="form_title">{formBoxTitle}</h3>  
   <div className="inputs_wrapper">
  <Input className='job-type_input select_input' type='text' placeholder='Job type'/>
  <Input className='job-source_input select_input' type='text' placeholder='Job source'/>
  </div>
  <Input className='job-description_input' type='text' placeholder='Job description(optional)'/>
  </div>
 }
 else if(formBoxTitle === 'Service location'){
    return <div className='form_box'>
  <h3 className="form_title">{formBoxTitle}</h3>  
  <Input className='address_input' type='text' placeholder='Address'/>
  <Input className='city_input' type='text' placeholder='City'/>
  <Input className='state_input' type='text' placeholder='State'/>
  <div className="inputs_wrapper">
  <Input className='zip-code_input' type='number' placeholder='Zip code'/>
  <Input className='area_input select_input' type='text' placeholder='Area'/>
  </div>
  </div>
 } else if (formBoxTitle === 'Scheduled'){
    return <div className='form_box'>
        <h3 className="form_title">{formBoxTitle}</h3>  
    <Input className='start-date_input' type='date' placeholder='Start date'/>
    <div className="inputs_wrapper">
    <Input className='start-time_input' type='time' placeholder='Start time'/>
    <Input className='end-time_input' type='time' placeholder='End time'/>
    </div>
      <Input className='test-select_input select_input' type='text' placeholder='Test select'/>
      </div>
 }

}
export default FormBox