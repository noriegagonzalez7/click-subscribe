import { List, ListItem, ListItemText, Container, Divider } from "@material-ui/core"
import './App.css';
import productos from './Productos.js';

function App() {
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
                <select style={{width: "200px", marginLeft: "72%", height: "30px"}}>
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
                            {productos.map(({ nombre, descripcion, fabricante, id, precio, imagen }) => (
                                <ListItem>
                                  <img src={imagen} alt="product-image" style={{display: "absolute", height:"120px", marginTop:"50px", width:"120px"}}/>
                                  <ListItemText primary={nombre} secondary={
                                  <div>
                                    <div><strong>Descripción: </strong>{descripcion}</div>
                                    <div><strong>Fabricante: </strong>{fabricante}</div>
                                    <div><strong>Artículo ID: </strong>{id}</div>
                                    <div><strong>Precio: </strong>${precio}</div>
                                  </div>} style={{marginLeft:"5px"}}/>
                                </ListItem>
                            ))}
                        </List>
      </Container>
      
      </body>
    </div>
  );
}

export default App;
