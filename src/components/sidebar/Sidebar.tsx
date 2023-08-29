import './Sidebar.css';
import {FiHome, FiMapPin, FiUser} from "react-icons/fi";
import {Link} from "react-scroll";
import {GrGallery} from "@react-icons/all-files/gr/GrGallery";

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
                    <FiUser/>
                </Link>
                <Link
                    to={'section3'}
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={1000}>
                    <GrGallery/>
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
