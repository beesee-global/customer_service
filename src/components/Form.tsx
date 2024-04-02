import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { DataModal } from '../models/Data';
import { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
// import { Form, Field } from 'react-final-form'

interface StudentProps {
  children?: React.ReactNode;
}

const MainForm: React.FC<StudentProps> = ({}) => {

const initialFormState: DataModal = {
    FirstName: '',
    LastName: '',
    Email: '',
    Address: '',
};

const [formState, setFormState] = useState<DataModal>(initialFormState);

  const handleOnSubmit = (e: any) => {
    const formEle = document.querySelector("form")
    e.preventDefault()
    setFormState(initialFormState)
    if(formEle != null){
      const formData = new FormData(formEle)
      fetch("https://script.google.com/macros/s/AKfycbxjsE5dbDKkZTwNCiadf01RvQEG2cpgf0W5JU5f4R8QvDY1j3cBDlsO9PFiBN2W-mR_/exec", {
      method: "POST",
      body: formData
    }).then((res) => res.json()).then((data) => {
      console.log(data)
      setFormState(initialFormState)
    }).catch((error) => console.log(error))
    }
    
  }

  const handleInputChange= (e: any) => {
    setFormState(e)
  }

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleOnSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              First Name
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              name="FirstName"
              value={formState.FirstName}
              onChange={handleInputChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Last Name
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              name="LastName"
              value={formState.LastName}
              onChange={handleInputChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Email
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="email"
              name="Email"
              value={formState.Email}
              onChange={handleInputChange}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Address
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              name="Address"
              value={formState.Address}
              onChange={handleInputChange}
            />
          </InputGroup>
          <div style={{display: 'flex', justifyContent: 'end'}}>
            <Button type='submit' variant="primary me-2">Submit</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>

  )
}

export default MainForm;