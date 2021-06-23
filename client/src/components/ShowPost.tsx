import React, { Component, useEffect, useState } from 'react';
//import { ShowPostType } from './Types';
import { useParams } from 'react-router-dom';

export default function ShowPost(props: any) {

    const params: { id: string } = useParams();
    const [postData, setPostData] = useState({
        id: params.id,
        author: '',
        date: null,
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
                    setPostData({
                        id: params.id,
                        author: data.author,
                        date: data.date,
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
                date: null,
                title: '',
                header: '',
                text: '<strong>Connection error</strong><hr/>' + err
            });
        }

        return () => abortController.abort();
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: postData.text }}></div>
    );
}
