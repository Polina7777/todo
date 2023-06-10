import React from "react";
import Input from "../inputs/Input.js";
import './FormBox.css'


export function FormBox({formBoxTitle,firstNameReg,lastNameReg,phoneReg,emailReg,jobTypeReg,jobDescriptionReg,jobSourceReg,addressReg,cityReg,stateReg,zipCodeReg,areaReg,startDateReg,startTimeReg,endTimeReg,testSelectReg}){
   if (formBoxTitle === 'Client details') {
    return <div className='form_box'>
   <h3 className="form_title">{formBoxTitle}</h3>  
  <div className="inputs_wrapper">
 <Input className='first-name_input' type='text' placeholder='First name' register={firstNameReg} />
 <Input className='last-name_input' type='text' placeholder='Last name' register={lastNameReg}/>
 </div>
 <Input className='phone_input' type='number' placeholder='Phone' register={phoneReg}/>
 <Input className='email_input' type='email' placeholder='Email' register={emailReg} />
 </div>}
 else if(formBoxTitle === 'Job details'){
    return <div className='form_box'>
    <h3 className="form_title">{formBoxTitle}</h3>  
   <div className="inputs_wrapper">
  <Input className='job-type_input select_input' type='text' placeholder='Job type' register={jobTypeReg}/>
  <Input className='job-source_input select_input' type='text' placeholder='Job source' register={jobSourceReg}/>
  </div>
  <Input className='job-description_input' type='text' placeholder='Job description(optional)' register={jobDescriptionReg}/>
  </div>
 }
 else if(formBoxTitle === 'Service location'){
    return <div className='form_box'>
  <h3 className="form_title">{formBoxTitle}</h3>  
  <Input className='address_input' type='text' placeholder='Address' register={addressReg}/>
  <Input className='city_input' type='text' placeholder='City' register={cityReg}/>
  <Input className='state_input' type='text' placeholder='State' register={stateReg}/>
  <div className="inputs_wrapper">
  <Input className='zip-code_input' type='number' placeholder='Zip code' register={zipCodeReg}/>
  <Input className='area_input select_input' type='text' placeholder='Area' register={areaReg}/>
  </div>
  </div>
 } else if (formBoxTitle === 'Scheduled'){
    return <div className='form_box'>
        <h3 className="form_title">{formBoxTitle}</h3>  
    <Input className='start-date_input' type='date' placeholder='Start date' register={startDateReg}/>
    <div className="inputs_wrapper">
    <Input className='start-time_input' type='time' placeholder='Start time' register={startTimeReg}/>
    <Input className='end-time_input' type='time' placeholder='End time' register={endTimeReg}/>
    </div>
      <Input className='test-select_input select_input' type='text' placeholder='Test select' register={testSelectReg}/>
     </div>
 }else {
   return  null
 }

}
export default FormBox