import * as React from "react"
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText } from "@material-ui/core"
import { Home } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`
    }
  });

const navLinks = [
    { title: `Ver todos los productos`, path: `/productos` },
    { title: `Cliente`, path: `/cliente` },
    { title: `siclick`, path: `/siclick` },
    { title: `Soporte`, path: `/soporte` },
    { title: `Carrito`, path: `/carrito` },
    { title: `Perfil`, path: `/perfil`}
  ]

  const Header = () => {
    const classes = useStyles();
    return (
      <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="home">
          <Home fontSize="large" />
        </IconButton>
        <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
            {navLinks.map(({ title, path }) => (
            <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                <ListItemText primary={title} />
                </ListItem>
            </a>
            ))}
        </List>
        </Toolbar>
      </AppBar>
    )
  }
  export default Header