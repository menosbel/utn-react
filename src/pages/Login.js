import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import firebase from '../config/firebase';
import { useHistory } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Input from '../components/Input';


function Login() {
  const history = useHistory()
  const [form, setForm] = useState({email:'', password:''});
  const[spinner, setSpinner] = useState(false)
  
  const handleSubmit = (e) => {
    console.log('HanldeSubmit', form)
    setSpinner(true)
    firebase.auth.signInWithEmailAndPassword(form.email, form.password)
    .then(data=>{
      console.log('data', data)
      history.push("/")
      setSpinner(false)
    })
    .catch(err=>{
      console.log('error', err)
      setSpinner(false)
    })
    
    e.preventDefault();
  }

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]:value
    })
  }
  return (
    <div>
      <h2 className="my-5">Ingresar</h2>
      <Form onSubmit={handleSubmit}>
        <Input label="Email" type="email" placeholder="Ingrese su email" name="email" value={form.email} change={handleChange}/>
        <Input label="Contraseña" type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} change={handleChange}/>
        <Button variant="primary" type="submit">
        {
          spinner &&
          <Spinner animation="border" variant="light" size="sm" style={{marginRight: "5px"}}/>
        }
          Ingresar
        </Button>
      </Form>
    </div>
  );
}

export default Login;
