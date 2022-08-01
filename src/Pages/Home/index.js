import * as React from "react";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import OurServices from "../../Components/OurServices";
import WhyUs from "../../Components/WhyUs";
import Testimony from "../../Components/Testimony";
import CTABanner from "../../Components/CTABanner";
import FAQ from "../../Components/FAQ";
import Logo from "../../Assets/logo.png";
import Car from "../../Assets/img_car.png";
import Service from "../../Assets/img_service.png";
import { Link } from "react-router-dom";

const Home = () => {
  // Navbar
  const logo = Logo;
  const navList = ["Our Services", "Why Us", "Testimonial", "FAQ"];
  const [toggleDrawer, setToggleDrawer] = React.useState(false);
  const toggleDrawerHandler = () => {
    setToggleDrawer(!toggleDrawer);
  };
  const propsNavbar = {
    logo,
    navList,
    toggleDrawer,
    toggleDrawerHandler,
  };

  // Hero
  const buttonMulaiSewa = (
    <Link to={"/carimobil"}>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-44 my-2">
        Mulai Sewa Mobil
      </button>
    </Link>
  );
  const car = Car;
  const propsHero = {
    car,
    buttonMulaiSewa,
  };

  // OurServices
  const service = Service;
  const OurService = [
    "Sewa Mobil Dengan Supir di Bali 12 Jam",
    "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    "Sewa Mobil Jangka Panjang Bulanan",
    "Gratis Antar - Jemput Mobil di Bandara",
    "Layanan Airport Transfer / Drop In Out",
  ];
  const propsOurService = {
    service,
    OurService,
  };

  return (
    <React.Fragment>
      <Navbar {...propsNavbar} />
      <Hero {...propsHero} />
      <OurServices {...propsOurService} />
      <WhyUs />
      <Testimony />
      <CTABanner />
      <FAQ />
    </React.Fragment>
  );
};

export default Home;
