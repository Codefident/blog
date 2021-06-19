import React, { Component } from 'react'
import { PostType } from './Types'

export default class Post extends Component<PostType, {}> {
    constructor(props: PostType) {
        super(props)
    }

    render() {
        return (
            <div className="divPost">
                <h1>{this.props.title}</h1>
                <h3>{this.props.author}</h3>
                <em>{this.props.date}</em>
                <p dangerouslySetInnerHTML={{ __html: this.props.text }}></p>
                <hr />
            </div>
        )
    }
}
