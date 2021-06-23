import { Card, Typography, TypographyVariant, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import React, { Component, useEffect, useState } from 'react';
//import { ShowPostType } from './Types';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        padding: theme.spacing(3),
        width: '100%',
        margin: 0
    },
    bars: {
        margin: 0
    },
    card: {
        padding: theme.spacing(2)
    },
    header: {
        fontWeight: 'bold',
        margin: '30px 0'
    }
}))

export default function ShowPost(props: any) {

    const classes = useStyles();
    const params: { id: string } = useParams();
    const [postData, setPostData] = useState({
        id: params.id,
        author: '',
        date: {
            date: '',
            time: ''
        },
        title: '',
        header: '',
        text: ''
    });

    useEffect(() => {
        console.log('fetch')
        const abortController = new AbortController();
        try {
            fetch('http://127.0.0.1:3001/show-post?id=' + params.id, { signal: abortController.signal })
                .then(response => response.json())
                .then(data => {

                    document.title = data.title;

                    const generate2digits = (number: number): string => {
                        if (number < 10)
                            return '0' + number;
                        return number.toString();
                    }

                    const handleDate = new Date(data.date);
                    const date = generate2digits(handleDate.getDate()) + '.' + generate2digits(handleDate.getMonth() + 1) + '.' + handleDate.getFullYear()
                    const time = generate2digits(handleDate.getHours()) + ':' + generate2digits(handleDate.getMinutes())

                    setPostData({
                        id: params.id,
                        author: data.author,
                        date: {
                            date: date,
                            time: time
                        },
                        title: data.title,
                        header: data.header,
                        text: data.text
                    });
                });
        }
        catch (err) {
            setPostData({
                id: params.id,
                author: '',
                date: { date: '', time: '' },
                title: '',
                header: '',
                text: '<strong>Connection error</strong><hr/>' + err
            });
        }

        return () => abortController.abort();
    }, []);

    return (
        <Grid container className={classes.container} xs={12}>
            <Grid item xs className={classes.bars}></Grid>
            <Grid item sm={10}>
                <Card className={classes.card} elevation={5}>
                    <Typography variant='h1'>{postData.title}</Typography>
                    <Typography variant='overline'>{postData.author}</Typography>
                    <Typography variant='overline'> {postData.date.date} {postData.date.time}</Typography>
                    <Typography variant='h6' className={classes.header}>{postData.header}</Typography>
                    <Typography variant='body1' dangerouslySetInnerHTML={{ __html: postData.text }} />
                </Card>
            </Grid>
            <Grid item xs className={classes.bars}></Grid>
        </Grid>
    );
}
