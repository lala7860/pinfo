// import { Outlet, Link } from "react-router-dom";
import logo from './images/pinfologo.png';
import './layout.css';
import 'remixicon/fonts/remixicon.css'
import {appendScript} from '../script/mountingScript';

const Layout = () => {
  appendScript("../script/layoutscript.js");
  return (
    <div className="layout-main">
      <div className="middle">
        <header>
          <img src={logo} alt="kuch nahi aya" />
        </header>
        <div className="mdlbtm">
          <div className="nav-main">
            <nav>
              {/* <Link to="/" title="Home"><i className="icon ri-home-4-line"></i> <span className="icon-text">Home</span></Link> */}
              <div className="nav-a"><i className="icon ri-home-4-line"></i> <span className="icon-text">Home</span></div>
              <div className="nav-a"><i className="icon ri-flight-takeoff-line"></i> <span className="icon-text">Flight</span></div>
              <div className="nav-a"><i className="icon ri-money-dollar-circle-line"></i> <span className="icon-text">Sales</span></div>
              <div className="nav-a"><i className="icon ri-money-euro-circle-line"></i> <span className="icon-text">Finance</span></div>
              <div className="nav-a"><i className="icon ri-user-settings-line"></i> <span className="icon-text">Admin</span></div>
              <div className="nav-a"><i className="icon ri-customer-service-line"></i> <span className="icon-text">Util</span></div>
            </nav>
          </div>
          <div className="preview">
            {/* <Outlet /> */}
          </div>
        </div>
      </div>
      <footer>
        <div className="f-left">
          <p>Wellcome: <span>LOGGEDIN USER</span></p>
        </div>
        <div className="f-middle">
          <p>group name</p>
        </div>
        <div className="f-right">
          <p>Version 1.0 <b>Powered by SAS</b></p>
        </div>
      </footer>
    </div>
  )
};

export default Layout;