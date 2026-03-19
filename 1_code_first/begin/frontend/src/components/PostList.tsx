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

const PostList = ({ className, ...rest }: PostListProps) => {
  return (
    <ul className={className} {...rest}>
      {posts.map((post) => {
        return (
          <li key={post.id} className="flex">
            <div className="mr-4 flex flex-col justify-center">
              <div className="">
                <img className="invert" src="./arrow.svg" />
              </div>
              <div className="inline-block py-4 text-center">{post.votes}</div>
              <div className="">
                <img
                  className={"rotate-180 transform invert"}
                  src="./arrow.svg"
                />
              </div>
            </div>
            <article className="">
              <h3 className="mb-3 text-2xl">{post.title}</h3>
              <div className="mb-1.5 flex gap-4">
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
      })}
    </ul>
  );
};

export default PostList;
