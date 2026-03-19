import type { ComponentPropsWithoutRef } from "react";

type HeaderProps = ComponentPropsWithoutRef<"header"> & {
  hasNav?: boolean;
};

function Header({ className, hasNav, ...rest }: HeaderProps) {
  return (
    <>
      <header className={className} {...rest}>
        <div>
          <img src="./dddforumlogo.png" />
        </div>
        <div>
          <h1 className="text-4xl">Product Forum</h1>
          <h2>Where product managers connect</h2>
        </div>
        {hasNav && (
          <nav className="flex gap-5 text-2xl">
            <a
              className="flex min-w-28 justify-center border border-yellow-600 p-2"
              href="/submit"
            >
              Submit
            </a>

            <a
              className="flex min-w-28 justify-center border border-yellow-600 p-2"
              href="/register"
            >
              Join
            </a>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
