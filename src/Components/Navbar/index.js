import * as React from "react";
import {Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { SwipeableDrawer } from "@mui/material";

const Home = (props) => {
  return (
    <div className="lg:px-36 md:px-12 sm:px-8 px-4 py-6 bg-blue-50">
      <div className=" flex flex-wrap justify-between items-center">
        <Link to={`/`}><img src={props.logo} alt="logo" /></Link>
        <div className="sm:block hidden">
          <ul className="flex flex-row">
            {props.navList.map((item) => (
              <li className="pb-4 px-4">
                <a href={"#" + item}>{item}</a>
                {/* <p onClick={() => window.location.replace("#" + item)}>{item}</p> */}
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:hidden block">
          <button onClick={props.toggleDrawerHandler}>
            <MenuIcon />
          </button>
          <SwipeableDrawer
            anchor={"right"}
            open={props.toggleDrawer}
            onClose={props.toggleDrawerHandler}
            onOpen={props.toggleDrawerHandler}
          >
            <div className="w-48">
              <div className="px-4 py-2.5">
                <div className="flex flex-wrap justify-between items-center pb-4">
                  <p className="font-bold">BCR</p>
                  <button onClick={props.toggleDrawerHandler}>
                    <CloseIcon />
                  </button>
                </div>
                <ul>
                  {props.navList.map((item) => (
                    <li className="py-4">
                      <a href={"#" + item}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwipeableDrawer>
        </div>
      </div>
    </div>
  );
};

export default Home;
