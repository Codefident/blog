export type PostType = {
    id: number,
    author: string,
    date: Date,
    title: string,
    text: string
}

export type MainType = {
    posts: PostType[]
}