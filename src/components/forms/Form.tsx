import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useContext, useEffect, useState } from 'react';
import { Badge, FloatingLabel } from 'react-bootstrap';
import { Form as FinalForm, Field } from 'react-final-form';
import NotyfContext from '../context/NotyfContext';
import { Notyf } from 'notyf';
import Select from 'react-select';

interface StudentProps {
  children?: React.ReactNode;
}

const MainForm: React.FC<StudentProps> = ({}) => {

const [resetField, setResetField] = useState(false);
const [validated, setValidated] = useState(false);

  const handleOnSubmit = (event: any) => {
    setResetField(!resetField)
    setValidated(true)
    const formEle = document.querySelector("form")
    if(formEle != null){
      const formData = new FormData(formEle)

      if (formEle.checkValidity() === false) {
        event.stopPropagation(); // Prevent propagation of the submit event
      }
      // Update the validated state
      setValidated(true);

      fetch("https://script.google.com/macros/s/AKfycbwOt-ZlBIL3pALSC4IeGsYfyDCQb4PeQy0JAaqpCNgpC-tOVRkDII-GGpXXlFvsgUglOQ/exec", {
      method: "POST",
      body: formData
    }).then((res) => 
    {
      res.json()
    }
    ).then((data) => {
      console.log(data)
    }).catch((error) => console.log(error))
    }
  }

  const required = (value: any) => (value ? undefined : (<Badge bg="danger">Required</Badge>))
  // const required = (value: any) => (value ? undefined : 'Required')
  const values = [
    {label:'Male', value:'male'},
    {label:'Female', value:'female'}
  ]

  return (
<FinalForm
    onSubmit={handleOnSubmit}
    validateOnBlur
    validateOnChange
    validated={true}
  >
    {({handleSubmit, form}) => {
      useEffect(() => {
        form.reset()
      }, [resetField])
      return (
        <Card>
          <Card.Body>
              <Form onSubmit={handleSubmit}>
              <div style={{display: 'flex', gap: '3px', flexDirection: 'column'}}>
                <FloatingLabel controlId="FirstName" label="First Name">
                  <Field name="FirstName" validate={required} >
                    {({ input, meta }) => (
                      <>
                        <Form.Control {...input} type="text" placeholder="Enter your first name" autoComplete='off'/>  
                        <Form.Control.Feedback>Hey!</Form.Control.Feedback>       
                        {/* {meta.touched && meta.error && <span 
                        style={{
                          color: 'red', 
                          marginTop: '-19%',
                          marginLeft: '55%',
                          position: 'absolute', 
                          zIndex: '1'
                          }}
                          >{meta.error}</span>}   */}
                      </>
                    )}
                  </Field>
                </FloatingLabel>
                <FloatingLabel controlId="LastName" label="Last Name">
                  <Field name="LastName" validate={required}>
                    {({ input, meta }) => (
                      <>
                      <Form.Control {...input} type="text" placeholder="Enter your last name" autoComplete='off' />
                      {/* {meta.touched && meta.error && <span 
                      style={{
                        color: 'red', 
                        marginTop: '-19%',
                        marginLeft: '55%',
                        position: 'absolute', 
                        zIndex: '1'
                        }}
                      >{meta.error}</span>}   */}
                      </>
                      
                    )}
                  </Field>
                </FloatingLabel>
                
                <FloatingLabel controlId="Email" label="Email">
                  <Field name="Email" validate={required}>
                    {({ input, meta }) => (
                      <>
                        <Form.Control {...input} type="email" placeholder="Enter your email" autoComplete='off' />
                        {/* {meta.touched && meta.error && <span 
                        style={{
                          color: 'red', 
                          marginTop: '-19%',
                          marginLeft: '55%',
                          position: 'absolute', 
                          zIndex: '1'
                          }}
                        >{meta.error}</span>}   */}
                      </>
                      
                    )}
                  </Field>
                </FloatingLabel>
                
                <FloatingLabel controlId="Address" label="Address" style={{zIndex: '0'}}>
                  <Field name="Address" validate={required}>
                    {({ input, meta }) => (
                      <>
                        <Form.Control {...input} type="text" placeholder="Enter your address" autoComplete='off' />
                        {/* {meta.touched && meta.error && <span style={{
                          color: 'red', 
                          marginTop: '-19%',
                          marginLeft: '55%',
                          position: 'absolute', 
                          zIndex: '1'
                          }}>{meta.error}</span>}   */}
                      </>
                      
                    )}
                  </Field>
                </FloatingLabel>

                <Field name='Gender' validate={required}>
                  {({input, meta }) => (
                    <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Gender"
                  >
                    <Form.Select {...input}>
                      <option value="">Select...</option>
                      {
                        values.map((data) => 
                          <option value={data.value}>{data.label}</option>
                        )
                      }
                    </Form.Select>
                      {/* {meta.touched && meta.error && <span style={{
                        color: 'red', 
                        marginTop: '-19%',
                        marginLeft: '55%',
                        position: 'absolute', 
                        zIndex: '1'
                        }}>{meta.error}</span>}   */}
                  </FloatingLabel>
                  )}
                </Field>
                
              </div>
              
              <div style={{display: 'flex', justifyContent: 'start', marginTop: '0.8em'}}>
                <Button type='submit'>Submit</Button>
              </div>
                
              </Form>
              </Card.Body>
        </Card>
      )
    }}
  </FinalForm>
  )
}

export default MainForm;


//   <div style={{position: 'relative'}}>
                  //   <Select
                  //     className="basic-single"
                  //     classNamePrefix="select"
                  //     {...input}
                  //     options={values}
                  //     isSearchable={true}
                  //     isClearable={true}
                  //     isRtl={false}
                  //     placeholder='Gender'
                  //     styles={{
                  //       control: (provided) => ({
                  //         ...provided,
                  //         textAlign: 'left',
                  //       }),
                  //       option: (provided) => ({
                  //         ...provided,
                  //         textAlign: 'left'
                  //       }),
                  //       singleValue: (provided) => ({
                  //         ...provided,
                  //         textAlign: 'left',
                  //       }),
                  //     }}
                  //   />
                  //   {meta.touched && meta.error && <span 
                  //       style={{
                  //         color: 'red', 
                  //         marginTop: '-19%',
                  //         marginLeft: '55%',
                  //         position: 'absolute', 
                  //         zIndex: '1'
                  //         }}
                  //       >{meta.error}</span>} 
                  // </div>