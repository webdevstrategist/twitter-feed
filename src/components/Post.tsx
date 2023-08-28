import { LocalPost } from "../types/post.type";

export const Post = ({ post }: { post: LocalPost }) => {
  return (
    <div className="max-w-xl border-b border-solid border-zinc-100">
      <div className="my-4 flex gap-4 ">
        <img
          src={post.avatar}
          className="h-12 w-12 rounded-full flex items-center justify-center p-2"
        />
        <div>
          <p className="flex gap-2 items-center">
            <span className="font-semibold text-zinc-800">
              {post.authorName}
              {post.authorName === "Sandra Lindgren" && "*"}
            </span>
            <span className="font-semibold text-zinc-300">.</span>
            <span className="text-sm text-zinc-500">{post.publishedDate}</span>
          </p>
          <p className="text-zinc-600 text-base tracking-wide">
            {post.content}
          </p>
        </div>
      </div>
    </div>
  );
};
