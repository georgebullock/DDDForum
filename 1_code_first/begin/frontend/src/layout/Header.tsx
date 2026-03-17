import type { ComponentPropsWithoutRef } from "react";

type HeaderProps = ComponentPropsWithoutRef<"header">;

function Header({ className }: HeaderProps) {
  return (
    <>
      <header className={className}>
        <div>
          <img src="./dddforumlogo.png" />
        </div>
        <div>
          <h1 className="text-4xl">Product Forum</h1>
          <h3>Where product managers connect</h3>
        </div>
        <nav className="flex gap-5 text-2xl">
          <div className="flex min-w-28 justify-center border border-yellow-600 p-2">
            <a href="/submit">Submit</a>
          </div>
          <div className="flex min-w-28 justify-center border border-yellow-600 p-2">
            <a href="/register">Join</a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
