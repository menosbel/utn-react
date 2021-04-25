import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import firebase from '../config/firebase';
import Spinner from 'react-bootstrap/Spinner';
import Alerta from '../components/Alerta'

function Home() {
  const [productos, setProductos] = useState();
  const [loading, setLoading] = useState(true);
  const styles ={
    imagen:{
      maxHeight:"200px"
    },
    card:{
      width: "18rem"
    },
    spinner:{
      display:"flex",
      marginTop:"200px",
      marginLeft:"500px" 
    }
  }

  const buy = () => {
    document.getElementById("alerta").style.display = "block";
  };

  useEffect(()=>{
    firebase.db.collection('productos')
    .get()
    .then(querySnapshot=>{
      console.log(querySnapshot.docs)
      setProductos(querySnapshot.docs);
      setLoading(false)
    })
  }, []);

  // useEffect(() => {
  //   fetch("https://jsonfy.com/items")
  //     .then((resultado) => resultado.json())
  //     .then((resultadoJson) => setProductos(resultadoJson));
  // }, []);
  if (loading == true){
      return(
        <div style={styles.spinner}>
          <Spinner animation="border" role="status" />
        </div>
      )
  } else {
    return (
      <div>
        <h2 className="my-5">Lista de Productos</h2>
        <div className="row">
          <div className="col-12">
            <Alerta />
          </div>
        </div>
        <div className="row mb-5">
          {productos &&
            productos.map((producto) => {
              return (
                <>
                {/* no me funciona lo de las unique keys */}
                    <div key={producto.id} className="col-sm-4 my-3">
                      <Card style={styles.card}>
                        <Card.Body>
                          <Card.Img variant="top" src={producto.data().foto} style={styles.imagen}/>
                          <Card.Title className="mt-3">{producto.data().nombre}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            USD {producto.data().precio}
                          </Card.Subtitle>
                          <Card.Text>{producto.data().descripcion}</Card.Text>
                          <Card.Link onClick={buy} href="#">
                            Comprar
                          </Card.Link>
                          <Card.Link href="#">
                            <Link to={`/producto/${producto.id}`}>
                              Ver detalles
                            </Link>
                          </Card.Link>
                        </Card.Body>
                      </Card>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    );
  }
}



export default Home;
