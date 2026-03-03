import type { ComponentPropsWithoutRef } from "react";
import PostList from "../components/PostList";

type ContentContainerProps = ComponentPropsWithoutRef<"section">;

function ContentContainer({ className }: ContentContainerProps) {
  return (
    <>
      <div className={className}>
        <div className="flex mt-8 text-3xl gap-2.5">
          <h2>Popular</h2>
          <span>|</span>
          <h2> New</h2>
        </div>
        <div>
          <PostList className="flex flex-col gap-5 my-5"></PostList>
        </div>
      </div>
    </>
  );
}

export default ContentContainer;
