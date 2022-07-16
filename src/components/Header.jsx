const Header = (props) => {
  return (
    <nav className="bg-orange-400 w-full h-auto py-3 flex">
      <label className="ml-auto ">
        <div className="flex items-center">
          <input className="rounded-xl pl-6 py-2" placeholder="Search" type="text" />
        </div>
      </label>
    </nav>
  );
};

export default Header;
