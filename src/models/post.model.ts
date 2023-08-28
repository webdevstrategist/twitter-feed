import moment from "moment";
import { RemotePost } from "../types/post.type";

export class Post {
    constructor(private remotePost: RemotePost){}

    get post(){
        return {
            postId:this.remotePost.postId,
          authorName:this.remotePost.authorName,
          content:this.remotePost.content,
          avatar: this.remotePost.avatar, 
          publishedDate:moment(this.remotePost.publishedDate).fromNow(),
        }
    }

    get isCurrentUser(){
        return this.remotePost.authorName == "Sandra Lindgren"
    }
}