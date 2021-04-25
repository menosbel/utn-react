import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import firebase from '../config/firebase';
import { useHistory } from 'react-router-dom';
import Input from '../components/Input';


function Register() {
  const history = useHistory()
  const [form, setForm] = useState({nombre:'', apellido:'', email:'', password:''});
  const[spinner, setSpinner] = useState(false)
  
  const handleSubmit = (e) => {
    console.log('HanldeSubmit', form)
    setSpinner(true)
    firebase.auth.createUserWithEmailAndPassword(form.email, form.password)
    .then(data => {
      console.log("data", data.user.uid)
      firebase.db.collection("usuarios").add({
        nombre:form.nombre,
        apellido:form.apellido,
        email:form.email,
        userId:data.user.uid
      })
      .then(data=>{
        console.log('data database', data)
        setSpinner(false)
        history.push("/login")
      })
      .catch(error=>{
        console.log('error database', error)
        setSpinner(false)
      })
    })
    .catch(err=>{
      console.log("error", err)
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
      <h2 className="my-5">Registrarse</h2>
      <Form className="mb-5" onSubmit={handleSubmit}>
        <Input label="Nombre" type="text" placeholder="Ingrese su nombre" name="nombre" value={form.nombre} change={handleChange}/>
        <Input label="Apellido" type="text" placeholder="Ingrese su apellido" name="apellido" value={form.apellido} change={handleChange}/>
        <Input label="Email" type="email" placeholder="Ingrese su email" name="email" value={form.email} change={handleChange}/>
        <Input label="Contraseña" type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} change={handleChange}/>
        <Button variant="primary" type="submit">
          {
            spinner &&
            <Spinner animation="border" variant="light" size="sm" style={{marginRight: "5px"}}/>
          }
          
          Registrarse
        </Button>
      </Form>
    </div>
  );
}

export default Register;
