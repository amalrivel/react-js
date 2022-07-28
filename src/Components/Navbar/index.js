import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { SwipeableDrawer } from "@mui/material";

const Home = (props) => {
  return (
    <div className="px-4 py-2.5">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <img src={props.logo} alt="logo" />
        <div className="hidden sm:block">
          <ul className="flex flex-row">
            {props.navList.map((item) => (
              <li className="p-4">
                <a href={"#" + item}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block sm:hidden">
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