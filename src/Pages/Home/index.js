import * as React from "react";
import Navbar from "../../Components/Navbar";
import Logo from "../../Assets/logo.png";

const Home = () => {
  const logo = Logo;
  const navList = ["Our Services", "Why Us", "Testimonial", "FAQ"];

  const [toggleDrawer, setToggleDrawer] = React.useState(false);

  const toggleDrawerHandler = ()  => {
    setToggleDrawer(!toggleDrawer);
  };

  const props = { logo, navList, toggleDrawerHandler , toggleDrawer};
  

  return (
    <React.Fragment>
      <Navbar {...props} />
    </React.Fragment>
  );
};

export default Home;
