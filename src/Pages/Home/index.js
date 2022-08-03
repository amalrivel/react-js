import * as React from "react";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import OurServices from "../../Components/OurServices";
import WhyUs from "../../Components/WhyUs";
import Testimony from "../../Components/Testimony";
import CTABanner from "../../Components/CTABanner";
import FAQ from "../../Components/FAQ";
import Footer from "../../Components/Footer";
import Complete from "../../Assets/icon_complete.png";
import Price from "../../Assets/icon_price.png";
import Hrs from "../../Assets/icon_24hrs.png";
import Professional from "../../Assets/icon_professional.png";
import Logo from "../../Assets/logo.png";
import Car from "../../Assets/img_car.png";
import Service from "../../Assets/img_service.png";
import Facebook from "../../Assets/icon_facebook.svg";
import Mail from "../../Assets/icon_mail.svg";
import Instagram from "../../Assets/icon_instagram.svg";
import Twitch from "../../Assets/icon_twitch.svg";
import Twitter from "../../Assets/icon_twitter.svg";
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
    <Link to={"/react-js/carimobil"}>
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

  // Why Us
  const content = [
    {
      img: Complete,
      name: "Mobil Lengkap",
      desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    },
    {
      img: Price,
      name: "Harga Murah",
      desc: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    },
    {
      img: Hrs,
      name: "Layanan 24 Jam",
      desc: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    },
    {
      img: Professional,
      name: "Sopir Profesional",
      desc: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    },
  ];

  const propsWhyUs = { content };

  // Testimony
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleOnNextClick = () => {
    currentIndex <= -100
      ? setCurrentIndex(100)
      : setCurrentIndex(currentIndex - 100);
  };
  const handleOnPrevClick = () => {
    currentIndex >= 100
      ? setCurrentIndex(-100)
      : setCurrentIndex(currentIndex + 100);
  };
  console.log(currentIndex);

  const propsTestimony = {handleOnNextClick, handleOnPrevClick, currentIndex}

  // FAQ
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const FAQcontent = [
    {
      no: 1,
      summary: "Apa saja syarat yang dibutuhkan?",
    },
    {
      no: 2,
      summary: "Berapa hari minimal sewa mobil lepas kunci?",
    },
    {
      no: 3,
      summary: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
    },
    {
      no: 4,
      summary: "Apakah Ada biaya antar-jemput?",
    },
    {
      no: 5,
      summary: "Bagaimana jika terjadi kecelakaan",
    },
  ];

  const propsFAQ = { FAQcontent , expanded, handleChange};


  // Footer
  const facebook = Facebook;
  const instagram = Instagram;
  const mail = Mail;
  const twitter = Twitter;
  const twitch = Twitch;
  const icon = [ facebook, instagram, mail, twitter, twitch ];
  const propsFooter = { navList, logo, icon };

  return (
    <React.Fragment>
      <Navbar {...propsNavbar} />
      <Hero {...propsHero} />
      <OurServices {...propsOurService} />
      <WhyUs {...propsWhyUs} />
      <Testimony {...propsTestimony}/>
      <CTABanner />
      <FAQ {...propsFAQ}/>
      <Footer {...propsFooter} />
    </React.Fragment>
  );
};

export default Home;
