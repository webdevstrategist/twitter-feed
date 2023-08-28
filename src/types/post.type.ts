export type RemotePost = {
    postId:string,
    authorName:string,
    content:string,
    publishedDate:Date,
    avatar: string
  }

export type LocalPost = {
    postId:string,
    authorName:string,
    content:string,
    avatar: string 
    publishedDate:string,
}