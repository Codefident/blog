export type PostType = {
    id: number,
    author: string,
    date: Date,
    title: string,
    header: string,
    text: string
}

export type MainType = {
    posts: PostType[]
}