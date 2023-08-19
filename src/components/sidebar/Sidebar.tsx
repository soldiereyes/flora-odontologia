import './Sidebar.css';
import {FiHome, FiMapPin, FiSettings, FiUser} from "react-icons/fi";

const Sidebar = ({isOpen}:any) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>

            <div className="icon-container">
                <FiHome />
                <FiSettings />
                <FiUser />
                <FiMapPin />
            </div>
        </div>
    );
};

export default Sidebar;
