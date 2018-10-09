import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Calculator from './Calculator'
import SourceImage from "./SourceImage"

const styles = (theme) => ({
    toolbar: theme.mixins.toolbar,
})

function App(props) {
    const {classes, module} = props

    return <div>
        <div>
        <AppBar position="fixed">
            <ToolBar>
                <Typography variant="title" color="inherit">
                    Fibonacci
                </Typography>
            </ToolBar>
        </AppBar>
        </div>
        <div className={classes.toolbar}></div>
        <Grid container justify="center">
            <SourceImage module={module}/>
        </Grid>
    </div>
}

export default withStyles(styles)(App)