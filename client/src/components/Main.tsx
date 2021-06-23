import React, { useEffect } from 'react'
import { ReactNode } from 'react'
import Post from './Post'
import * as Types from './Types'
import { Grid } from '@material-ui/core'

export default function Main(props: Types.MainType) {

    let posts: ReactNode[] = props.posts.map((element: Types.PostType, i) => <Post key={i} id={element.id} author={element.author} date={element.date} title={element.title} header={element.header} />)
    //useEffect(() => { document.title = 'Blog' })

    return (
        <div>
            <Grid
                container
                direction='column'
                spacing={3}
                justify='center'
                alignItems='center'
                style={{ width: '100%', padding: '30px' }}
            >
                {posts}
            </Grid>
        </div>
    )
}

