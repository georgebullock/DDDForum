import type { ComponentPropsWithoutRef } from "react";
import PostList from "../components/PostList";

type MainContentProps = ComponentPropsWithoutRef<"section">;

function MainContent({ className }: MainContentProps) {
  return (
    <>
      <div className={className}>
        <div className="mt-8 flex gap-2.5 text-3xl">
          <h2>Popular</h2>
          <span>|</span>
          <h2> New</h2>
        </div>
        <div>
          <PostList className="my-5 flex flex-col gap-5"></PostList>
        </div>
      </div>
    </>
  );
}

export default MainContent;
