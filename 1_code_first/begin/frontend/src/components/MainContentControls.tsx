function MainContentControls() {
  return (
    <nav className="mt-8 flex gap-2.5 text-3xl">
      <button type="button" className="cursor-pointer">
        Popular
      </button>
      <span>|</span>
      <button type="button" className="cursor-pointer">
        New
      </button>
    </nav>
  );
}

export default MainContentControls;
