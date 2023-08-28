import { useEffect, useState } from "react";
import { LocalPost, RemotePost } from "../types/post.type";
import moment from "moment";

export const usePosts = () => {
    const [posts, setPosts] = useState<LocalPost[]>([]);

    useEffect(()=>{
      const fetchPosts = async () => {
        const response = await fetch("/posts")
  
        const postsData: RemotePost[] = await response.json()
        
        setPosts(postsData.map((post:RemotePost)=>{
          return {
            postId:post.postId,
            authorName:post.authorName,
            content:post.content,
            avatar: post.avatar, 
            publishedDate:moment(post.publishedDate).fromNow(),
          }
        }))
      }
  
      fetchPosts()
    },[])

    return {
        posts
    }
}