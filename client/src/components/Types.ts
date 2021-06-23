export type PostType = {
    id: number,
    author: string,
    date: Date,
    title: string,
    header: string
}

export type ShowPostType = PostType & { text: string }

export type MainType = {
    posts: PostType[]
}