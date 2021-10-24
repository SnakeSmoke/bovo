import React from "react"
import Box from '@mui/material/Box';  
import Paper from '@mui/material/Paper';
import ButtonAppBar from './ButtonAppBar';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 50,
    display: "flex"
  },
  fill: {
    position: "fixed" /* or absolute */,
    top: "50%",
  },
  iconContainer: {
    textAlign: "center",
  },
  center: {
    display: "inline-block",
    marginLeft: "68px",
    margin: "20px",
  },
}))

const Layout = props => {
  const classes = useStyles()

  return (
        <Box>
          <ButtonAppBar />
            <Paper display="flex" elevation={20} className={classes.root}>
              {props.children}
            </Paper>
        </Box>
  )
}

export default Layout
