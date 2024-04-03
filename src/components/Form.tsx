import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { Badge, FloatingLabel, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Form as FinalForm, Field } from 'react-final-form'

interface StudentProps {
  children?: React.ReactNode;
}

const MainForm: React.FC<StudentProps> = ({}) => {

const [resetField, setResetField] = useState(false);

  const handleOnSubmit = () => {
    setResetField(!resetField)
    const formEle = document.querySelector("form")
    if(formEle != null){
      const formData = new FormData(formEle)
      fetch("https://script.google.com/macros/s/AKfycbz6V7A_4N9P4PNeoQmV1Gk-4Jr14TqNxCsEdJ1zoLG6PoyHcVt3vRZZbHBNkNPmPPUV7Q/exec", {
      method: "POST",
      body: formData
    }).then((res) => res.json()).then((data) => {
      console.log(data)
    }).catch((error) => console.log(error))
    }
  }

  const required = (value: any) => (value ? undefined : (<Badge bg="danger">Required</Badge>))

  return (
<FinalForm
    onSubmit={handleOnSubmit}
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
                  <Field name="FirstName" validate={required}>
                    {({ input, meta }) => (
                      <>
                        <Form.Control {...input} type="text" placeholder="Enter your first name" />              
                        {meta.touched && meta.error && <span 
                        style={{
                          color: 'red', 
                          marginTop: '-19%',
                          marginLeft: '55%',
                          position: 'absolute', 
                          zIndex: '1'
                          }}
                          >{meta.error}</span>}  
                      </>
                    )}
                  </Field>
                </FloatingLabel>
                <FloatingLabel controlId="LastName" label="Last Name">
                  <Field name="LastName" validate={required}>
                    {({ input, meta }) => (
                      <>
                      <Form.Control {...input} type="text" placeholder="Enter your last name" />
                      {meta.touched && meta.error && <span 
                      style={{
                        color: 'red', 
                        marginTop: '-19%',
                        marginLeft: '55%',
                        position: 'absolute', 
                        zIndex: '1'
                        }}
                      >{meta.error}</span>}  
                      </>
                      
                    )}
                  </Field>
                </FloatingLabel>
                <FloatingLabel controlId="Email" label="Email">
                  <Field name="Email" validate={required}>
                    {({ input, meta }) => (
                      <>
                        <Form.Control {...input} type="email" placeholder="Enter your email" />
                        {meta.touched && meta.error && <span 
                        style={{
                          color: 'red', 
                          marginTop: '-19%',
                          marginLeft: '55%',
                          position: 'absolute', 
                          zIndex: '1'
                          }}
                        >{meta.error}</span>}  
                      </>
                      
                    )}
                  </Field>
                </FloatingLabel>
                <FloatingLabel controlId="Address" label="Address">
                  <Field name="Address" validate={required}>
                    {({ input, meta }) => (
                      <>
                        <Form.Control {...input} type="text" placeholder="Enter your address" />
                        {meta.touched && meta.error && <span style={{
                          color: 'red', 
                          marginTop: '-19%',
                          marginLeft: '55%',
                          position: 'absolute', 
                          zIndex: '1'
                          }}>{meta.error}</span>}  
                      </>
                      
                    )}
                  </Field>
                </FloatingLabel>
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