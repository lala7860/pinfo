import "./App.css";
import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import pic from './images/pic.png'
import logo from './images/logo1.PNG';
import { motion } from "framer-motion";
import FlightIcon from '@mui/icons-material/Flight';
import TocRoundedIcon from '@mui/icons-material/TocRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EuroRoundedIcon from '@mui/icons-material/EuroRounded';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import {AttachMoneyRounded} from "@mui/icons-material";
import Item from "./component/Item";


const sidebar = document.querySelector(".sidebar");


function App() {
  const [open, setOpen] = useState(true);

  // for collpsing sidebar
  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "3rem",
      transition: {
        delay: 0.4,
      },
    },
  };

  // if(sidebar.getClientRects()[0].width>74){
  //   sidebar.style = "transform: rotate(180deg);"
  // }
  // else{
  //   sidebar.style = "transform: none;"
  // }

  // const profileVariants = {
  //   true: {
  //     alignSelf: "center",
  //     width: "4rem",
  //   },
  //   false: {
  //     alignSelf: "flex-start",
  //     marginTop: "2rem",
  //     width: "3rem",
  //   },
  // };
  return (
    <div className="App">
      <header>
       <div className="img1">
        <img  src={logo} alt="no pic" />
        
        </div>
         
         <div className="profile_img">
          <img src={pic} alt ="no pic2"/>
        
          <div className="nam">
         <h4>Mohd Nouman</h4>
         </div>
         </div>
         
        
       </header>
       <div className="body-container">

       
      <motion.div
        data-Open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar_container"
      >
        {/* sidebar div */}
        <motion.div
          className="sidebar"
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}
        >
          {/* lines_icon */}
          <motion.div
            whileHover={{
              scale: 1.2,
               rotate: 180,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3.5px)",
              WebkitBackdropFilter: "blur(3.5px)",
              // border: "1px solid rgba( 255, 255, 255, 0.18 )",
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className="lines_icon"
          >
            <TocRoundedIcon />
          </motion.div>
         
          {/* groups */}
          <div className="groups">
            {/* group 1 */}
            <div className="group">
              
              <Link to="/"><Item icon={<HomeRoundedIcon />} name="Home" /> </Link>
              {/* <Link to="/Home" >hello</Link> */}
              <Link to="/Flight"><Item icon={<FlightIcon />} name="Flight" /></Link>
              {/* nhi chl rha */}
             
              <Item icon={<AttachMoneyRounded />} name="Sales" />
              <Item icon={<EuroRoundedIcon />} name="Finance" />
            <Item icon={<SupervisorAccountOutlinedIcon />} name="Admin" />
           
            <Link to="/UsageMatrix"><Item icon={<ContactSupportRoundedIcon />} name="UsageMatrix" /></Link>

            
            </div>
          </div>
          
        </motion.div>
      </motion.div>
    
        <div className="preview">
                { <Outlet /> }
        </div>
      </div>
      <footer>
          <div className="f-left">
            <p>Group Name: <span><b>Pinfo_security_sk</b></span></p>
          </div>
          <div className="f-middle">
            <p ><b>SAS</b></p>
          </div>
          <div className="f-right">
            <p>Version 2.0</p>
          </div>
        </footer>
    </div>
  );
}

export default App;