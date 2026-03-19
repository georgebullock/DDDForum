import type { ComponentPropsWithoutRef } from "react";

type MainContentProps = ComponentPropsWithoutRef<"main">;

function MainContent({ children, className, ...rest }: MainContentProps) {
  return (
    <>
      <main className={className} {...rest}>
        <div>{children}</div>
      </main>
    </>
  );
}

export default MainContent;
