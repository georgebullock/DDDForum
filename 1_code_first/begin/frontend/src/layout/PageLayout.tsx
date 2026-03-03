import type { PropsWithChildren } from "react";

type ContentContainerProps = PropsWithChildren<{ className?: string }>;

function ContentContainer({ children, className }: ContentContainerProps) {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
}

export default ContentContainer;
