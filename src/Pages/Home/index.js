import * as React from "react";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import Logo from "../../Assets/logo.png";
import Car from "../../Assets/img_car.png";

const Home = () => {
  const logo = Logo;
  const car = Car;
  const navList = ["Our Services", "Why Us", "Testimonial", "FAQ"];

  const [toggleDrawer, setToggleDrawer] = React.useState(false);

  const toggleDrawerHandler = ()  => {
    setToggleDrawer(!toggleDrawer);
  };

  const props = { logo, navList, toggleDrawerHandler , toggleDrawer, car};
  
  return (
    <React.Fragment>
      <Navbar {...props} />
      <Hero {...props}/>
    </React.Fragment>
  );
};

export default Home;
