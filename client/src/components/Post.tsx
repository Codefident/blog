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

    const handleDate = new Date(props.date)
    const date = generate2digits(handleDate.getDate()) + '.' + generate2digits(handleDate.getMonth() + 1) + '.' + handleDate.getFullYear()

    function generate2digits(number: number): string {
        if (number < 10)
            return '0' + number
        return number.toString()
    }

    function buttonClick(e: object) {
        console.log(typeof e)
    }

    return (
        <Grid item>
            <ButtonBase onClick={buttonClick}>
                <Card className={classes.card} elevation={5}>

                    <Grid container direction='row' wrap='nowrap' spacing={1}>

                        <Grid item xs>
                            <Box className={classes.box} />
                        </Grid>

                        <Grid item xs={8} container direction='column' alignItems='flex-start'>
                            <Grid item>
                                <Typography variant='h5' gutterBottom>{props.title}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='subtitle1'>{props.header}</Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs container direction='column' justify='center' alignItems='center'>
                            <Grid item>
                                <Typography component='em'>{props.author}</Typography>
                                <Typography>{date}</Typography>
                            </Grid>
                        </Grid>

                    </Grid>

                </Card>
            </ButtonBase>
        </Grid>
    );
}
