import React from 'react';
import { PostType } from './Types';
import { Typography, Grid, Card, ButtonBase, makeStyles, createStyles, Theme, Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        card: {
            width: '50vw',
            minWidth: '500px',
            maxWidth: '1000px',
            padding: theme.spacing(1)
        },
        box: {
            width: '200px',
            height: '100px',
            background: 'red',
            display: 'inline-block'
        }
    })
})

export default function Post(props: PostType) {

    const classes = useStyles()

    function buttonClick(e: any) {
        console.log(e)
    }

    return (
        <Grid item>
            <ButtonBase onClick={buttonClick}>
                <Card className={classes.card} elevation={5}>

                    <Grid container direction='row' wrap='nowrap' spacing={1}>

                        <Grid item>
                            <Box className={classes.box} />
                        </Grid>

                        <Grid item xs={12} container direction='column' alignItems='flex-start'>
                            <Grid item>
                                <Typography variant='h5' gutterBottom>{props.title}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='subtitle1'>{props.header}</Typography>
                            </Grid>
                        </Grid>

                    </Grid>

                </Card>
            </ButtonBase >
        </Grid >
    );
}
