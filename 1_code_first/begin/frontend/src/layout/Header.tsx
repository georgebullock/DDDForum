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
        <nav className="flex gap-3 text-2xl">
          <div>
            <a href="/submit">Submit</a>
          </div>
          <div>
            <a href="/register.html">Join</a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
