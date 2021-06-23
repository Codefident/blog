import React, { useEffect } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Home } from '@material-ui/icons';

import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export default function Bar() {
    const classes = useStyles();
    const history = useHistory();

    function homeButtonClick() {
        let path = '/';
        history.push(path);
    }

    function createPostButtonClick() {
        let path = '/create-new-post';
        history.push(path)
    }

    useEffect(() => { document.title = 'Blog'; });

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton onClick={homeButtonClick} edge='start' className={classes.menuButton} color='inherit'>
                        <Home />
                    </IconButton>
                    <Typography variant='h5' className={classes.title}>
                        Codefident's blog
                    </Typography>
                    <Button color='inherit' onClick={createPostButtonClick}>Create new post</Button>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}