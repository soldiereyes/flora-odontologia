import './Sidebar.css';
import {FiHome, FiMapPin, FiSettings, FiUser} from "react-icons/fi";
import {Link} from "react-scroll";

const Sidebar = ({isOpen}: any) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>

            <div className="icon-container">
                <Link
                    to={'section1'}
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={700}>
                    <FiHome/>
                </Link>
                <Link
                    to={'section2'}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}>
                    <FiSettings/>
                </Link>
                <Link
                    to={'section3'}
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={1000}>
                    <FiUser/>
                </Link>
                <Link
                    to={'section4'}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}>
                    <FiMapPin/>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
