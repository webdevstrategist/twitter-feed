import { LocalPost } from "../types/post.type";
import { usePosts } from "../hooks/usePosts";
import { Post } from "./Post";

export const Posts = () => {
  const { posts } = usePosts()

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-6">
      <h1 className="font-medium text-2xl text-zinc-800">Posts</h1>
      {posts.map((post:LocalPost) => <Post  post={post}/>)}
      <button className="text-zinc-600 bg-zinc-100 py-1 px-3 my-4 rounded-md hover:bg-zinc-200">More...</button>
    </div>
  );
};
