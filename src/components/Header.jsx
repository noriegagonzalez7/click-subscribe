import * as React from "react"
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container } from "@material-ui/core"
import { Height, Home } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"
import logo from '../clicksuscribe.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck, faCoffee, faIdBadge, faShoppingBag, faShoppingCart, faTicketAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />

const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`,
      },
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    b1: {
        textDecoration: `none`,
        color: `white`,
        backgroundColor: `#3f51b5`
    },
    b2: {
        textDecoration: `none`,
        color: `white`,
        backgroundColor: `#DB9635`
    },
    b3: {
        textDecoration: `none`,
        color: `white`,
        backgroundColor: `#68953B`
    },
    b4: {
        textDecoration: `none`,
        color: `white`,
        backgroundColor: `#C00F2C`,
        Height: `100%`
    },
    b5: {
        textDecoration: `none`,
        color: `white`,
        backgroundColor: `#4B7BAB`
    },
    searchbutton: {
        width: `8%`,
        alignSelf: `right`,
        backgroundColor: "#3f51b5",
        color: `white`
    }

  });

const navLinks = [
    { title: `Ver todos los productos`, path: `/productos`, classN: `b1`, iconN: faShoppingBag},
    { title: `Cliente`, path: `/cliente`, classN: `b2`, iconN: faIdBadge },
    { title: `siclick`, path: `/siclick`, classN: `b3`, iconN: faClipboardCheck },
    { title: `Soporte`, path: `/soporte`, classN: `b4`, iconN: faTicketAlt },
    { title: `Carrito`, path: `/carrito`, classN: `b5`, iconN: faShoppingCart },
    { title: `Perfil`, path: `/perfil`, classN: `b4` ,iconN: faUserAlt}
  ]

  const Header = () => {
    const classes = useStyles();
    return (
        
            <AppBar position="static">
                <Toolbar>
                    <Container maxWidth="xl" className={classes.navbarDisplayFlex} style={{height: "70px"}}>
                        <IconButton edge="start" color="inherit" aria-label="home">
                            <img src={logo} className="App-logo" alt="logo" style={{display: "absolute", height:"120px", marginTop:"50px", width:"330px"}}/>
                        </IconButton>
                        <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                            {navLinks.map(({ title, path, classN, iconN }) => (
                            <a href={path} key={title} className={classes[classN]} icon={iconN}>
                                
                                <ListItem button>
                                    <FontAwesomeIcon icon={iconN} />
                                <ListItemText primary={title} style={{marginLeft:"5px"}}/>
                                </ListItem>
                            </a>
                            ))}
                        </List>
                    </Container>
                </Toolbar>
                <Container style={{display: "flex", marginLeft: "600px", paddingBottom: "10px", height: "50px"}}>
                    <input style={{width: "90%"}}></input>
                    <button className={classes.searchbutton}>Buscar</button>
                </Container>
            </AppBar>
    )
  }
  export default Header