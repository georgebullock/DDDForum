import type { ComponentPropsWithoutRef } from "react";

type PostListProps = ComponentPropsWithoutRef<"ul">;

const posts = [
  {
    id: 1,
    title: "First Post",
    votes: 5,
    timeAgo: "2 days ago",
    username: "username",
    comments: 0,
  },
  {
    id: 2,
    title: "Second Post!",
    votes: 2,
    timeAgo: "1 month ago",
    username: "username",
    comments: 3,
  },
  {
    id: 3,
    title: "Why DDD?",
    votes: 7,
    timeAgo: "10 days ago",
    username: "username",
    comments: 3,
  },
];

const postList = posts.map((post) => {
  return (
    <li className="flex">
      <div className="flex flex-col justify-center mr-4">
        <div className="">
          <img className="invert" src="./arrow.svg" />
        </div>
        <div className="inline-block text-center py-4">{post.votes}</div>
        <div className="">
          <img className={"transform rotate-180 invert"} src="./arrow.svg" />
        </div>
      </div>
      <article className="">
        <h3 className="text-2xl mb-3">{post.title}</h3>
        <div className="flex gap-4 mb-1.5">
          <span>{post.timeAgo}</span>
          <a href="/member/username">{post.username}</a>
        </div>
        <div className="flex gap-2">
          <span className="">{post.comments}</span>
          <span>comments</span>
        </div>
      </article>
    </li>
  );
});

const PostList = ({ className }: PostListProps) => {
  return <ul className={className}>{postList}</ul>;
};

export default PostList;
