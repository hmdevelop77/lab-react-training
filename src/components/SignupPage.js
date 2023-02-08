import React, { useState } from 'react';
import { Form, FormGroup, Label, Input,Button } from 'reactstrap';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleNationalityChange(event) {
    setNationality(event.target.value);
  }
  function checkEmail(){
    if (email.includes('@') && email.includes('.')) {
        return 'green';
      } else {
        return 'red';
      }
  }
  function checkPassword() {
    if (password.length >= 8) {
      return 'green';
    } else {
      return 'red';
    }
  }

  function Greetings() {
    if (nationality === 'en') {
      return 'hello';
    } else if (nationality === 'de') {
      return 'hallo';
    } else {
      return 'bonjour';
    }
  }

  return (
    <>
      {/* <form>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="nationality">Nationality</label>
        <select
          id="nationality"
          value={nationality}
          onChange={handleNationalityChange}
        >
          <option value="en">English</option>
          <option value="de">Deutsh</option>
          <option value="fr">French</option>
        </select>
        <p>{Greetings}</p>
        <p>Your email is:</p>
      </form> */}
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            style={{ borderColor: checkEmail() }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{borderColor:checkPassword()}}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nationality">Select</Label>
          <select
          id="nationality"
          value={nationality}
          onChange={handleNationalityChange}
        >
          <option value="en">English</option>
          <option value="de">Deutsh</option>
          <option value="fr">French</option>
        </select>
        </FormGroup>
        <Button type="submit">
    Submit
  </Button>
  <p>{Greetings()}</p>
        <p>Your email is : {email}</p>
      </Form> 
    </>
  );
}
