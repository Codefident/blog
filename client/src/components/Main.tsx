import React, { Component } from 'react'
import { ReactNode } from 'react'
import Bar from './Bar'
import Post from './Post'
import * as Types from './Types'
import { Grid } from '@material-ui/core'

export default class Main extends Component<Types.MainType, {}, any> {
    render() {

        let posts: ReactNode[] = this.props.posts.map((element: Types.PostType, i, arr) => <Post key={i} id={element.id} author={element.author} date={element.date} title={element.title} header={element.header} text={element.text} />)

        return (
            <div>
                <Bar />
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
}
