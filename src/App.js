import { List, ListItem, ListItemText, Container, Divider } from "@material-ui/core"
import './App.css';
import productos from './Productos.js';
import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [searchTerm,setSearchTerm] = useState('')
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
      <Container style={{margin: "auto"}}>
          <div style={{fontSize:"40px", fontWeight: "bold"}}>
            <p>Suscripciones
              <label style={{marginLeft: "60%", fontSize: "20px", fontWeight: "normal"}}>Filtrar por:</label>
              <div>
                <select style={{width: "200px", marginLeft: "72%", height: "30px"}} onChange={
                        (event) =>{
                            setSearchTerm(event.target.value);
                        }
                    }>
                  <option value="" selected>Selecciona Fabricante</option>
                  <option value="autodesk">Autodesk</option>
                  <option value="microsoft">Microsoft</option>
                  <option value="vmware">VMWARE</option>
                </select>
              </div>
            </p>
          </div>
          <div >
            <label>Precios más IVA.</label>
          </div>
          <Divider style={{marginTop: "20px", height: "2px"}}></Divider>
          <Divider style={{marginTop: "15px", height: "2px"}}></Divider>
          <List component="productos" aria-labelledby="main navigation">
                            {productos.filter( (val) => {
                              if(searchTerm == "")
                              { 
                                return val;
                              }
                              else if(val.fabricante.toLowerCase().includes(searchTerm.toLowerCase()))
                              {
                                return val;
                              }
                            }).map(({ nombre, descripcion, fabricante, id, precio, imagen }) => (
                              <Container>
                                <ListItem>
                                  <img src={imagen} alt="product-image" style={{display: "absolute", height:"120px", marginTop:"50px", width:"120px"}}/>
                                  <Container style={{}}>
                                  <ListItemText style={{marginLeft:"5px", width: "500px"}} primary={nombre} secondary={
                                  <div>
                                    <div><strong>Descripción: </strong>{descripcion}</div>
                                    <div><strong>Fabricante: </strong>{fabricante}</div>
                                    <div><strong>Artículo ID: </strong>{id}</div>
                                    <div><strong>Precio: </strong>${precio}</div>
                                  </div>}/>
                                  </Container>
                                  <div style={{width: "600px", float: "right", backgroundColor: "#e5e5e5", height: "230px", marginTop: "15px", border: "solid", borderWidth:"2px", borderColor: "#b9b9b9"}}>
                                    <div style={{marginLeft:"20px"}}>
                                      <p><strong>Configura tus productos</strong></p>
                                      <p><strong>¿Cuántos quieres?</strong><a style={{color:"gray"}}> Disponible de 1 a 100</a></p>
                                      <button style={{backgroundColor: '#46a049', height: "30px", width:"35px", border: "none", borderTopLeftRadius: "10%", borderBottomLeftRadius: "10%"}}><FontAwesomeIcon style={{color: "white"}}icon={faShoppingCart}/></button>
                                      <input style={{height: "24px"}} placeholder="Número de licencias"></input>
                                      <p style={{marginLeft: "220px"}}>Total: $0.00</p>
                                      <button style={{marginLeft: "160px", backgroundColor:"#46a049", color:"white", height:"40px", width:"150px"}}>Agregar al carrito</button>
                                    </div>
                                  </div>
                                </ListItem>
                                
                                <Divider style={{marginTop: "20px", height: "2px"}}></Divider>
                              </Container>
                            ))}
                        </List>
      </Container>
      
      </body>
    </div>
  );
}

export default App;
