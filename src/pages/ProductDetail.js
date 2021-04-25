import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import firebase from '../config/firebase';
import Spinner from 'react-bootstrap/Spinner';
import Alerta from '../components/Alerta'

function Product(props) {
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true);
    const styles ={
        spinner:{
          display:"flex",
          marginTop:"200px",
          marginLeft:"500px" 
        }
      }

    let history = useHistory();

    const goBack = () => {
        history.push("/");
    }

    const buy = () => {
        document.getElementById('alerta').style.display = "block";
    }

    useEffect(()=>{
        firebase.db.collection('productos').doc(props.match.params.id)
        .get()
        .then(querySnapshot=>{
            console.log(querySnapshot)
            setProducto(querySnapshot);
            setLoading(false)
        })
    }, []);

    // useEffect( () => {
    //     fetch(`https://jsonfy.com/items/${props.match.params.id}`)
    //     .then(res => res.json())
    //     .then(resJson => setProducto(resJson[0]))
    // }, []);

    if (loading == true){
        return(
          <div style={styles.spinner}>
            <Spinner animation="border" role="status" />
          </div>
        )
    } else {
        return(
            
            <div>
                <Alerta />
                {
                    producto
                    &&
                    <>
                    <h2>{producto.data().nombre}</h2>
                    <p>{producto.data().descripcion}</p>
                    <h4>USD {producto.data().precio}</h4>
                    <hr />
                    <Button onClick={buy} variant="info" className="mr-3">Comprar</Button>
                    <Button onClick={goBack} variant="secondary">Volver atras</Button>
                    </>
                }
            </div>
        )
    }
}



export default Product;