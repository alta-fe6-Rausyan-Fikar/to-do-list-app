import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className="bg-orange-400 w-full h-auto py-3 flex">
      <label className="ml-auto ">
        <div className="flex items-center">
          <input className="rounded-xl pl-6 py-2" placeholder="Search" type="text" />
        </div>
      </label>
      <Link to="/">
        <FiHome className="text-4xl ml-10" />
      </Link>
    </nav>
  );
};

export default Header;
