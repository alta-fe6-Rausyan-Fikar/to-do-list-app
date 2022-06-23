import { BsCalendar2Date } from 'react-icons/bs';
import { VscInbox } from 'react-icons/vsc';
import { CgCalendarDates } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Col md={3} sm={12} lg={2}>
      <div className=" bg-white ">
        <ul className="mt-4 cursor-pointer space-y-2">
          <Link to="/inbox">
            <li className="flex items-center  mb-3 rounded-md space-x-3 py-1 pl-3 mr-2 hover:bg-orange-400 bg-orange-300">
              <VscInbox />
              <span className="text-black font-semibold">Inbox</span>
            </li>
          </Link>
          <Link to="/today">
            <li className="flex items-center mb-3 rounded-md space-x-3 py-1 pl-3 mr-2 hover:bg-orange-400 bg-orange-300">
              <BsCalendar2Date />
              <span className="text-black font-semibold">Today</span>
            </li>
          </Link>
          <Link to="/upcoming">
            <li className="flex items-cente mb-3 rounded-md space-x-3 py-1 pl-3 mr-2 hover:bg-orange-400 bg-orange-300">
              <CgCalendarDates />
              <span className="text-black font-semibold">Up coming</span>
            </li>
          </Link>
          <Link to="/filter">
            <li className="flex items-center mb-3 rounded-md space-x-3 py-1 pl-3 mr-2 hover:bg-orange-400 bg-orange-300">
              <BsCalendar2Date />
              <span className="text-black font-semibold">Filter</span>
            </li>
          </Link>
        </ul>
      </div>
    </Col>
  );
};

export default Sidebar;
