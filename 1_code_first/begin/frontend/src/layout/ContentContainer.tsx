import type { PropsWithChildren } from "react";

type ContentContainerProps = PropsWithChildren<{ className?: string }>;

function ContentContainer({
  children,
  className,
  ...rest
}: ContentContainerProps) {
  return (
    <>
      <div className={className} {...rest}>
        {children}
      </div>
    </>
  );
}

export default ContentContainer;
