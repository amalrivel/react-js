import * as React from "react";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import Logo from "../../Assets/logo.png";
import Car from "../../Assets/img_car.png";
import Service from "../../Assets/img_service.png";
import OurServices from "../../Components/OurServices";
import WhyUs from "../../Components/WhyUs";
import Testimony from "../../Components/Testimony";
import CTABanner from "../../Components/CTABanner";
import FAQ from "../../Components/FAQ";

const Home = () => {
  const logo = Logo;
  const car = Car;
  const service = Service;
  const navList = ["Our Services", "Why Us", "Testimonial", "FAQ"];
  const OurService = [
    "Sewa Mobil Dengan Supir di Bali 12 Jam",
    "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    "Sewa Mobil Jangka Panjang Bulanan",
    "Gratis Antar - Jemput Mobil di Bandara",
    "Layanan Airport Transfer / Drop In Out",
  ];

  const [toggleDrawer, setToggleDrawer] = React.useState(false);

  const toggleDrawerHandler = () => {
    setToggleDrawer(!toggleDrawer);
  };

  const props = {
    logo,
    navList,
    toggleDrawerHandler,
    toggleDrawer,
    car,
    service,
    OurService,
  };

  return (
    <React.Fragment>
      <Navbar {...props} />
      <Hero {...props} /> 
      <OurServices {...props} />
      <WhyUs {...props} />
      <Testimony {...props} />
      <CTABanner {...props} />
      <FAQ {...props} />
    </React.Fragment>
  );
};

export default Home;
