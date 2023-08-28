import { useEffect, useState } from "react";
import { RemotePost } from "../types/post.type";
import { PostModel } from "../models/post.model";

export const usePosts = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(()=>{
      const fetchPosts = async () => {
        const response = await fetch("/posts")
  
        const postsData: RemotePost[] = await response.json()
        
        setPosts(postsData.map((post:RemotePost)=> new PostModel(post)))
      }
  
      fetchPosts()
    },[])

    return {
        posts
    }
}