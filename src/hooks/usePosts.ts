import { RemotePost } from "../types/post.type";
import { useEffect, useState } from "react";
import { Post } from "../models/post.model";

export const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      const response = await fetch("/posts")

      const postsData: RemotePost[] = await response.json()
      
      setPosts(postsData.map((post:RemotePost)=> new Post(post)))
    }

    fetchPosts()
  },[])
 
  return {
    posts
  }
}