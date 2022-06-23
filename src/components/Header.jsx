import { FcTodoList } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className="bg-orange-400 w-full h-auto py-3 flex">
      <Link to="/">
        <FcTodoList className="text-3xl" />
      </Link>
      <label className="ml-10 ">
        <div className="flex items-center">
          <input className="rounded-xl pl-6 py-2" placeholder="Search" type="text" />
        </div>
      </label>
    </nav>
  );
};

export default Header;
